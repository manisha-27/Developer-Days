<?php
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$gender = $_POST['gender'];
$email = $_POST['email'];
$password = $_POST['password'];
$number = $_POST['number'];

// Database Connection
$conn=new mysqli('localhost','root','root','submissionform');
if($conn->connect_error){
    die('Connection Failed : '.$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into Registration(firstName, lastname, gender, email, password, number) 
    values(?,?,?,?,?,?)");
    $stmt->bind_param("sssssi",$firstName, $lastname, $gender, $email, $password, $number);
    $stmt->execute();
    echo "Registration Successfully Completed...";
    $stmt->close();
    $conn->close();
}

?>
