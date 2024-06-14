
function saveTeamsToLocalStorage() {
  const teams = [];
  const listForUndecided3 = [[1, 1, 0, -1], [-1, 0, 0, 0], [0, 1, -1, 0], [0, -1, -1, 1], [-1, 0, 0, 1], [1, -1, 0, -1], [1, 0, -1, 0], [0, 1, 0, -1], [0, -1, -1, 0]];
  const listForDogmatic1 = [[2, 0, 0, -1], [-1, 0, 1, -1], [1, 1, -2, 0], [-1, 0, -1, 0], [-1, 1, 0, 0], [0, -1, 1, -1], [0, 1, 0, 0], [0, 0, -1, -1], [0, 0, 0, -1]];
  const listForReformers2 = [[0, 2, 0, -1], [-1, 0, -1, 1], [-1, 1, 0, 0], [1, -2, -1, 2], [-1, -1, 0, 2], [2, -1, -1, -1], [2, -1, -2, 0], [0, 2, 1, -1], [0, -2, -2, 1]];
  for (let i = 1; i <= 4; i += 1) {
    const teamName = document.getElementById(`team${i}`).value;
    const teamOption = document.getElementById(`option${i}`).value;
    switch (teamOption) {
      case '1':
        mainList = listForDogmatic1;
        break;
      case '2':
        mainList = listForReformers2;
        break;
      case '3':
        mainList = listForUndecided3;
        break;
    }
    if (teamName === '') {
      continue;
    } else {
    teams.push({ name: teamName, option: teamOption, pointsCounter: 0, answers: mainList });
    }
  }

  localStorage.setItem('teams', JSON.stringify(teams));
}

// Добавляем обработчик клика на кнопку
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('nextButton').addEventListener('click', function(event) {
    saveTeamsToLocalStorage();
    const redirectUrl = this.getAttribute('data-url');
        if (redirectUrl) {
            window.location.href = redirectUrl;
        } else {
            console.log('Redirect URL not specified');
        }
  });
});