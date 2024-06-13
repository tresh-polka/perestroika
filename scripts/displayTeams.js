function displayTeams() {
  const teamsContainer = document.getElementById('teams-container');
  const teamsData = localStorage.getItem('teams');
  if (teamsData) {
    const teams = JSON.parse(teamsData);

    teams.forEach((team, index) => {
      const teamElement = document.createElement('div');
      teamElement.classList.add('team');
      teamElement.innerHTML = `
        <h3>${team.pointsCounter}&nbsp;&nbsp;&nbsp;${team.name}</h3>
      `;
      teamsContainer.appendChild(teamElement);
    });
  } else {
    teamsContainer.innerHTML = '<p>Нет сохраненных данных о командах.</p>';
  }
}

// Вызываем функцию для отображения команд при загрузке страницы
document.addEventListener('DOMContentLoaded', displayTeams);