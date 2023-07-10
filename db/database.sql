CREATE DATABASE IF NOT EXITS developtdb;

USE developtdb;

CREATE TABLE article (
    id INT (11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    price INT (11) NOT NULL,
    category VARCHAR (45) NOT NULL,
    PRIMARY KEY (id)
);

DESCRIBE article;

INSERT INTO article VALUES
(1, 'raqueta', 2000, 'deportes'),
(2, 'risk', 500, 'juego de meza'),
(3, 'microscopio', 5000, 'ciencia'),
(4, 'bate', 2500, 'deportes');
