'use strict';

module.exports = (app) => {

  app.get("/api/competition/:competitionId", (req, res) => {
    res.send({
    "id": 1,
    "caption": "Ligue 1 2017/18",
    "league": "FL1",
    "year": "2017",
    "currentMatchday": 35,
    "numberOfMatchdays": 38,
    "numberOfGames": 380,
    "numberOfTeams": 20,
    "lastUpdated": 1525044008000
  });
});

  app.get("/api/competition/:competitionId/match/:matchDay", (req, res) => {
    res.send(
    [
      {
        "id": 351,
        "competitionId": 1,
        "date": 1525629600000,
        "status": "TIMED",
        "matchday": 36,
        "homeTeamName": "FC Metz",
        "awayTeamName": "Angers SCO",
        "result": {
          "goalsAwayTeam": 0,
          "goalsHomeTeam": 0
        }
      },
      {
        "id": 352,
        "competitionId": 1,
        "date": 1525629600000,
        "status": "TIMED",
        "matchday": 36,
        "homeTeamName": "Amiens SC",
        "awayTeamName": "Paris Saint-Germain",
        "result": {
          "goalsAwayTeam": 0,
          "goalsHomeTeam": 0
        }
      },
      {
        "id": 353,
        "competitionId": 1,
        "date": 1525629600000,
        "status": "TIMED",
        "matchday": 36,
        "homeTeamName": "SM Caen",
        "awayTeamName": "AS Monaco FC",
        "result": {
          "goalsAwayTeam": 0,
          "goalsHomeTeam": 0
        }
      },
      {
        "id": 354,
        "competitionId": 1,
        "date": 1525629600000,
        "status": "TIMED",
        "matchday": 36,
        "homeTeamName": "Dijon FCO",
        "awayTeamName": "EA Guingamp",
        "result": {
          "goalsAwayTeam": 0,
          "goalsHomeTeam": 0
        }
      },
      {
        "id": 355,
        "competitionId": 1,
        "date": 1525629600000,
        "status": "TIMED",
        "matchday": 36,
        "homeTeamName": "FC Nantes",
        "awayTeamName": "Montpellier Hérault SC",
        "result": {
          "goalsAwayTeam": 0,
          "goalsHomeTeam": 0
        }
      },
      {
        "id": 356,
        "competitionId": 1,
        "date": 1525629600000,
        "status": "TIMED",
        "matchday": 36,
        "homeTeamName": "Olympique Lyonnais",
        "awayTeamName": "ES Troyes AC",
        "result": {
          "goalsAwayTeam": 0,
          "goalsHomeTeam": 0
        }
      },
      {
        "id": 357,
        "competitionId": 1,
        "date": 1525629600000,
        "status": "TIMED",
        "matchday": 36,
        "homeTeamName": "Olympique de Marseille",
        "awayTeamName": "OGC Nice",
        "result": {
          "goalsAwayTeam": 0,
          "goalsHomeTeam": 0
        }
      },
      {
        "id": 358,
        "competitionId": 1,
        "date": 1525629600000,
        "status": "TIMED",
        "matchday": 36,
        "homeTeamName": "Stade Rennais FC",
        "awayTeamName": "RC Strasbourg Alsace",
        "result": {
          "goalsAwayTeam": 0,
          "goalsHomeTeam": 0
        }
      },
      {
        "id": 359,
        "competitionId": 1,
        "date": 1525629600000,
        "status": "TIMED",
        "matchday": 36,
        "homeTeamName": "AS Saint-Étienne",
        "awayTeamName": "FC Girondins de Bordeaux",
        "result": {
          "goalsAwayTeam": 0,
          "goalsHomeTeam": 0
        }
      },
      {
        "id": 360,
        "competitionId": 1,
        "date": 1525629600000,
        "status": "TIMED",
        "matchday": 36,
        "homeTeamName": "Toulouse FC",
        "awayTeamName": "OSC Lille",
        "result": {
          "goalsAwayTeam": 0,
          "goalsHomeTeam": 0
        }
      }
    ]
  );
});


};
