import Link from "next/link";
import { EditorialImage } from "@/components/EditorialImage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Visit Ngagdra", "Location and source-listed contact information for Ngagdra Dorji Choegar in Kurizampa, Mongar, Eastern Bhutan.", "/visit");

export default function Page() {
  return (
    <>
      <section className="container visit-hero"><div><p className="eyebrow">Visit</p><h1>Visit Ngagdra Dorji Choegar.</h1><p className="lead">Plan directly with the institute before travelling to Kurizampa in Mongar, Eastern Bhutan.</p><Link className="button" href="#visitor-information">Read visitor information <span>↓</span></Link></div><dl><div><dt>Place</dt><dd>Kurizampa</dd></div><div><dt>District</dt><dd>Mongar</dd></div><div><dt>Region</dt><dd>Eastern Bhutan</dd></div></dl></section>
      <EditorialImage src="/media/institution/ngagdra-kurizampa.png" alt="Ngagdra Dorji Choegar above the Kurichu River at Kurizampa" caption="Ngagdra Dorji Choegar on the hillside above Kurizampa, Mongar." priority sizes="(max-width: 1280px) calc(100vw - 48px), 1200px" aspect="16 / 7" objectPosition="58% 52%" className="visit-landscape" />
      <section id="visitor-information" className="container visit-information section-pad"><header><p className="eyebrow">Before you travel</p><h2>Three things to know.</h2><p>Visits and teaching attendance require direct arrangement with the institute.</p></header><ol className="visit-information__rows"><li><span>01</span><div><h3>Find the institute</h3><p>The institute is in Kurizampa, above the Kurichu River and Kurizampa bridge in Mongar, Eastern Bhutan.</p></div></li><li><span>02</span><div><h3>Arrange your visit</h3><p>Teaching attendance and visits are arranged directly with the institute before travel.</p></div></li><li><span>03</span><div><h3>Follow local guidance</h3><p>Please follow the guidance of the monastic community during ceremonies, teachings and daily activities.</p></div></li></ol></section>
    </>
  );
}
