import { useState } from "react";
import PageHero from "../components/PageHero.jsx";
import "./pages.css";

export default function Kontak() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageHero crumbs={["Beranda", "Kontak"]} title="Hubungi Kami" />
      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <div className="icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                  <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </div>
              <div>
                <strong>Alamat</strong>
                <p> Jl.Raya Duta Pelni No.5 RT 05 RW 05 Cisalak, Depok.</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                  <path d="M5 5h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 14l5 2v4a2 2 0 0 1-2 2C10.5 22 2 13.5 2 5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              </div>
              <div>
                <strong>Telepon</strong>
                <p> (021) 87728556</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                  <path d="M4 6h16v12H4Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <div>
                <strong>Email</strong>
                <p>excelensia@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M12 7v5l3.2 1.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <strong>Jam Operasional</strong>
                <p>Senin – Jumat, 08.00 – 17.00 WIB</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field-row">
              <div className="field">
                <label htmlFor="nama">Nama</label>
                <input id="nama" type="text" placeholder="Nama lengkap" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="nama@perusahaan.com" required />
              </div>
            </div>
            <div className="field">
              <label htmlFor="subjek">Subjek</label>
              <input id="subjek" type="text" placeholder="Perihal pesan" required />
            </div>
            <div className="field">
              <label htmlFor="pesan">Pesan</label>
              <textarea id="pesan" rows={5} placeholder="Tulis pesan Anda..." required />
            </div>
            <button type="submit" className="btn btn-navy" style={{ alignSelf: "flex-start" }}>
              Kirim Pesan
            </button>
            {sent && (
              <p style={{ fontSize: 13.5, color: "var(--navy-700)" }}>
                Terima kasih, pesan Anda telah tersimpan. Tim kami akan segera menghubungi Anda.
              </p>
            )}
          </form>
        </div>

        <div className="container">
          <div className="map-frame">
            <iframe
              title="Lokasi PT Excelenia"
              src="https://www.openstreetmap.org/export/embed.html?bbox=106.78%2C-6.30%2C106.86%2C-6.24&layer=mapnik"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
