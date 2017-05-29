<?php
    $server = "127.0.0.1";
    $user = "root";
    $password = "desilva5";
    $dbName = "sakila";

    $mysqli = new mysqli($server, $user, $password, $dbName );
    /*
        Check Connection
    */
    if( $mysqli -> connect_errno )
    {
        printf("Connection failed: %s\n", mysqli_connect_error);
        exit();
    }
?>