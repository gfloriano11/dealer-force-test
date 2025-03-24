DROP DATABASE IF EXISTS to_do_list;

CREATE DATABASE to_do_list;

USE to_do_list;

CREATE TABLE tasks (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    task_name VARCHAR(255) NOT NULL,
    task_desc TEXT,
    task_status ENUM('Iniciada', 'Finalizada') DEFAULT ('Iniciada'),
    created_at DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    final_date DATE NOT NULL
);