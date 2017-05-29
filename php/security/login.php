<?php

require("../db/db.php");
require("PassHash.php");

session_start();

$userName = $_POST['user'];
$password = $_POST['password'];

//Remove any slashes like \'
$userName = stripslashes($userName);
$password = stripslashes($password);

/*Escapes special characters in the Strings*/
$userName = $mysqli->real_escape_string($userName);
$sql = "SELECT * FROM sakila.USER WHERE userName='$userName'"; 

if( $resultDb = $mysqli -> query($sql) )
{
    $count = $resultDb->num_rows;
    if($count == 1 )
    {
        $record = $resultDb -> fetch_assoc();
        if( PassHash::check_password($record['password'], $password) )
        {
            $_SESSION['authenticated'] = "yes";
            $_SESSION['username'] = $userName;
            $result['success'] = true;
            $result['message'] = 'User authenticated!';
        }
        else
        {
            $result['success'] = false;
            $result['message'] = 'User authenticated!';
        }
    }
    else
    {
        $result['success'] = false;
        $result['message'] = 'Incorrect username or password!';
    }
    $resultDb->close();
}

$mysqli->close();
echo json_encode($result);
?>