export const Header = ({ title }: { title: string }) => {
  return (
    <section className="header-section">
      <p className="header-breadcrumb">
        <span className="header-breadcrumb-bold">
          HOME &nbsp;
        </span>
        <span className="header-breadcrumb-regular">
          &nbsp;/ &nbsp; ARTICLES &nbsp;/
        </span>
      </p>
      <h1 className="header-title">
        {title}
      </h1>
    </section>
  );
};
