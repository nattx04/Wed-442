let matchResults = [
  {
    date: "Sunday 14 January 2024",
    home_team: "Man Utd",
    away_team: "Spurs",
    score: "2-2",
    location: "Old Trafford, Manchester",
  },
  {
    date: "Sunday 31 December 2023",
    home_team: "Nott'm Forest",
    away_team: "Man Utd",
    score: "2-1",
    location: "The City Ground, Nottingham",
  },
  {
    date: "Wednesday 27 December 2023",
    home_team: "Man Utd",
    away_team: "Aston Villa",
    score: "3-2",
    location: "Old Trafford, Manchester",
  },
  {
    date: "Saturday 23 December 2023",
    home_team: "West Ham",
    away_team: "Man Utd",
    score: "2-0",
    location: "London Stadium, London",
  },
  {
    date: "Sunday 17 December 2023",
    home_team: "Liverpool",
    away_team: "Man Utd",
    score: "0-0",
    location: "Anfield, Liverpool",
  },
  {
    date: "Saturday 9 December 2023",
    home_team: "Man Utd",
    away_team: "Bournemouth",
    score: "0-3",
    location: "Old Trafford, Manchester",
  },
  {
    date: "Thursday 7 December 2023",
    home_team: "Man Utd",
    away_team: "Chelsea",
    score: "2-1",
    location: "Old Trafford, Manchester",
  },
  {
    date: "Sunday 3 December 2023",
    home_team: "Newcastle",
    away_team: "Man Utd",
    score: "1-0",
    location: "St. James' Park, Newcastle",
  },
];

document.addEventListener('DOMContentLoaded', function () {
  updateResultsList();
  
  const addResultForm = document.getElementById('addResultForm');
  addResultForm.addEventListener('submit', function (event) {
    event.preventDefault();
    updateMatch();
  });

  const showTableButton = document.getElementById('showTableButton');
  showTableButton.addEventListener('click', function () {
    updateResultsList();
  });
});

function updateMatch() {
  const date = document.getElementById('date').value;
  const homeTeam = document.getElementById('homeTeam').value;
  const awayTeam = document.getElementById('awayTeam').value;
  const score = document.getElementById('score').value;
  const location = document.getElementById('location').value;

  const newMatch = {
    date,
    home_team: homeTeam,
    away_team: awayTeam,
    score,
    location,
  };

  matchResults.push(newMatch);
  updateResultsList();
}

function updateResultsList() {
  const resultsBody = document.getElementById('resultsBody');
  resultsBody.innerHTML = '';

  matchResults.forEach(match => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${match.date}</td>
      <td>${match.home_team} vs ${match.away_team}</td>
      <td>${match.score}</td>
      <td>${match.location}</td>
    `;
    resultsBody.appendChild(row);
  });
}
