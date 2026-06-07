<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Форма для відправки даних</title>
</head>
<body>
<h1>Введіть свої дані</h1>
<form action="process.php" method="POST">
    <label for="name">Ім'я:</label>
    <input type="text" id="name" name="name" required>
    <br><br>
    <label for="age">Вік:</label>
    <input type="number" id="age" name="age" required>
    <br><br>
    <button type="submit">Відправити</button>
</form>
</body>
</html>