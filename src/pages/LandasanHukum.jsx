import PageHero from "../components/PageHero.jsx";
import "./pages.css";

export default function LandasanHukum() {
  return (
    <>
      <PageHero crumbs={["Beranda", "Publikasi", "Landasan Hukum"]} title="Landasan Hukum" />
      <section className="section">
        <div className="container">
          <div className="prose" style={{ marginBottom: 32 }}>
            <p>
              Kegiatan usaha PT Excelensia Trust Medica dijalankan dengan mengacu pada
              peraturan perundang-undangan yang berlaku di bidang penyediaan
              jasa dan barang.
            </p>
          </div>

          <div className="doc-photo">
            <img src="/Landasan-Hukum.png" alt="Dokumen Landasan Hukum PT Excelenia" />
          </div>
        </div>
      </section>
    </>
  );
}