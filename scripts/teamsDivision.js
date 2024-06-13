
function saveTeamsToLocalStorage() {
  const teams = [];
  const listForUndecided3 = [[1, 1, 0, -1], [-1, 0, 0, 0], [0, 1, -1, 0], [0, -1, -1, 1], [-1, 0, 0, 1], [1, -1, 0, -1], [1, 0, -1, 0], [0, 1, 0, -1], [0, -1, -1, 0]];
  const listForDogmatic1 = [[2, 0, 0, -1], [-1, 0, 1, -1], [1, 1, -2, 0], [-1, 0, -1, 0], [-1, 1, 0, 0], [0, -1, 1, -1], [0, 1, 0, 0], [0, 0, -1, -1], [0, 0, 0, -1]];
  const listForReformers2 = [[0, 2, 0, -1], [-1, 0, -1, 1], [-1, 1, 0, 0], [1, -2, -1, 2], [-1, -1, 0, 2], [2, -1, -1, -1], [2, -1, -2, 0], [0, 2, 1, -1], [0, -2, -2, 1]];
  for (let i = 1; i <= 4; i += 1) {
    const teamName = document.getElementById(`team${i}`).value;
    const teamOption = document.getElementById(`option${i}`).value;
    
    if (teamName === '') {
      continue;
    } else {
    teams.push({ name: teamName, option: teamOption, pointsCounter: 0 });
    }
  }

  localStorage.setItem('teams', JSON.stringify(teams));
}

// Добавляем обработчик клика на кнопку "дальше ⮕"
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('nextButton').addEventListener('click', function(event) {
    saveTeamsToLocalStorage();
  });
});