import Info from "../Info/Info";
import "./TrendCard.scss";

const TrendCard = ({ trend }) => {
  const { trendImgUrl, header, title, description } = trend;
  return (
    <section className="trend-card">
      <img src={trendImgUrl} alt="fake trend" />
      <Info header={header} title={title} description={description} />
    </section>
  );
};

export default TrendCard;
