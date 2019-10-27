<?php

// 0. Validate my data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'UPDATE Certification SET certificationName=?, experationPeriod=?,  certifyingAgency=?
    WHERE certificationId = ?;'
);

$stmt->execute([
  $_POST['certificationName'],
  $_POST['experationPeriod'],
  $_POST['certifyingAgency'],
  $_POST['certificationId']

]);

// TODO: Error checking?!

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../certifications/');
