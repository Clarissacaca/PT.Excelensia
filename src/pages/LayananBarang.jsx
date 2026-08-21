import PageHero from "../components/PageHero.jsx";
import "./pages.css";

const BARANG = [
  { title: "Material Proteksi Radiasi", text: "Lembaran PB, Kaca PB, Tabir PB, Alat Surveymeter, Dosimeter." },
  { title: "Alat Pendukung Ruangan MRI", text: "AC Central Ruangan MRI, Chiller MRI, Otlet gas medik." },
  { title: "Peralatan Operasional", text: "Pengadaan peralatan pendukung kegiatan lapangan dan fasilitas mitra." },
  { title: "Bahan & Material Proyek", text: "Penyediaan material sesuai spesifikasi teknis yang dibutuhkan proyek." },
];

const KEUNGGULAN = [
  { title: "Pemasok Terverifikasi", text: "Bekerja sama dengan jaringan pemasok yang telah melalui proses seleksi." },
  { title: "Kontrol Spesifikasi", text: "Pemeriksaan kesesuaian spesifikasi sebelum barang dikirim ke mitra." },
  { title: "Pengiriman Terjadwal", text: "Manajemen logistik yang menjaga ketepatan waktu pengiriman." },
];

export default function LayananBarang() {
  return (
    <>
      <PageHero crumbs={["Beranda", "Layanan", "Bidang Penyediaan Barang"]} title="Bidang Penyediaan Barang" />
      <section className="section">
        <div className="container">
          <div className="prose" style={{ marginBottom: 40 }}>
            <p>
              Kami mengelola proses pengadaan barang dengan rantai pasok yang
              terverifikasi, menjaga kualitas dan ketepatan spesifikasi hingga
              barang sampai ke tangan mitra.
            </p>
          </div>

          <div className="detail-grid">
            {BARANG.map((b) => (
              <div className="detail-card" key={b.title}>
                <h4>{b.title}</h4>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Keunggulan</p>
            <h2>Yang kami jaga dalam setiap pengadaan barang</h2>
          </div>
          <div className="value-grid">
            {KEUNGGULAN.map((k) => (
              <div className="value-card" key={k.title}>
                <h4>{k.title}</h4>
                <p>{k.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
