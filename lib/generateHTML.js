function generateHTML(managerPrompt) {

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