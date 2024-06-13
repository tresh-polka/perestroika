function displayTeams() {
  const teamsContainer = document.getElementById('teams-container');
  const teamsData = localStorage.getItem('teams');
  if (teamsData) {
    const teams = JSON.parse(teamsData);

    teams.forEach((team, index) => {
      const teamElement = document.createElement('div');
      teamElement.classList.add('team');
      teamElement.innerHTML = `
      <div class="team">  
        <h3>&nbsp;&nbsp;&nbsp;${team.pointsCounter}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${team.name}</h3>
          <select class="answers">
          <option class="options">1</option>
          <option class="options">2</option>
          <option class="options">3</option>
          <option class="options">4</option>
        </select>
      </div>
      `;
      teamsContainer.appendChild(teamElement);
    });
  } else {
    teamsContainer.innerHTML = '<p>Нет сохраненных данных о командах.</p>';
  }
}

// Вызываем функцию для отображения команд при загрузке страницы
document.addEventListener('DOMContentLoaded', displayTeams);