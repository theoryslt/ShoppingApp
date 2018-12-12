<?php
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "tuanson020196";
$dbname = "db_app";

$mysqli = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
$mysqli->set_charset("utf8");
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

?>