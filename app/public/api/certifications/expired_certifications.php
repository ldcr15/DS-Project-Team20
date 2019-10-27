

<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare('SELECT m.firstName, m.lastName, c.certificationName, c.certifyingAgency, mc.expirationDate
 FROM Certification as c, Member as m, MemberCertified as mc
 WHERE c.certificationId = mc.certificationId and m.memberId = mc.memberId and mc.expirationDate < NOW()
 ORDER BY m.memberId;');
$stmt->execute();
$certifications = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($certifications, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
