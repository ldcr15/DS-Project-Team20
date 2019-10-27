USE msis_project;

CREATE TABLE Member (
    memberId INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(64) NOT NULL,
    lastName VARCHAR(64) NOT NULL,
    radioNumber VARCHAR(64),
    stationNumber VARCHAR(64),
    isActive VARCHAR(5),
    address VARCHAR(64),
    email VARCHAR(64),
    gender CHAR(1),
    position VARCHAR(64)
);

------------------------------------------------------------------------------

use t20;

INSERT INTO Member(firstName, lastName, radioNumber, stationNumber, isActive, address, email, gender, position) VALUES
("Spencer", "Alabaugh", 123123123, 123456789, TRUE, "123 Boring Street", "spenceristhebest@awesomeness.com", "M", "Chief"),
("Saharsh", "Arora", 123123123, 129484028, TRUE, "123 Boring Street", "PlupClub@whatdoesthatmean.com", "M", "Chief"),
("Luis", "Cervantes", 12389799, 857294828, FALSE, "123 Really Boring Street", "LuisMYGUYYYY@bro.com", "M", "Fired"),
("Aanchal", "Wadhwani", 908523578, 32257893, TRUE, "123 Silly Street", "Aanchalwassuppppp@hi:D.com", "W", "Chief");
