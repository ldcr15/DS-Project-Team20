<?php

// Step 0: Validation
use Ramsey\Uuid\Uuid;
$guid = Uuid::uuid4()->toString(); // i.e. 25769c6c-d34d-4bfe-ba98-e0ee856f3e7a

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO certification
    (certificationId, certificationName, experationPeriod, certifyingAgency)
  VALUES (?, ?, ?, ?,)'
);

$stmt->execute([
  $guid,
  $_POST['certificationId'],
  $_POST['certificationName'],
  $_POST['experationPeriod'],
  $_POST['certifyingAgency']
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../records/?guid='.$guid);
