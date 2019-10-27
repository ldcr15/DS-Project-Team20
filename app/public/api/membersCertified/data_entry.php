<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
// if (isset($_GET['guid'])) {
  $stmt = $db->prepare(
    'SELECT m.memberId, m.radioNumber, m.stationNumber, m.firstName, m.lastName, m.isActive, c.certificationName, mc.expirationDate
	FROM Member as m, Certification as c, MemberCertified as mc
	WHERE m.memberId = mc.memberId AND c.certificationId = mc.certificationId
    AND m.isActive = "Yes"'
  );
//   $stmt->execute([$_GET['guid']]);
// } else {
//   $stmt = $db->prepare('SELECT m.radioNumber, m.stationNumber, m.firstName, m.lastName, m.isActive, c.certificationName FROM Member as m, Cetification as c, MemberCertified as mc');
$stmt->execute();
// }
$membersCertified = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($membersCertified, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
