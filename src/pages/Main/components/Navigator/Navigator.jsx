import "./Navigator.scss";
const PLAYING = "playing";
const CURRENT = "current";

const Navigator = props => {
  const { currIdx, tabs, setCurrIdx, playing, top, color, children } = props;
  const navigatorStyle = {
    "--top": top,
    "--color": color,
  };

  const checkIsCurrent = idx => {
    if (currIdx !== idx) return "";
    else if (playing) return PLAYING;
    else return CURRENT;
  };

  return (
    <section className="navigator" style={navigatorStyle}>
      {children}
      <ul className="navigator-tabs">
        {tabs.map((tab, idx) => (
          <li
            key={idx}
            className={`tab ${checkIsCurrent(idx)}`}
            onClick={() => setCurrIdx(idx)}
          >
            {tab}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Navigator;
