USE heroku_190559482844405;

SET @@SESSION.auto_increment_increment = 1;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    createdAt TIMESTAMP NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY (id)
);
