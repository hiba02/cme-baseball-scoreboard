import React from "react";
import "./Roster.scss";
import {
  FaCaretUp,
  FaCaretDown,
  FaPlusCircle,
  FaMinusCircle,
} from "react-icons/fa";
const Roster = ({
  player,
  number,
  getHitterFromPlayerInfo,
  toggleCheckFromHitterId,
  removePlayerByUniformNum,
}) => {
  const {
    id,
    first_name,
    last_name,
    email,
    password,
    created_at,
    updated_at,
    user_id,
    team_id,
    name,
    uniform_number,
    position,
    bats,
    throws,
  } = player;

  // console.log("Roster number: ", number);

  return (
    <div className="roster_body">
      <span
        className="roster-icon-plus"
        onClick={() => {
          toggleCheckFromHitterId(uniform_number);
          getHitterFromPlayerInfo(uniform_number);
        }}
      >
        <FaPlusCircle />
      </span>
      <span className="roster-id">{number}</span>
      <span className="roster-name">
        {name},&nbsp;#{uniform_number}
      </span>
      {/* <span className="uniform_number">{uniform_number}</span> */}
      <span className="position">{position}</span>
      <span className="roster-icon-minus">
        <FaMinusCircle
          onClick={() => removePlayerByUniformNum(uniform_number)}
        />
      </span>
    </div>
  );
};

export default Roster;
