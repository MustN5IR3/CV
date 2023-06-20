<?php
if(isset($_POST["submit"])){
	
	$name = $_POST["name"];
	$email = $_POST["email"];
	$username = $_POST["uid"];
	$pwd = $_POST["pwd"];
	$pwdrepeat = $_POST["pwdrepeat"];
	
	require_once 'dbh.inc.php';
	require_once 'functions.inc.php';
	
	if(emptyInputSignup($name,$email,$username,$pwd,$pwdrepeat)!==false){
		header("location: ../login.php?error=emptyinput");
		exit();
	}
	if(invalidUid($username)!==false){
		header("location: ../login.php?error=invaliduid");
		exit();
	}
	if(invalidEmail($email)!==false){
		header("location: ../login.php?error=invalidemail");
		exit();
	}
	if(pwdMatch($pwd,$pwdrepeat)!==false){
		header("location: ../login.php?error=passwordmismatch");
		exit();
	}
	if(uidExists($conn,$username,$email)!==false){
		header("location: ../login.php?error=usernameoremailtaken");
		exit();
	}
	
	createUser($conn,$name,$email,$username,$pwd);
	
}else{
	header("location: ../login.php");
	exit();
}
