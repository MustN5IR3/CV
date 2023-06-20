<!DOCTYPE html>
	<html>
		<head>
			<title>
				Upload Image
			</title>
			<style>
				body{
					background-color: #ff0000;
				}
				input{
					width: 50%;
					height: 5%;
					border: 1px;
					border-radius: 5px;
					padding: 8px 15px 8px 15px;
					margin: 10px  0px 15px 0px;
					box-shadow: 1px 1px 2px 1px grey;
					font-weight: bold;
				}
				
			</style>
		</head>
		<body>
			<center>
				<h1>Upload image into mysqli</h1>
				<form action="" method="POST" enctype="multipart/form-data">
					<label>choose product image:</label><br>
					<input type="file" name="image" id="image"><br>
					
					<label>enter product name:</label><br>
					<input type="text" name="productname" placeholder="product name"><br>
					
					<label>enter price in USD:</label><br>
					<input type="text" name="price" placeholder="price"><br>
					
					<input type="submit" name="upload" value="Upload Image/Data"><br>
				</form>
			</center>
		</body>
	</html>
	
<?php
$connection =mysqli_connect("localhost","root", "");
$dbb = mysqli_select_db($connection,'motorsport_database');

if(isset($_POST['upload'])){
	
	$file= addslashes(file_get_contents($_FILES["image"]["tmp_name"]));
	$productname = $_POST['productname'];
	$price =$_POST['price'];
	$query = "INSERT INTO `prodimage`(`image`,`productname`,`price`) VALUES('$file','$productname','$price');";
	$query_run = mysqli_query($connection, $query);
	if($query_run){
		echo '<script type="text/javascript"> alert("Image uploaded")</script>';
	}else{
		echo '<script type="text/javascript"> alert("Image not uploaded")</script>';
	}
}


?>