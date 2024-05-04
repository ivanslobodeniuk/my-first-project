<?php
  if($_FILES['filename']['size'] > 3*1024*1024) {
    exit('Размір файла перевищив 3 мегабайта');
  }

  if(move_uploaded_file($_FILES['filename']['tmp_name'], 'temp/'.$_FILES['filename']['name'])) {
    echo 'Файл успішно завантажений'. '<br>';
    echo 'Вихідне імя файла - ' . $_FILES['filename']['name'] . '<br>';
    echo 'Размір файла в байтах - ' . $_FILES['filename']['size'] . '<br>';
    echo 'MIME тип файла - ' . $_FILES['filename']['type'] . '<br>';
    echo 'Тимчасовий файл, в якому збережений завантажений файл - ' . $_FILES['filename']['tmp_name'] . '<br>';
  } else {
    echo 'Помила завантаження файла';
  }