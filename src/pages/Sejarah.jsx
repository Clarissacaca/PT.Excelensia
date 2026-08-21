import PageHero from "../components/PageHero.jsx";
import "./pages.css";

const TIMELINE = [
  {
    year: "2013",
    text: "PT Excelenia didirikan sebagai penyedia jasa dan barang untuk mitra swasta di wilayah Jabodetabek.",
  },
  {
    year: "2016",
    text: "Memperluas cakupan layanan ke pengadaan barang dengan membangun jaringan pemasok yang terverifikasi.",
  },
  {
    year: "2019",
    text: "Memperoleh sertifikasi mutu dan mulai bermitra dengan sejumlah instansi pemerintah dan BUMN.",
  },
  {
    year: "2022",
    text: "Membentuk divisi khusus manajemen proyek untuk menangani penugasan berskala besar dan multi-lokasi.",
  },
  {
    year: "2025",
    text: "Terus tumbuh sebagai mitra penyediaan jasa dan barang tepercaya dengan lebih dari 180 proyek terselesaikan.",
  },
];

export default function Sejarah() {
  return (
    <>
      <PageHero crumbs={["Beranda", "Tentang Kami", "Sejarah"]} title="Sejarah Perusahaan" />
      <section className="section">
        <div className="container">
          <div className="prose" style={{ marginBottom: 48 }}>
            <p>
              PT Excelensia Trust Medica adalah perusahaan perdagangan dan jasa.
              Usaha bidang perdagangan meliputi penyediaan barang proteksi radiasi, 
              barang pendukung ruangan radiologi, barang pendukung ruangan MRI.
            </p>
            <p>
              Usaha bidang jasa meliputi jasa teknik pekerjaan Persiaoan ruangan dan proteksi radiasi
              untuk peralatan kedokteran, khususnya peralatan radiologi dan laboratorium. Meliputi perancangan,
              pelaksanaan teknis dilapangan pengurusan perizinan peralatan radiologi. Selain itu, tenaga teknik kami dpaat melayani
              pekerjaan instalasi, perbaikan, dan pemeliharaan peralatan Kesehatan.
            </p>
          </div>

          <div className="timeline">
            {TIMELINE.map((t) => (
              <div className="timeline-item" key={t.year}>
                <div className="timeline-year">{t.year}</div>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
