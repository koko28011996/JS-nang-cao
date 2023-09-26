const game = {
    team1:'Bayern Munich',
    team2 : ' brrussia Dortmund',
    players :  [
         [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski'
    ],
    [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
    ],
],
socer : '4:0',
scored: [ 'Lewandowski','Gnarby','Lewandowski','Hummels'],
date: 'Nov 9th , 2027',
odds: {
    team1: 1.33,
    x:3.25,
    team2: 6.5,
},
};
const [players1, players2] = game.players;
console.log(players1,players2);
// 2 k gia tri dau
const[gk,...fieldPlays] = players1;
console.log(gk, fieldPlays);
// 3.lay tat ca thanh phan trong mang
const allPlayers= [...players1, ...players2];
console.log(allPlayers);
// 4 . them 3 thanh phan vao trong mang
const players1final=[...players1, 'Thiago','Coutinho','Periscic'];
console.log(players1final);
//  5.
const {
    odds: {team1, x:draw ,team2}
} = game;
console.log(team1, draw, team2);
// 6
const printGoals = function(...players){
    console.log(players);
    console.log(`${players.length} ban thang duoc gi`)
}
printGoals(...game.scored);
// 7 in ra doi co kha nang thang
team1 < team2 && console.log('team1 co kha nang thang cao');
team1 > team2 && console.log('team2 co kha nang thang cao');

// 2.
const odds = Object.values(game.odds)
let a = 0;
for( const odd of odds){
    a += odd;
    a /= odds.length;
    console.log(a);
}
// 3 
for(const [team , odd] of Object.entries(game.odds) ){
    const teamStr = team ==='x' ?'hoa' :`thang ${game[team]}`;
    console.log(`ti le thang ${teamStr} ${odd}`);
}