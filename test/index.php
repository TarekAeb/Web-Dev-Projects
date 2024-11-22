<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <form action="index.php" method="post">
    <input type="text" name="Firstname" placeholder="First Name" required />
    <input type="text" name="Secondname" placeholder="Second Name" required />
    <input type="text" name="PhoneNumber" placeholder="Phone Number" required />
    <input type="password" name="Password" placeholder="Password" required />
    <input type="submit" value="Log" />
   </form>
</body>
</html>

<?php
$servername = "192.168.56.1";
$username = 'tarek';
$password = '152006';
$dbname = "iqamati";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

// Process form data if POST request is made
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstname = $_POST["Firstname"];
    $secondname = $_POST["Secondname"];
    $phoneNumber = $_POST["PhoneNumber"];
    $password = $_POST["Password"]; // Note: Avoid storing passwords as plain text

    // Prepare and bind to prevent SQL injection
    $stmt = $conn->prepare("INSERT INTO students (first_name, second_name, phone_number) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $firstname, $secondname, $phoneNumber);

    if ($stmt->execute()) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close statement
    $stmt->close();
}

// Close connection
$conn->close();
?>
