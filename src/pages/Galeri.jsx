import PageHero from "../components/PageHero.jsx";
import "./pages.css";

const ITEMS = [
  { caption: "Hasil Ruangan Cathlab", photo: "/Page7.jpg" },
  { caption: "Ruangan MRI", photo: "/Page1.jpg" },
  { caption: "Foto Bersema Selesai Ruangan Cathlab Azurion 7", photo: "/Page2.jpg" },
  { caption: "Rancangan Ruangan Instalasi", photo: "/Page3.jpg" },
  { caption: "Pemasangan Alat Cathlab", photo: "/Page4.jpg" },
  { caption: "Hasil Ruangan Instalasi", photo: "/Page5.jpg" },
];

export default function Galeri() {
  return (
    <>
      <PageHero crumbs={["Beranda", "Galeri"]} title="Galeri" />
      <section className="section">
        <div className="container">
          <div className="prose" style={{ marginBottom: 32 }}>
            <p>
              Dokumentasi kegiatan dan penugasan PT Excelensia Trust Medica dalam menjalankan
              layanan penyediaan jasa dan barang bagi mitra.
            </p>
          </div>
          <div className="gallery-grid">
            {ITEMS.map((it) => (
              <div className="gallery-item" key={it.caption}>
                {it.photo && <img src={it.photo} alt={it.caption} />}
                <span>{it.caption}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}