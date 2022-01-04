import TrendCard from "../components/TrendCard/TrendCard";
import { TREND } from "../data";
import "./Trend.scss";

const Trend = () => {
  return (
    <ul className="main-trend">
      {TREND.map(trend => (
        <TrendCard key={trend.id} trend={trend} />
      ))}
    </ul>
  );
};

export default Trend;
