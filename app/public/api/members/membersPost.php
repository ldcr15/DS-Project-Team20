<?php

// 0. Validate my data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO Member
    (firstName, lastName, radioNumber, stationNumber, isActive, address, email, gender, position)
  VALUES (?,?,?,?,?,?,?,?,?)'
);

$stmt->execute([
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['radioNumber'],
  $_POST['stationNumber'],
  $_POST['isActive'],
  $_POST['address'],
  $_POST['email'],
  $_POST['gender'],
  $_POST['position'],
]);

// Step 4: Output
//
header('HTTP/1.1 303 See Other');
header('Location: ../members/');
