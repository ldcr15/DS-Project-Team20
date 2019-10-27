USE msis_project;

CREATE TABLE MemberCertified (
    memberId INT,
    certificationId INT,
    certifiedDate DATE NOT NULL,
    expirationDate DATE NOT NULL,
    FOREIGN KEY (memberId) REFERENCES Member(MemberId),
    FOREIGN KEY (certificationId) REFERENCES Certification(certificationId)
);

----------------------------------------------------------------------------------------------

use innodb;

INSERT INTO MemberCertified(memberId, certificationId, certifiedDate, expirationDate) VALUES
(1, 1, "2017-01-01", "2019-01-01"),
(1, 2, "2019-10-12", "2021-10-12"),
(1, 3, "2014-08-20", "2017-08-20"),
(1, 4, "2019-10-01", "2020-02-01"),

(2, 1, "2016-01-01", "2018-01-01"),
(2, 4, "2019-10-01", "2020-02-01"),

(3, 1, "2018-01-01", "2020-01-01"),
(3, 2, "2019-10-12", "2021-10-12"),
(3, 3, "2011-08-20", "2014-08-20"),
(3, 4, "2019-04-01", "2019-08-01"),

(4, 1, "2017-01-01", "2019-01-01"),
(4, 2, "2019-10-12", "2021-10-12");
