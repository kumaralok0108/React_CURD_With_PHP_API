<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type, X-Requested-With");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "php_withreact";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$data = json_decode(file_get_contents("php://input"), true);

$fname=$data['fname'];
$lname=$data['lname'];
$email=$data['email'];
$phone=$data['phone'];
$gender=$data['gender'];
$role=$data['role'];
$city=$data['city'];
$state=$data['state'];
$id_no=$data['id_no'];
$address=$data['address'];

 $sql = "INSERT INTO react_curd (fname, lname, email, phone,  gender,  role,  city,  state, id_no, address )
 
VALUES ('$fname', '$lname', '$email','$phone', '$gender', '$role', '$city', '$state','$id_no', '$address')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>  
