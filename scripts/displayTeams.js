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
          <select class="answers dynamic-dropdown" id="${team.name}">
          <option value="1" class="options">1</option>
          <option value="2" class="options">2</option>
          <option value="3" class="options">3</option>
          <option value="4" class="options">4</option>
        </select>
      </div>
      `;
      teamsContainer.appendChild(teamElement);
    });
  } else {
    teamsContainer.innerHTML = '<p>Нет сохраненных данных о командах.</p>';
  }
}

document.addEventListener('DOMContentLoaded', displayTeams);