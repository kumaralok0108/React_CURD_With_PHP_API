<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: X-Requested-with');

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

$sql = "SELECT * FROM react_curd";
$mysqli= mysqli_query($conn, $sql);
//print_r($mysqli);
$json_data =array();
 while ($row= mysqli_fetch_assoc($mysqli)){
    $json_data[]=$row;
 }
 echo json_encode(['phpresult'=>$json_data]);
?>