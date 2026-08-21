import PageHero from "../components/PageHero.jsx";
import "./pages.css";

const MISI = [
  "Menyediakan jasa dan barang dengan standar mutu yang konsisten dan terukur.",
  "Menjunjung transparansi dan kepatuhan terhadap regulasi di setiap proses pengadaan.",
  "Membangun kemitraan jangka panjang berdasarkan kepercayaan dan hasil kerja yang nyata.",
  "Mengembangkan kapasitas tim secara berkelanjutan agar responsif terhadap kebutuhan mitra.",
];

const VALUES = [
  { title: "Integritas", text: "Jujur dan konsisten dalam setiap proses kerja." },
  { title: "Akuntabilitas", text: "Bertanggung jawab atas setiap komitmen yang dibuat." },
  { title: "Profesionalisme", text: "Bekerja sesuai standar dan kompetensi yang relevan." },
  { title: "Kolaborasi", text: "Membangun kerja sama yang saling menguntungkan." },
];

export default function VisiMisi() {
  return (
    <>
      <PageHero crumbs={["Beranda", "Tentang Kami", "Visi & Misi"]} title="Visi & Misi" />
      <section className="section">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card navy">
              <p className="eyebrow">Visi</p>
              <h3>Service for Excellence</h3>
              <p>
                Memberi Pelayanan Konstruksi berkualitas tinggi yang mendukung sektor Kesehatan, dengan penekanan pada Profesionalisme, Inovasi dan Kepuasan Pelanggan.
              </p>
            </div>
            <div className="vm-card">
              <p className="eyebrow">Misi</p>
              <ul className="mission-list" style={{ marginTop: 14 }}>
                {MISI.map((m, i) => (
                  <li key={m}>
                    <span className="num">{String(i + 1).padStart(2, "0")}</span>
                    <p>{m}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="section-head">
            <p className="eyebrow">Nilai Perusahaan</p>
            <h2>Nilai yang kami pegang</h2>
          </div>
          <div className="value-grid">
            {VALUES.map((v) => (
              <div className="value-card" key={v.title}>
                <h4>{v.title}</h4>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
