const generateCards = members => {
    return `
    ${members.map(member => `
        <div class="card border-dark mb-3 mr-3" style="max-width: 18rem;">
          <div class="card-header"><h2>${member.name}</h2></div>
          <div class="card-body text-dark">
            <h5 class="card-title">${member.getRole()}</h5>
            <p class="card-text mb-1">Email: <a href="mailto:${member.email}">${member.email}</a></p>
            <p class="card-text mt-0">
              ${member.getRole() === 'Manager' ? `Office: ${member.officeNumber}` : member.getRole() === 'Engineer' ? `Github: <a href="https://www.github.com/${member.getGithub()}">${member.getGithub()}</a>` : `School: ${member.getSchool()}`} 
            </p>
          </div>
        </div>`
    ).join("")}
    `
}

module.exports = staffArray => {
  return `
  <!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>My Team</title>
  </head>
  <body>
    <nav class="navbar navbar-dark bg-dark mb-5">
        <span class="navbar-brand h1 ml-auto mr-auto">My Team</span>
      </nav>
      <div class="container">
        <div class="row d-flex justify-content-center col-sm-12 col-md-12 col-lg-12">
          ${generateCards(staffArray)}
        </div>
      </div>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </body>
</html>
`;
}