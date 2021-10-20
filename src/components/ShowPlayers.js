import React, { useState, useCallback } from "react";
import { Redirect, Link } from "react-router-dom";
import Roster from "./Roster";
import "./ShowPlayers.scss";

const ShowPlayers = ({
  user,
  players,
  teamId,
  currentTeam,
  removePlayerById,
  removePlayerByUniformNum,
}) => {
  // console.log("showPlayers component players: ", players);
  // console.log("showPlayers component players.team_id: ", players);
  // console.log("showPlayers component teamId: ", teamId);
  // console.log("showPlayers component currentTeam: ", currentTeam);
  const newPlayers = players.filter((t) => teamId === t.team_id);
  console.log("showPlayers component newPlayers: ", newPlayers);
  let rostNumber = 0;
  let positionNumber = 0;
  return (
    <div className="showPlayers_body">
      <div className="showPlayers_template">
        <div className="showPlayers_title">ROSTER</div>
        <div className="showPlayers_content">
          {players &&
            newPlayers.map((player) => (
              <Roster
                user={user}
                player={player}
                key={player.id}
                number={(rostNumber = rostNumber + 1)}
                removePlayerById={removePlayerById}
                removePlayerByUniformNum={removePlayerByUniformNum}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
export default ShowPlayers;
