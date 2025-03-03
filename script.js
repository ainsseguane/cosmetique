<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>forms in bootstrap</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>

<body>
    
    <form class="container bg-dark text-light">
        <h1> Les formulaire :</h1>
        <div class="row">
            <div class="col ">
                <label for="input-nom">Nom:</label>
                <input class="form-control" type="text">
            </div>
            <br>

            <div class="col">
                <label for="input-prénome">Prénome</label>
                <input type="text" class="form-control">
            </div>
        </div>
        <br>
        <label>Date de Naissance</label>
        <input type="date" name="" id="" class="form-control">
        <br>
        <label>Rendez-vous</label>
        <input type="datetime-local" class="form-control">
        <br>
        <label>Email</label>
        <input type="email" class="form-control">
        <br>
        <label for="">Agree</label>
        <input type="checkbox" >
        <br>
        </label>formation</label>
        <br>
        <input type="radio" name="formation" id="web">
        <label for="web">web</label>
        <br>
        <input type="radio" name="formation" id="mobile">
        <label for="mobile">mobile</label>
        <br>
        <div class="text-end">
            <button type="submit" class="btn btn-primary">Envoyer</button>
            <br>
        </div>
    </form>
</body>

</html>