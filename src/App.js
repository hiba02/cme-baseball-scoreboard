import React, { useState, useCallback, useRef } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/Nav";
import CreateTeam from "./components/CreateTeam";
import ShowTeam from "./components/ShowTeam";
import CreatePlayer from "./components/CreatePlayer";
import ShowPlayers from "./components/ShowPlayers";
import Playball from "./components/Playball";

function App() {
  const [word, setWord] = useState("");
  const [userId, setUserId] = useState(1);
  const [userInfo, setUserInfo] = useState(null);
  const [teamNames, setTeamNames] = useState([{ id: 0, name: "Lions" }]); //[]
  // const [teamNames, setTeamNames] = useState(["Lions"]); //[]
  const [teamId, setTeamId] = useState(0);
  const [currentTeam, setCurrentTeam] = useState("");
  const [pitcher, setPitcher] = useState({
    name: "A Aron",
    uniform_number: "35",
    position: "RF",
  });
  const [hitter, setHitter] = useState({
    name: "A Aron",
    uniform_number: "35",
    position: "RF",
  });
  const nextId = useRef(1);
  const [playersInfo, setPlayersInfo] = useState([
    {
      team_id: 0,
      name: "R Hong-jin",
      uniform_number: "99",
      position: "P",
      bats: "R",
      throws: "R",
      check: false,
    },
    {
      team_id: 0,
      name: "H Andrew",
      uniform_number: "18",
      position: "C",
      bats: "R",
      throws: "R",
      check: false,
    },
    {
      team_id: 0,
      name: "T Eric    ",
      uniform_number: "30",
      position: "1B",
      bats: "L",
      throws: "L",
      check: false,
    },
    {
      team_id: 0,
      name: "G Grace",
      uniform_number: "05",
      position: "2B",
      bats: "R",
      throws: "R",
      check: false,
    },
    {
      team_id: 0,
      name: "M Mike",
      uniform_number: "27",
      position: "3B",
      bats: "R",
      throws: "R",
      check: false,
    },
    {
      team_id: 0,
      name: "C James",
      uniform_number: "09",
      position: "SS",
      bats: "R",
      throws: "R",
      check: false,
    },
    {
      team_id: 0,
      name: "W William",
      uniform_number: "04",
      position: "RF",
      bats: "R",
      throws: "R",
      check: false,
    },
    {
      team_id: 0,
      name: "Y Tom",
      uniform_number: "28",
      position: "LF",
      bats: "R",
      throws: "R",
      check: false,
    },
    {
      team_id: 0,
      name: "N Joshua",
      uniform_number: "21",
      position: "CF",
      bats: "L",
      throws: "L",
      check: false,
    },
  ]);

  const addTeamInClient = useCallback(
    (teamName) => {
      const team = {
        id: nextId.current,
        name: teamName,
      };
      setTeamNames(teamNames.concat(team));
      nextId.current += 1;
    },
    [teamNames]
  );

  //CreateTeam.js handleSubmit
  const addNewPlayerInClient = (
    team_id,
    name,
    uniform_number,
    position,
    bats,
    throws,
    check
  ) => {
    console.log(
      "App.js addNewPlayerInClient: parameter",
      teamId,
      name,
      uniform_number,
      position,
      bats,
      throws,
      check
    );
    const player = {
      team_id: team_id,
      name: name,
      uniform_number: uniform_number,
      position: position,
      bats: bats,
      throws: throws,
      check: check,
    };
    setPlayersInfo(playersInfo.concat(player));
    nextId.current += 1;
  };

  //remove player
  const removePlayerByUniformNum = (uniform_number) => {
    setPlayersInfo(
      playersInfo.filter((p) => p.uniform_number !== uniform_number)
    );
  };

  //Filter pitcher from players info
  const getPitcherFromPlayerInfo = (playersInfo) => {
    if (playersInfo) {
      setPitcher(playersInfo.filter((p) => p.position === "P")[0]);
      console.log("getPitcherFromPlayerInfo", pitcher);
    }
  };

  //Filter hitter from players info
  const getHitterFromPlayerInfo = (uniform) => {
    console.log("getHitterFromPlayerInfo", uniform);
    if (playersInfo) {
      setHitter(playersInfo.filter((p) => p.uniform_number === uniform)[0]);
      console.log("App.js getHitterFromPlayerInfo pitcher:", hitter);
      // toggleCheckFromHitterId(id);
    }
  };

  //Toggle check hitter from current hitter
  const toggleCheckFromHitterId = (uniform) => {
    if (hitter) {
      setPlayersInfo(
        playersInfo.map((p) =>
          p.id === uniform ? { ...p, check: !p.check } : p
        )
      );
      console.log("App.js toggleCheckFromHitterId hitter:", hitter);
    }
  };

  //Remove player
  const removePlayerById = (uniform) => {
    setPlayersInfo(playersInfo.filter((p) => p.uniform_numer !== uniform));
  };

  // TOFIX
  const getPlayersByteamId = (teamId) => {
    // setPlayersInfo(playersInfo.filter((p) => p.team_id === teamId));
  };
  // TOFIX
  const getCurrentTeamByTeamId = (teamId) => {
    console.log("getCurrentTeamByTeamId", teamId);
    // setTeamNames(teamNames.filter((t) => t.id === teamId));
  };

  return (
    <div id="wrap">
      <Router>
        <header>
          <Header />
        </header>
        <aside>
          <Nav userInfo={userInfo} currentTeam={currentTeam} />
        </aside>
        <section>
          <Switch>
            <Route path="/createTeam">
              <CreateTeam
                // addTeam={addTeam}
                // currentUserInfo={userInfo}
                // curretnUserId={userId}
                // addFavoriteTeam={addFavoriteTeam}
                // getUserIdTeamId={getUserIdTeamId}
                // getUserInfoByEmail={getUserInfoByEmail}
                addTeamInClient={addTeamInClient}
              />
            </Route>
            <Route path="/showTeam">
              <ShowTeam
                // getTeamNameByUserId={getTeamNameByUserId}
                // currentUserInfo={userInfo}
                // curretnUserId={userId}
                // addFavoriteTeam={addFavoriteTeam}
                teamNames={teamNames}
                // getPlayersFromSameTeam={getPlayersFromSameTeam}
                getPlayersByteamId={getPlayersByteamId}
                setTeamId={setTeamId}
                // setPlayersInfo={setPlayersInfo}
                currentTeam={currentTeam}
                setCurrentTeam={setCurrentTeam}
                getCurrentTeamByTeamId={getCurrentTeamByTeamId}
              />
            </Route>
            <Route path="/createPlayer">
              <CreatePlayer
                // user={userInfo}
                players={playersInfo}
                // pitcher={pitcher}
                // hitter={hitter}
                // addNewPlayers={addNewPlayers}
                teamId={teamId}
                addNewPlayerInClient={addNewPlayerInClient}
                // getHitterFromPlayerInfo={getHitterFromPlayerInfo}
                // toggleCheckFromHitterId={toggleCheckFromHitterId}
                removePlayerByUniformNum={removePlayerByUniformNum}
              />
            </Route>
            <Route path="/showPlayer">
              <ShowPlayers
                // user={userInfo}
                players={playersInfo}
                teamId={teamId}
                currentTeam={currentTeam}
                removePlayerByUniformNum={removePlayerByUniformNum}
              />
            </Route>
            <Route path="/playball">
              <Playball
                user={userInfo}
                teamId={teamId}
                players={playersInfo}
                pitcher={pitcher}
                hitter={hitter}
                getHitterFromPlayerInfo={getHitterFromPlayerInfo}
                toggleCheckFromHitterId={toggleCheckFromHitterId}
                removePlayerById={removePlayerById}
                getPitcherFromPlayerInfo={getPitcherFromPlayerInfo}
                removePlayerByUniformNum={removePlayerByUniformNum}
              />
            </Route>
          </Switch>
        </section>
        <footer></footer>
      </Router>
    </div>
  );
}

export default App;
