import React, { useState, Children } from "react";
import "./PlayballBottomPitch.scss";
import hitterLogo from "../img/hitter-logo.png";
import { FaBaseballBall } from "react-icons/fa";
import {
  IoIosBaseball,
  IoIosRadioButtonOn,
  IoMdAddCircle
} from "react-icons/io";
import cn from "classnames";

const PlayballBottomPitch = ({
  inning,
  countInning,
  topBottom,
  countStrike,
  strike,
  ball,
  countBall,
  out,
  countOut,
  activePlayWindow,
  addPitchNumber
}) => {
  return (
    <div className="PlayballBottomPitch-container">
      <div className="PlayballBottomPitch-title">
        <span className="PlayballBottomPitch-icon">
          <IoIosBaseball />
        </span>
        <span className="PlayballBottomPitch-order">&nbsp;&nbsp;PITCH</span>
      </div>
      <div
        className="PlayballBottomPitch-ball"
        onClick={() => {
          countBall();
          addPitchNumber();
        }}
      >
        <span className="PlayballBottomPitch-icon">
          <IoIosRadioButtonOn />
        </span>
        <span className="PlayballBottomPitch-ballCount">
          &nbsp;&nbsp;&nbsp;&nbsp;Ball
        </span>
      </div>
      <div
        className="PlayballBottomPitch-strike"
        onClick={() => {
          countStrike();
          addPitchNumber();
        }}
      >
        <span className="PlayballBottomPitch-icon">
          <IoIosRadioButtonOn />
        </span>
        <span className="PlayballBottomPitch-ballCount">&nbsp;Strike</span>
      </div>
      <div
        className="PlayballBottomPitch-play"
        onClick={() => {
          activePlayWindow();
          addPitchNumber();
        }}
      >
        <span className="PlayballBottomPitch-icon">
          <IoMdAddCircle />
        </span>
        <span className="PlayballBottomPitch-ballCount">
          &nbsp;&nbsp;&nbsp;&nbsp;Play
        </span>
      </div>
    </div>
  );
};
export default PlayballBottomPitch;
