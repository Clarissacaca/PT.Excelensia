import { NavLink } from "react-router-dom";
import "./pages.css";

export default function NotFound() {
  return (
    <div className="container notfound">
      <span className="eyebrow">404</span>
      <h1>Halaman tidak ditemukan</h1>
      <p style={{ margin: "16px 0 28px" }}>
        Halaman yang Anda cari tidak tersedia atau telah dipindahkan.
      </p>
      <NavLink to="/" className="btn btn-navy">
        Kembali ke Beranda
      </NavLink>
    </div>
  );
}
