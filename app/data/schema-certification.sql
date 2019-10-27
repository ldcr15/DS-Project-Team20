USE msis_project;

CREATE TABLE Certification (
    certificationId INT AUTO_INCREMENT PRIMARY KEY,
    certificationName VARCHAR(64),
    experationPeriod INT,
    certifyingAgency VARCHAR(100)
);

------------------------------------------------------------------------------

use innodb;

INSERT INTO Certification(certificationName, experationPeriod, certifyingAgency) VALUES
("AED", 2, "American Red Cross"),
("First Aid", 2, "American Red Cross"),
("CPR", 3, "American Heart Association");
