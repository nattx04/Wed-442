document.addEventListener('DOMContentLoaded', function() {
    const dataTableBody = document.getElementById('leagueTable');

    const tableData = [
    {
      team: "Liverpool",
      played: 20,
      win: 13,
      draw: 6,
      loss: 1,
      goals_for: 43,
      goals_against: 18,
      goal_difference: 25,
      points: 45,
    },
    {
      team: "Aston Villa",
      played: 20,
      win: 13,
      draw: 3,
      loss: 4,
      goals_for: 43,
      goals_against: 27,
      goal_difference: 16,
      points: 42,
    },
    {
      team: "Manchester City",
      played: 19,
      win: 12,
      draw: 4,
      loss: 3,
      goals_for: 45,
      goals_against: 21,
      goal_difference: 24,
      points: 40,
    },
    {
      team: "Arsenal",
      played: 20,
      win: 12,
      draw: 4,
      loss: 4,
      goals_for: 37,
      goals_against: 20,
      goal_difference: 17,
      points: 40,
    },
    {
      team: "Tottenham Hotspur",
      played: 20,
      win: 12,
      draw: 3,
      loss: 5,
      goals_for: 42,
      goals_against: 29,
      goal_difference: 13,
      points: 39,
    },
    {
      team: "West Ham United",
      played: 20,
      win: 10,
      draw: 4,
      loss: 6,
      goals_for: 33,
      goals_against: 30,
      goal_difference: 3,
      points: 34,
    },
    {
      team: "Brighton",
      played: 20,
      win: 8,
      draw: 7,
      loss: 5,
      goals_for: 38,
      goals_against: 33,
      goal_difference: 5,
      points: 31,
    },
    {
      team: "Manchester United",
      played: 20,
      win: 10,
      draw: 1,
      loss: 9,
      goals_for: 22,
      goals_against: 27,
      goal_difference: -5,
      points: 31,
    },
  ];
  
  tableData.forEach(team => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${team.team}</td>
      <td>${team.played}</td>
      <td>${team.win}</td>
      <td>${team.draw}</td>
      <td>${team.loss}</td>
      <td>${team.goals_for}</td>
      <td>${team.goals_against}</td>
      <td>${team.goal_difference}</td>
      <td>${team.points}</td>
    `;
    dataTableBody.appendChild(row);
  });
});