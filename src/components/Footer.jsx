import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <strong>PT Excelensia Trust Medica</strong>
          <p>
            Mitra penyediaan jasa dan barang yang mengutamakan kepatuhan,
            ketepatan waktu, dan mutu di setiap penugasan.
          </p>
        </div>

        <div>
          <h4>Navigasi</h4>
          <ul>
            <li><NavLink to="/">Beranda</NavLink></li>
            <li><NavLink to="/tentang-kami/sejarah">Tentang Kami</NavLink></li>
            <li><NavLink to="/layanan/jasa">Layanan</NavLink></li>
            <li><NavLink to="/publikasi/data-legal">Publikasi</NavLink></li>
            <li><NavLink to="/galeri">Galeri</NavLink></li>
          </ul>
        </div>

        <div>
          <h4>Layanan</h4>
          <ul>
            <li><NavLink to="/layanan/jasa">Bidang Penyediaan Jasa</NavLink></li>
            <li><NavLink to="/layanan/barang">Bidang Penyediaan Barang</NavLink></li>
          </ul>
        </div>

        <div>
          <h4>Kontak</h4>
          <ul className="footer-contact">
            <li>Jl.Raya Duta Pelni No.5 RT 05 RW 05 Cisalak, Depok.</li>
            <li>(021) 87728556</li>
            <li>excelensia@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} PT Excelensia Trust Medica. Seluruh hak cipta dilindungi.</span>
          <NavLink to="/kontak">Hubungi Kami</NavLink>
        </div>
      </div>
    </footer>
  );
}
