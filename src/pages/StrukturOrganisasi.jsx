import PageHero from "../components/PageHero.jsx";
import "./pages.css";

function initials(name) {
  return name
    .replace(/\./g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function OrgNode({ lead, title, name, photo }) {
  return (
    <div className={`org-node ${lead ? "lead" : ""}`}>
      <div className="org-photo">
        {photo ? (
          <img src={photo} alt={name} />
        ) : (
          <span>{initials(name)}</span>
        )}
      </div>
      <strong>{title}</strong>
      <span>{name}</span>
    </div>
  );
}

export default function StrukturOrganisasi() {
  return (
    <>
      <PageHero
        crumbs={["Beranda", "Tentang Kami", "Struktur Organisasi"]}
        title="Struktur Organisasi"
      />
      <section className="section">
        <div className="container">
          <div className="prose" style={{ marginBottom: 48 }}>
            <p>
              Struktur organisasi PT Excelensia Trust Medica disusun untuk memastikan setiap
              lini kerja, mulai dari perencanaan hingga eksekusi di lapangan,
              berjalan dengan koordinasi yang jelas dan akuntabel.
            </p>
          </div>

          <div className="org-chart">
            <OrgNode lead title="Direktur Utama" name="DR. CHODIDAH BR" />

            <div className="org-connector" />
            <div className="org-row">
              <OrgNode title="Direktur" name="TASRIPIN S.T" />
              <OrgNode
                title="Direktur Operasional & Teknik"
                name="IR. ACHMAD SUHARTO ANSORI"
              />
            </div>

            <div className="org-connector" />
            <div className="org-row">
              <OrgNode title="PJ Umum & SDM" name="TRI BUDI SANTOSO" />
              <OrgNode title="PJ Administrasi & Keuangan" name="DJASWADI" />
              <OrgNode title="Project Management" name="M. AMMAR ROBBANI S.T" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}