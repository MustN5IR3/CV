<?php
$serverName = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbName = "motorsport_database";

$conn = mysqli_connect($serverName,$dbUsername,$dbPassword,$dbName);
if(!$conn){
	die("connection failed" .mysqli_connect_error());
}
