DROP DATABASE IF EXISTS employee_tracker_simplifieddb;
CREATE database employee_tracker_simplifieddb;

USE employee_tracker_simplifieddb;

CREATE TABLE department (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    role VARCHAR(30),
    salary DECIMAL(12,4),
    department_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY(department_id) REFERENCES department(id)
    );

CREATE TABLE employee (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT NOT NULL,
    manager_id INT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY(role_id) REFERENCES role(id),
    FOREIGN KEY(manager_id) REFERENCES employee(id));

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;