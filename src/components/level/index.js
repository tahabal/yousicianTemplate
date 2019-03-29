import React from "react";

import "./level.css";

const LevelRing = props => {
  let progress = Math.round((props.level / 15) * 100);
  let normalizedRadius = 30 - 4 * 2;
  let circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  const fullCircleDashoffset = circumference - 1 * circumference;
  return (
    <div className="level-container">
      <svg height={30 * 2} width={30 * 2}>
        <circle
          className="level-circle-background"
          stroke="#575c66"
          fill="transparent"
          strokeWidth={4}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset: fullCircleDashoffset }}
          r={normalizedRadius}
          cx={30}
          cy={30}
        />
        <circle
          className="level-circle"
          stroke="#6fc13e"
          fill="transparent"
          strokeWidth={4}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={30}
          cy={30}
        />
      </svg>
      <span className="level-text">{props.level}</span>
    </div>
  );
};

export default LevelRing;
