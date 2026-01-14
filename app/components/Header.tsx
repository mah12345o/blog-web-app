export const Header = ({ title }: { title: string }) => {
  return (
    <section style={{ padding: "2rem 0", textAlign: "center" }}>
      <p style={{ fontSize: "0.875rem", marginBottom: "0.25rem" }}>
        <span style={{ color: "#262D4D", fontWeight: 700, fontSize: "14px" }}>
          HOME &nbsp;
        </span>
        <span style={{ color: "#262D4D", fontWeight: 400 }}>
          &nbsp;/ &nbsp; ARTICLES &nbsp;/
        </span>
      </p>
      <h1 style={{ fontSize: "1.875rem", color: "#10152E", fontWeight: 600 }}>
        {title}
      </h1>
    </section>
  );
};
