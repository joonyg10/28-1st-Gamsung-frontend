import "./Info.scss";

const Info = ({ header, title, description, size, pos, bottom, children }) => {
  return (
    <section
      className="main-info"
      style={{ "--pos": pos, "--bottom": bottom, "--size": size }}
    >
      <p className="main-info-header">{header}</p>
      <h2 className="main-info-title">{title}</h2>
      <p className="main-info-description">{description}</p>
      {children}
    </section>
  );
};

export default Info;
