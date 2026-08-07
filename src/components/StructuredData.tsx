import { channels, leadership, org, site } from "@/content/nng";

/**
 * Keterangan terstruktur untuk mesin pencari.
 *
 * Hanya kanal yang sudah dikonfirmasi yang masuk ke `sameAs`. Mendaftarkan tautan
 * yang belum dipastikan di sini sama saja meminta mesin pencari menghubungkan merek
 * ini dengan akun yang belum tentu benar, dan itu jauh lebih sulit dibetulkan
 * daripada dibiarkan kosong sejak awal.
 */
export function StructuredData() {
  const sameAs = channels.filter((c) => c.verified).map((c) => c.href);

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SportsOrganization",
        "@id": `${site.url}/#organisasi`,
        name: org.name,
        alternateName: org.shortName,
        url: site.url,
        logo: `${site.url}/icon.svg`,
        image: `${site.url}/og.svg`,
        description: org.intro,
        foundingDate: org.founded,
        sport: "Esports",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Abepura",
          addressRegion: "Papua",
          addressCountry: "ID",
        },
        sameAs,
        founder: leadership.map((p) => ({
          "@type": "Person",
          name: p.legalName ?? p.displayName,
          alternateName: p.handle,
          jobTitle: p.role,
          url: p.links[0]?.href,
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#situs`,
        url: site.url,
        name: org.name,
        inLanguage: "id-ID",
        publisher: { "@id": `${site.url}/#organisasi` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Data berasal dari berkas isi milik sendiri, bukan masukan pembaca.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
