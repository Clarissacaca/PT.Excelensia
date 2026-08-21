export default function PageHero({ crumbs, title }) {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="breadcrumb">
          {crumbs.map((c, i) => (
            <span key={c}>
              {i > 0 ? " / " : ""}
              {i === crumbs.length - 1 ? <span>{c}</span> : c}
            </span>
          ))}
        </p>
        <h1>{title}</h1>
      </div>
    </section>
  );
}
