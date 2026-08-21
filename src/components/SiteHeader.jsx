import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./SiteHeader.css";

const NAV = [
  { label: "Beranda", to: "/" },
  {
    label: "Tentang Kami",
    children: [
      { label: "Sejarah", to: "/tentang-kami/sejarah" },
      { label: "Visi & Misi", to: "/tentang-kami/visi-misi" },
      { label: "Struktur Organisasi", to: "/tentang-kami/struktur-organisasi" },
    ],
  },
  {
    label: "Layanan",
    children: [
      { label: "Bidang Penyediaan Jasa", to: "/layanan/jasa" },
      { label: "Bidang Penyediaan Barang", to: "/layanan/barang" },
    ],
  },
  {
    label: "Publikasi",
    children: [
      { label: "Data Legal", to: "/publikasi/data-legal" },
      { label: "Landasan Hukum", to: "/publikasi/landasan-hukum" },
    ],
  },
  { label: "Galeri", to: "/galeri" },
  { label: "Kontak", to: "/kontak" },
];

export default function SiteHeader() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(null);
  const navRef = useRef(null);
  const [query, setQuery] = useState(""); function handleSearchSubmit(e) {e.preventDefault();}

  useEffect(() => {
    function onClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, []);

  return (
    <header className="site-header">
      <div className="container brand-row">
        <NavLink to="/" className="brand" onClick={() => setMobileOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
              <img src="/LogoExclensia.png" alt="PT Excelenia" />
          </span>
          <span className="brand-text">
            <strong>PT.Excelensia Trust Medica</strong>
          </span>
        </NavLink>

        <div className="brand-actions">
  <form className="header-search" onSubmit={handleSearchSubmit} role="search">
    <label htmlFor="site-search" className="sr-only">Cari di situs</label>
    <input
      id="site-search"
      type="text"
      placeholder="Cari di situs..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
    <button type="submit" aria-label="Cari">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M20 20l-3.6-3.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </button>
  </form>

  <button
    className={`hamburger ${mobileOpen ? "is-open" : ""}`}
    aria-label="Buka menu navigasi"
    aria-expanded={mobileOpen}
    onClick={() => setMobileOpen((v) => !v)}
  >
    <span />
    <span />
    <span />
  </button>
</div>
      </div>

      <nav className={`main-nav ${mobileOpen ? "is-open" : ""}`} ref={navRef}>
        <ul className="container nav-list">
          {NAV.map((item) => (
            <li
              key={item.label}
              className={`nav-item ${item.children ? "has-children" : ""}`}
              onMouseEnter={() => item.children && setOpenMenu(item.label)}
              onMouseLeave={() => item.children && setOpenMenu(null)}
            >
              {item.children ? (
                <>
                  <button
                    className="nav-link nav-toggle"
                    aria-expanded={openMenu === item.label}
                    onClick={() =>
                      setOpenMenu(openMenu === item.label ? null : item.label)
                    }
                  >
                    {item.label}
                    <svg
                      className="chev"
                      viewBox="0 0 12 8"
                      width="10"
                      height="7"
                      aria-hidden="true"
                    >
                      <path
                        d="M1 1l5 5 5-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                    </svg>
                  </button>
                  <ul
                    className={`dropdown ${
                      openMenu === item.label ? "is-open" : ""
                    }`}
                  >
                    {item.children.map((child) => (
                      <li key={child.to}>
                        <NavLink
                          to={child.to}
                          onClick={() => {
                            setOpenMenu(null);
                            setMobileOpen(false);
                          }}
                          className={({ isActive }) =>
                            isActive ? "is-active" : undefined
                          }
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>

                  {/* mobile accordion */}
                  <button
                    className="mobile-sub-toggle"
                    onClick={() =>
                      setMobileSubOpen(
                        mobileSubOpen === item.label ? null : item.label
                      )
                    }
                  >
                    {item.label}
                    <span>{mobileSubOpen === item.label ? "−" : "+"}</span>
                  </button>
                  <ul
                    className={`mobile-sub ${
                      mobileSubOpen === item.label ? "is-open" : ""
                    }`}
                  >
                    {item.children.map((child) => (
                      <li key={child.to}>
                        <NavLink to={child.to} onClick={() => setMobileOpen(false)}>
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "is-active" : ""}`
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
