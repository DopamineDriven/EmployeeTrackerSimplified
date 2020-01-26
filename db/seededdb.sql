USE employee_tracker_simplifieddb;

INSERT INTO department (name)
VALUES ('Engineering'), ('Finance'), ('Legal'), ('Sales');

INSERT INTO role (role, salary, department_id)
VALUES ('Software Engineer', 150000, 1),
('Lead Software Engineer', 240000, 1),
('Accountant', 170000, 2),
('Lawyer', 200000, 3),
('Lead Lawyer', 300000, 3),
('Salesperson', 90000, 4),
('Lead Salesperson', 120000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Andrew', 'Ross', 1, null),
('George', 'Daniel', 3, 3),
('Joe', 'Shields', 1, null),
('Pedrom', 'Keshavarzi', 4, 4),
('Kevin', 'Runde', 2, null);