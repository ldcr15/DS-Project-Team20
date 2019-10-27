<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
// if (isset($_GET['guid'])) {
  $stmt = $db->prepare(
    'SELECT m.lastName, m.firstName, c.certificationName, c.experationPeriod, m.isActive, c.certificationId
	FROM Member as m, Certification as c, MemberCertified as mc
	WHERE m.memberId = mc.memberId AND c.certificationId = mc.certificationId
    ORDER BY c.certificationName'
  );
//   $stmt->execute([$_GET['guid']]);
// } else {
//   $stmt = $db->prepare('SELECT m.radioNumber, m.stationNumber, m.firstName, m.lastName, m.isActive, c.certificationName FROM Member as m, Cetification as c, MemberCertified as mc');
$stmt->execute();
// }
$certificationsMember = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($certificationsMember, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
