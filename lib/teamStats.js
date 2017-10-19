const team = {
  _players: [{ firstName: 'Pablo',
    lastName: 'Sanchez',
    age: 11 }],
  _games: [{ opponent: 'Broncos',
    teamPoints: 42, opponentPoints: 27 }],

  get player() {
    return this._players;
  },
  get games() {
    return this._games;
  },

  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this._players.push(player);
  },

  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this._players.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('1', '2', 3);

console.log(team._players);
console.log(team._games);