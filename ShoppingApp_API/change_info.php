<?php
//thay đổi thông tin user
use \Firebase\JWT\JWT;
require __DIR__ . '/vendor/autoload.php';
include('function.php');
include('connect/connect.php');

$key = "example_key";
$json = file_get_contents('php://input');
$obj = json_decode($json, true);

$email = $obj['email'];
$name = $obj['name'];
$phone = $obj['phone'];
$address = $obj['address'];
$sql = "UPDATE users SET name='$name', phone='$phone', address='$address' WHERE email ='$email'";
$sql1 = "SELECT u.email, u.name, u.address, u.phone FROM users u where email = '$email'";

$result0 = $mysqli->query($sql);
$result = $mysqli->query($sql1);

$user = mysqli_fetch_assoc($result);

if($user){
	$array = array('user'=>$user);
	print_r(json_encode($array));
}
else{
	echo 'KHONG_THANH_CONG';
}

?>