const Team = require('./lib/Team');

new Team().initializeTeamManager()
  .then(teamData => {
    return generatePage(teamData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
  })
  .catch(err => {
    console.log(err);
  });