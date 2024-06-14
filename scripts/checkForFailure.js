document.getElementById('failOrNo').addEventListener('click', function() {
  let teams = JSON.parse(localStorage.getItem('teams')) || [];
  
  // Проверяем, есть ли у хотя бы одной команды 3 или больше баллов
  const hasTeamWithThreeOrMorePoints = teams.some(team => team.pointsCounter >= 3);
  
  if (hasTeamWithThreeOrMorePoints) {
      // Переход по указанному URL

      function removeLowScoringTeams() {
  
        // Удаляем команды с количеством очков меньше 3
        teams = teams.filter(team => team.pointsCounter >= 3);
  
        localStorage.setItem('teams', JSON.stringify(teams));
        
      } 
      removeLowScoringTeams();

      const redirectUrl = this.getAttribute('data-url');
      if (redirectUrl) {
          window.location.href = redirectUrl;
      } else {
          console.log('Redirect URL not specified');
      }
  } else {
      // Переход на 12¾-slide.html
      window.location.href = '12¾-slide.html';
  }
});