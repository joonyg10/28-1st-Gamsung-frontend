import React, { useState } from "react";
import Info from "../components/Info/Info";
import { STORY } from "../data";
import "./Story.scss";

const Story = () => {
  const [currIdx, setCurrIdx] = useState(0);

  return (
    <section className="main-story">
      <Info title="스토리">
        <p>
          당신의 삶을 특별하게 해줄 새로운 아이디어
          <br />
          스마트하게 사는 새로운 방법을 알아보세요
        </p>
      </Info>

      <div className="story-images">
        {STORY.map((story, idx) => (
          <img
            key={idx}
            src={story.url}
            alt="fake story"
            className={`${currIdx !== idx ? "hidden" : ""} `}
          />
        ))}
      </div>

      <ul className="story-lists">
        {STORY.map((story, idx) => (
          <li key={idx} className="story" onMouseEnter={() => setCurrIdx(idx)}>
            {story.story}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Story;
