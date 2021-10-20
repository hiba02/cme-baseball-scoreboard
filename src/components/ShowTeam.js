import React, { useState, useCallback } from "react";
import { Redirect } from "react-router-dom";
import TeamList from "./TeamList";
import "./ShowTeam.scss";
const ShowTeam = ({
  teamNames,
  getPlayersFromSameTeam,
  getPlayersByteamId,
  setTeamId,
  setPlayersInfo,
  getCurrentTeamByTeamId,
  currentTeam,
  setCurrentTeam,
  removePlayerByUniformNum,
}) => {
  console.log("ShowTeam teamNames", teamNames);
  return (
    <div className="showTeam-template">
      <article className="showTeam-box">
        {teamNames
          ? teamNames.map((team) => (
              <TeamList
                key={team.id}
                team={team}
                // getPlayersFromSameTeam={getPlayersFromSameTeam}
                getPlayersByteamId={getPlayersByteamId}
                setTeamId={setTeamId}
                setPlayersInfo={setPlayersInfo}
                currentTeam={currentTeam}
                setCurrentTeam={setCurrentTeam}
                getCurrentTeamByTeamId={getCurrentTeamByTeamId}
              />
            ))
          : ""}
      </article>
    </div>
  );
};
export default ShowTeam;
