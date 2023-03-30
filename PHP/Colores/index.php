<!DOCTYPE html>
<html>
    <head>
        <title>TODO supply a title</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <div>
            <form action="" method="GET">
                <h1 style="text-align: center">Paleta de colores</h1>
                <h2>Elige sabiamente:</h2>
                <p>Elige el color del fondo de la página <input type="color" name="fondo"></p>
                <p>Elige el color de las letras de la página <input type="color" name="letras"></p>
                <input type="submit" name="enviar">
               
                <?php
                $fondo = $_GET ['fondo'];
                $letras = $_GET['letras'];
                echo "<body style='background-color:{$fondo};color:{$letras}'>";
                ?>
            </form>
        </div>
    </body>
</html>