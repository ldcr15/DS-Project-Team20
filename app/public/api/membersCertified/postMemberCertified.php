<?php

// 0. Validate my data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO MemberCertified
    (memberId, certificationId, certifiedDate, expirationDate)
  VALUES (?,?,?, ?)'
);
$stmt->execute([
  $_POST['memberId'],
  $_POST['certificationId'],
  $_POST['certifiedDate'],
  $_POST['expirationDate']
]);

// TODO: Error checking?!

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../membersCertified/');
