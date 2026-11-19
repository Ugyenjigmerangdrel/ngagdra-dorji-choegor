// Restores and enlarges the low-resolution photographs in public/media.
//
// Nothing is generated: no AI model is involved, so people and objects cannot change.
// Each photograph is (1) cleaned of JPEG compression blocks and noise, (2) enlarged with
// Lanczos resampling, and (3) sharpened along existing edges. Untouched originals are kept
// in media-originals/ and every run starts from them, so the script is safe to run again.
//
//   node scripts/enhance-images.mjs        (needs ffmpeg on the PATH)
import { execFile } from "node:child_process";
import { copyFile, mkdir, mkdtemp, readdir, rm, stat } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { promisify } from "node:util";
import sharp from "sharp";

const run = promisify(execFile);
const SOURCE = "public/media";
const ORIGINALS = "media-originals";
/** Photographs whose long side is under this are processed. */
const SMALL = 2600;
/** Long side after enlarging, and the most any photograph is enlarged. */
const TARGET = 3200;
const MAX_SCALE = 2.5;

async function* photos(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* photos(full);
    else if (/\.jpe?g$/i.test(entry.name)) yield full;
  }
}

const exists = (file) => stat(file).then(() => true, () => false);
const work = await mkdtemp(path.join(tmpdir(), "enhance-"));

for await (const file of photos(SOURCE)) {
  const original = path.join(ORIGINALS, path.relative(SOURCE, file));
  const kept = await exists(original);
  const { width, height } = await sharp(kept ? original : file).metadata();
  const long = Math.max(width, height);
  if (long >= SMALL) continue;

  if (!kept) {
    await mkdir(path.dirname(original), { recursive: true });
    await copyFile(file, original);
  }
  const scale = Math.min(MAX_SCALE, TARGET / long);
  const w = Math.round((width * scale) / 2) * 2;
  const h = Math.round((height * scale) / 2) * 2;
  // Small archive scans are compressed hardest, so they get the firmer clean-up.
  const small = long < 900;
  const filters = [
    `pp7=qp=${small ? 4 : 3}`,
    `nlmeans=s=${small ? 1.6 : 1.2}:p=5:r=9`,
    `scale=${w}:${h}:flags=lanczos+accurate_rnd+full_chroma_int`,
    `cas=${small ? 0.6 : 0.55}`,
  ].join(",");
  const png = path.join(work, "out.png");
  await run("ffmpeg", ["-hide_banner", "-loglevel", "error", "-y", "-i", original, "-vf", filters, png]);
  await sharp(png).jpeg({ quality: 92, chromaSubsampling: "4:4:4", mozjpeg: true }).toFile(file);
  console.log(`${path.relative(SOURCE, file)}  ${width}x${height} -> ${w}x${h}`);
}
await rm(work, { recursive: true, force: true });
