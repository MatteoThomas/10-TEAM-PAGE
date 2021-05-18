const generateManager = (data) => {
    return `
       
       <div class='col-md-3'>
   
       <div class='card-header manager'>
            ${data.name}<br>
     ${data.getRole()}</div>
     
          <div class='card-body'>
        
          <div class='form-group'>
          <p><b>Id:</b>${data.id}</p>
          </div>
          <div class='form-group'>
          <p><b>Email:</b> <a href="mailto:${data.email}"> ${data.email}</a></p>
          </div>
          <div class='form-group'>
          <p><b>Office Number:</b> ${data.office}</p>
          </div>
      
      </div>
        </div>
   

    `;
};

const generateEngineer = (data) => {
    return `
  
       <div class='col-md-3'>
      
       <div class='card-header engineer'>
            ${data.name}<br>
     ${data.getRole()}</div>

    <div class='card-body'>
        
    <div class='form-group'>
    <p><b>Id:</b>${data.id}</p>
    </div>
    <div class='form-group'>
    <p><b>Email:</b> <a href="mailto:${data.email}"> ${data.email}</a></p>
    </div>
    <div class='form-group'>
    <p><b>GitHub:</b> <a href="${data.github}" target="_blank">${data.github}</a></p>
    </div>

    </div>
        </div>
   
  
    `;
};

const generateIntern = (data) => {
    return `
    
       <div class='col-md-3'>
     
       <div class='card-header intern'>
            ${data.name}<br>
     ${data.getRole()}</div>
     
        <div class='card-body'>
        
            <div class='form-group'>
            <p><b>Id:</b>${data.id}</p>
            </div>
            <div class='form-group'>
            <p><b>Email:</b> <a href="mailto:${data.email}">${data.email}</a></p>
            </div>
            <div class='form-group'>
            <p><b>School:</b> ${data.school}</p>
            </div>
        
        </div>
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
        <div class="cards">
        ${generateCards(data)}
        </div>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
      
        </body>
    </html>`;
};

module.exports = generateHTML;