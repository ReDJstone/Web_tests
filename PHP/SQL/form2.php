<?php
    $usuario = "UserName"; //programs
    $password = "Password"; //prred
    $server = "localhost";
    $base = "DB_Name";
    
    $conexion = new mysqli($server, $usuario, $password) or die("Connection Error!");
    $db = mysqli_select_db($conexion, $base) or die("DB Selection Error!");
    
    $var = $_POST['var']; // html name (not ID)
    
    $insert = "INSERT INTO datos VALUES ('$var')";
    $execute = mysqli_query($conection, $insert);
    
    if (!$execute) {
        echo "Query FAIL <br><a href='index.html'>Volver</a>";
    } else {
        echo "Query OK <br><a href='index.html'>Volver</a>";
    }
?>
