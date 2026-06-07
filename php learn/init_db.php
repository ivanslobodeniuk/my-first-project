<?php
$host = "localhost";
$username = "root";
$password = "";
$dbname = "tasks_db";

// Підключення до бази даних
$conn = new mysqli($host, $username, $password, $dbname);

// Перевірка підключення
if ($conn->connect_error) {
    die("Помилка підключення: " . $conn->connect_error);
}

// SQL для створення таблиці
$sql = "CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    task_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";

if ($conn->query($sql) === TRUE) {
    echo "Таблиця створена успішно!";
} else {
    echo "Помилка створення таблиці: " . $conn->error;
}

$conn->close();
