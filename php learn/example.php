<?php

// Відкриття файлу для запису
$file = fopen("example.txt", "w");

// Запис чисел від 1 до 10 у файл
for ($i = 1; $i <= 20; $i++) {
    fwrite($file, $i . " "); // Записує кожне число з пробілом
}

// Закриття файлу
fclose($file);

// Читання з файлу
$file = fopen("example.txt", "r");
$content = fread($file, filesize("example.txt"));
fclose($file);

// Виведення вмісту файлу
echo $content;