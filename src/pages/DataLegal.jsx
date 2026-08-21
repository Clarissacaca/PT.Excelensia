import PageHero from "../components/PageHero.jsx";
import "./pages.css";

export default function DataLegal() {
  return (
    <>
      <PageHero crumbs={["Beranda", "Publikasi", "Data Legal"]} title="Data Legal" />
      <section className="section">
        <div className="container">
          <div className="prose" style={{ marginBottom: 32 }}>
            <p>
              Dokumen legalitas PT Excelensia Trust Medica yang mendasari kegiatan usaha di
              bidang penyediaan jasa dan barang. Salinan lengkap tersedia atas
              permintaan resmi mitra.
            </p>
          </div>

          <div className="doc-photo">
            <img src="/Data-Legal.jpg" alt="Dokumen Data Legal PT Excelensia" />
          </div>
        </div>
      </section>
    </>
  );
}