
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Різниця в днях</title>
    <script>
        function calculateDifference() {
            const date1 = document.getElementById('date1').value;
            const date2 = document.getElementById('date2').value;

            // Створення Date об'єктів з введених рядків
            let d1 = new Date(date1);
            let d2 = new Date(date2);

            // Розрахунок різниці в часі
            let timeDiff = Math.abs(d2.getTime() - d1.getTime());

            // Конвертація часу в дні
            let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

            // Виведення результату
            document.getElementById('result').textContent = 'Різниця в днях: ' + diffDays;
        }
    </script>
</head>
<body>
<h1>Обрахунок різниці в днях між двома датами</h1>
<label for="date1">Введіть першу дату (рік-місяць-день):</label>
<input type="date" id="date1">
<br>
<label for="date2">Введіть другу дату (рік-місяць-день):</label>
<input type="date" id="date2">
<br>
<button onclick="calculateDifference()">Обрахувати різницю</button>
<p id="result"></p>
<br>
<div id="calendar"></div>
</body>
</html>
