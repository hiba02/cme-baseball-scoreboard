import React, { useState, Fragment } from "react";
import { Redirect, Link } from "react-router-dom";
import "./TeamList.scss";
// import logo from "../img/hitter-logo.png";
// import logo from "../img/baseball-ball.png";
import logo from "../img/glove-clipart-6.png";

const TeamList = ({
  team,
  // getPlayersFromSameTeam,
  getPlayersByteamId,
  setTeamId,
  setPlayersInfo,
  getCurrentTeamByTeamId,
  currentTeam,
  setCurrentTeam,
}) => {
  const [redirect, setRedirect] = useState(false);
  console.log("TeamList team getPlayersFromSameTeam", team);
  console.log("TeamList currentTeam", currentTeam);
  const { id, name } = team;

  const moveAndShowTeamRoster = (id, name) => {
    // getPlayersFromSameTeam(id);
    console.log("moveAndShowTeamRoster", id, name);
    setCurrentTeam(name);
    setTeamId(id);
    getPlayersByteamId(id);
    // getCurrentTeamByTeamId(id);
    setRedirect(true);
    // getCurrentTeamByTeamId(id);
  };

  return (
    <Fragment>
      <div
        className="teamList_body"
        onClick={() => {
          moveAndShowTeamRoster(id, name);
          setRedirect(true);
        }}
      >
        {redirect && <Redirect to="/showPlayer" />}
        <div
          className="teamList_contents"
          // onClick={() => moveAndShowTeamRoster(id)}
        >
          <div className="teamList_top">
            <div className="teamList_img">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="teamList_bottom">
            <div
              className="teamList_name"
              // onClick={() => moveAndShowTeamRoster(id)}
            >
              {name}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default TeamList;
