import { NavLink } from "react-router-dom";
import "./Beranda.css";

const STATS = [
  { value: "12+", label: "Tahun Beroperasi" },
  { value: "180+", label: "Proyek Terselesaikan" },
  { value: "40+", label: "Mitra Instansi" },
  { value: "98%", label: "Ketepatan Waktu Pengiriman" },
];

const WHY = [
  {
    title: "Legalitas Lengkap",
    text: "Seluruh perizinan, sertifikasi, dan dokumen legal perusahaan aktif dan terverifikasi.",
    icon: (
      <path d="M6 4h9l5 5v11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z M9 12l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
    ),
  },
  {
    title: "Tepat Waktu",
    text: "Pengendalian jadwal yang ketat pada setiap tahap pengadaan dan pelaksanaan pekerjaan.",
    icon: (
      <path d="M12 7v5l3.5 2M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Kendali Mutu",
    text: "Standar pemeriksaan barang dan jasa sebelum serah terima kepada mitra.",
    icon: (
      <path d="M4 12l5 5L20 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Layanan Responsif",
    text: "Tim operasional dan support yang mudah dihubungi sepanjang masa kerja sama.",
    icon: (
      <path d="M4 5h16v10H8l-4 4Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    ),
  },
];

export default function Beranda() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">PT.Excelensia Trust Medica</p>
            <h1>
              Mitra Penyediaan <em>Jasa &amp; Barang</em> yang Tepercaya
            </h1>
            <p>
              Kami membantu instansi dan perusahaan memenuhi kebutuhan
              pengadaan barang dan jasa secara profesional, sesuai regulasi,
              dan tepat waktu dari perencanaan hingga serah terima.
            </p>
            <div className="hero-actions">
              <NavLink to="/layanan/jasa" className="btn btn-gold">
                Lihat Layanan Kami
              </NavLink>
              <NavLink to="/kontak" className="btn btn-outline">
                Hubungi Kami
              </NavLink>
            </div>
          </div>
          <div className="hero-mark" aria-hidden="true">
  <div className="hero-mark-plate">
    <img src="/LogoExclensia.png" alt="" />
  </div>
</div>
        </div>
      </section>

      <section className="stats-strip">
        <div className="container stats-grid">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container about-teaser">
          <div className="about-teaser-visual">
            <p className="eyebrow">Tentang Kami</p>
            <h3>Berpengalaman dalam pengadaan barang &amp; jasa</h3>
            <p>
              PT Excelensia Trust Medica berdiri untuk menjawab kebutuhan mitra akan proses
              pengadaan yang transparan, akuntabel, dan efisien.
            </p>
            <NavLink to="/tentang-kami/sejarah" className="btn btn-gold" style={{ marginTop: 24 }}>
              Selengkapnya
            </NavLink>
          </div>

          <ul className="about-list">
            <li>
              <span className="dot" />
              <div>
                <h4>Sejarah Perusahaan</h4>
                <p>Perjalanan PT Excelensia Trust Medica sejak berdiri hingga menjadi mitra pengadaan tepercaya.</p>
              </div>
            </li>
            <li>
              <span className="dot" />
              <div>
                <h4>Visi &amp; Misi</h4>
                <p>Arah dan komitmen kami dalam menjalankan setiap penugasan pengadaan.</p>
              </div>
            </li>
            <li>
              <span className="dot" />
              <div>
                <h4>Struktur Organisasi</h4>
                <p>Susunan tim manajemen dan operasional yang menjalankan roda perusahaan.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Layanan</p>
            <h2>Dua bidang utama layanan kami</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <p className="eyebrow">01 — Jasa</p>
              <h3>Bidang Penyediaan Jasa</h3>
              <p>
                Layanan jasa profesional yang disesuaikan dengan kebutuhan
                operasional dan proyek mitra, dikerjakan oleh tim berpengalaman.
              </p>
              <NavLink to="/layanan/jasa">Lihat detail layanan →</NavLink>
            </div>
            <div className="service-card">
              <p className="eyebrow">02 — Barang</p>
              <h3>Bidang Penyediaan Barang</h3>
              <p>
                Pengadaan barang dengan rantai pasok yang terverifikasi,
                menjaga kualitas dan ketepatan spesifikasi hingga ke tangan mitra.
              </p>
              <NavLink to="/layanan/barang">Lihat detail layanan →</NavLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Kenapa Memilih Kami?</p>
            <h2>Standar kerja yang kami jaga di setiap penugasan</h2>
          </div>
          <div className="why-grid">
            {WHY.map((w) => (
              <div className="why-item" key={w.title}>
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" width="22" height="22">
                    {w.icon}
                  </svg>
                </div>
                <h4>{w.title}</h4>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <h2>Siap bekerja sama dengan PT Excelensia Trust Medica?</h2>
          <NavLink to="/kontak" className="btn btn-gold">
            Hubungi Tim Kami
          </NavLink>
        </div>
      </section>
    </>
  );
}
