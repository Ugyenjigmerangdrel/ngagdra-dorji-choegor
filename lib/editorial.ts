export const publication = "Establishment of Retreat Centers in Eastern Bhutan";

export type SourceRef = {
  publication: typeof publication;
  pages: number[];
};

export type Verification = {
  status: "source_verified" | "needs_current_confirmation" | "transcription_required";
  note?: string;
};

export const source = (...pages: number[]): SourceRef => ({ publication, pages });

