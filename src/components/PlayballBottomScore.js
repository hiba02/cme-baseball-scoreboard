import React, { useState } from "react";
import "./PlayballBottomScore.scss";
// import hitterLogo from "../img/hitter-logo.png";
// import { FaBaseballBall } from "react-icons/fa";
// import {} from "react-icons/md";
// import {} from "react-icons/io";
import cn from "classnames";

const PlayballBottomScore = ({ score, scoreAway }) => {
  return (
    <div className="PlayballBottomScore-container">
      <span className="PlayballBottomScore-team">
        <div className="PlayballBottomScore-team-home">HOME</div>
        <div className="PlayballBottomScore-team-score">{score}</div>
      </span>
      <span className="PlayballBottomScore-team">
        <div className="PlayballBottomScore-team-away">AWAY</div>
        <div className="PlayballBottomScore-team-score">{scoreAway}</div>
      </span>
    </div>
  );
};
export default PlayballBottomScore;
