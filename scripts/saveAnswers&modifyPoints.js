
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('saveButton').addEventListener('click', function() {
      const dropdowns = document.querySelectorAll('.dynamic-dropdown');
      const dropdownData = [];

      // Сохранение данных выпадающих списков
      dropdowns.forEach(dropdown => {
          const id = dropdown.getAttribute('id');
          const value = parseInt(dropdown.value, 10);
          dropdownData.push({ id, value });
      });

      // Обновление очков команд
      let teams = JSON.parse(localStorage.getItem('teams')) || [];

      dropdownData.forEach(data => {
          let team = teams.find(team => team.name === data.id);
          if (team) {
            const answerArray = team.answers.shift();
        
            // Проверяем, что есть удаленный массив
            if (answerArray) {
                team.pointsCounter += answerArray[data.value - 1];
            } else {
                console.log('No more answer arrays for team:', team.name);
            }
      }
      });

      localStorage.setItem('teams', JSON.stringify(teams));

      const redirectUrl = this.getAttribute('data-url');
        if (redirectUrl) {
            window.location.href = redirectUrl;
        } else {
            console.log('Redirect URL not specified');
        }

  });
});
