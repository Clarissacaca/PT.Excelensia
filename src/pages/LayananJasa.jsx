import PageHero from "../components/PageHero.jsx";
import "./pages.css";

const JASA = [
  { title: "Jasa Pembuatan Ruangan Radiology", text: "Pengelolaan Desain ruangan, Proteksi radiasi X-Ray, CT, Angiography, Konstruksi bangunan MRI, Konstruksi gantungan angiography, Konstruksi gantungan lampu operasi dan pendant, sistem Perlistrikan dan perkabelan serta sistem pendingin ruangan." },
  { title: "Jasa Pemasangan Peralatan Radiology", text: "Pemasangan CT-Scan, Cathlab/Angiography, Radiography & Fluroscopy." },
  { title: "Jasa Pemasangan Peralatan Pendukung Ruangan Radiology", text: "Pemasangan PB pada dinding, pemasangan kaca PB, dan lain-lain" },
  { title: "Jasa Pemasangan Peralatan Pendukung Ruangan MRI", text: "Pemasangan AC Central ruangan MRI, pemasangan Shiller pendingin MRI, pengerjaan pipa Quench pada alat MRI." },
  { title: "Jasa Bantuan Pengurusan Perizinan", text: "Pemanfaatan dan Operasional peralatan radiasi Radiology." },
];

const PROSES = [
  { title: "Identifikasi Kebutuhan", text: "Diskusi awal untuk memahami ruang lingkup dan target layanan mitra." },
  { title: "Penyusunan Proposal", text: "Penawaran teknis dan biaya disusun sesuai kebutuhan yang telah disepakati." },
  { title: "Pelaksanaan Layanan", text: "Tim kami menjalankan layanan sesuai jadwal dan standar mutu yang ditetapkan." },
  { title: "Evaluasi & Laporan", text: "Pelaporan berkala dan evaluasi hasil kerja sebagai bagian dari akuntabilitas." },
];

export default function LayananJasa() {
  return (
    <>
      <PageHero crumbs={["Beranda", "Layanan", "Bidang Penyediaan Jasa"]} title="Bidang Penyediaan Jasa" />
      <section className="section">
        <div className="container">
          <div className="prose" style={{ marginBottom: 40 }}>
            <p>
              PT Excelensia Trust Medica menyediakan berbagai layanan jasa profesional yang
              dirancang untuk mendukung kebutuhan operasional mitra, dikerjakan
              oleh tim yang berpengalaman di bidangnya masing-masing.
            </p>
          </div>

          <div className="detail-grid">
            {JASA.map((j) => (
              <div className="detail-card" key={j.title}>
                <h4>{j.title}</h4>
                <p>{j.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Alur Kerja</p>
            <h2>Bagaimana kami menjalankan layanan jasa</h2>
          </div>
          <ul className="process-list">
            {PROSES.map((p, i) => (
              <li key={p.title}>
                <span className="process-num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h4>{p.title}</h4>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
