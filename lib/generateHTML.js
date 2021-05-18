const generateManager = (data) => {
    return `<div class='container'>
       <ul class='ul'>
       <div class='col-md-3'>
       <div class='card cardbody'>
       <div class='card-header'>
            ${data.name}<br>
     ${data.getRole()}</div>
     
          <div class='card-body'>
        
          <div class='form-group'>
          <p><b>Id:</b>${data.id}</p>
          </div>
          <div class='form-group'>
          <p><b>Email:</b> ${data.email}</a></p>
          </div>
          <div class='form-group'>
          <p><b>Office Number:</b> ${data.office}</p>
          </div>
      
      </div>
        </div>
        </ul>
    </div>
    `;
};

const generateEngineer = (data) => {

    return `<div class='container'>
       <ul class='ul'>
       <div class='col-md-3'>
       <div class='card cardbody'>
       <div class='card-header'>
            ${data.name}<br>
     ${data.getRole()}</div>

    <div class='card-body'>
        
    <div class='form-group'>
    <p><b>Id:</b>${data.id}</p>
    </div>
    <div class='form-group'>
    <p><b>Email:</b> ${data.email}</a></p>
    </div>
    <div class='form-group'>
    <p><b>GitHub:</b> ${data.github}</p>
    </div>

    </div>
        </div>
        </ul>
    </div>
    `;
};

const generateIntern = (data) => {
    return `<div class='container'>
       <ul class='ul'>
       <div class='col-md-3'>
       <div class='card cardbody'>
       <div class='card-header'>
            ${data.name}<br>
     ${data.getRole()}</div>
     
        <div class='card-body'>
        
            <div class='form-group'>
            <p><b>Id:</b>${data.id}</p>
            </div>
            <div class='form-group'>
            <p><b>Email:</b> ${data.email}</a></p>
            </div>
            <div class='form-group'>
            <p><b>School:</b> ${data.school}</p>
            </div>
        
        </div>
        </div>
        </ul>
    </div>
    `;
};

const generateCards = (data) => {
    let htmlString = "";
    data.forEach((element) => {

        if (element.getRole() === "Manager") {
            let string = generateManager(element);
            htmlString += string;

        } else if (element.getRole() === "Engineer") {
            let string = generateEngineer(element);
            htmlString += string;

        } else if (element.getRole() === "Intern") {
            let string = generateIntern(element);
            htmlString += string;
        }
    });
    return htmlString;

};


const generateHTML = (data) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" /> 
    <link rel="stylesheet" href="../assets/css/style.css"/>
    </head>

    <div class="header">

        <h1>My Team</h1>
        <p>Profile Generator</p>
   
</div>
        <body>
        ${generateCards(data)}
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
    </html>`;
};

module.exports = generateHTML;

/*
function generateHTML(managerPrompt, internPrompt) {

    let marked =
        `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <title>Team Profile Generator</title>
    <!-- Latest compiled and minified CSS & JS -->
    
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" /> 

    <link rel="stylesheet" href="../style.css"/>
</head>

<body>
    <div class="container">
        <div class="jumbotron">
            <h1>My Team</h1>           
        </div>
        
        <div class="card" style="max-width: 30%">
            <div class="card-header text-white bg-info">
                <h4 class="card-name">${managerPrompt.name}</h4>
                <h5 class="card-role">${managerPrompt.role}</h5>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="card-role list-group-item">ID: ${managerPrompt.id}</li>
                    <li class="card-text list-group-item">Email: ${managerPrompt.email}</li>
                    <li class="card-text list-group-item">Office number: ${managerPrompt.office}</li>
                </ul>
            </div>

            <div class="card-header text-white bg-info">
                <h4 class="card-name">${internPrompt.name}</h4>
                <h5 class="card-role">${internPrompt.role}</h5>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="card-role list-group-item">ID: ${internPrompt.id}</li>
                    <li class="card-text list-group-item">Email: ${internPrompt.email}</li>
                    <li class="card-text list-group-item">Office number: ${intern.school}</li>
                </ul>
            </div>

            <div class="card-header text-white bg-info">
                <h4 class="card-name">${engineerPrompt.name}</h4>
                <h5 class="card-role">${engineerPrompt.role}</h5>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="card-role list-group-item">ID: ${engineerPrompt.id}</li>
                    <li class="card-text list-group-item">Email: ${engineerPrompt.email}</li>
                    <li class="card-text list-group-item">Office number: ${engineerPrompt.github}</li>
                </ul>
            </div>
        </div>

    </div>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>

</html>
    `
    return marked
}

module.exports = generateHTML;

*/