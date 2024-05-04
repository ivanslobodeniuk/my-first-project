<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title>Простий калькулятор</title>
    <style>
        div {
            display: flex;
            justify-content: center;
            align-items: center; /* Вирівнювання елементів по центру по вертикалі */
            font-size: 30px;
        }
        input, select, button, p {
            width: 100px;  /* Збільшив ширину для читабельності */
            height: 30px;
            margin: 5px;  /* Додав невеликий відступ для всіх елементів в рядку */
            font-size: 20px; /* Збільшення розміру шрифту */
        }
        input, select {
            background: none;
            border: black solid 1px; /* Рамка для введення та вибору */
        }
        button {
            background: transparent; /* Початковий колір фону */
            border: none;
            cursor: pointer;
            color: black; /* Початковий колір тексту */
            transition: background-color 0.3s, color 0.3s; /* Плавна зміна кольору */
        }
        button:hover {
            background-color: gray; /* Колір фону при наведенні */
            color: black; /* Колір тексту при наведенні */
        }
        p {
            margin: 0; /* Видалити будь-які маржини для елемента p */
            padding: 0; /* Видалити будь-які внутрішні відступи */
            display: flex; /* Використовувати flex для вирівнювання тексту в середині */
            align-items: center; /* Вирівнювання тексту по центру по вертикалі */
            justify-content: center; /* Вирівнювання тексту по центру по горизонталі */
            border: black solid 1px;
        }
    </style>
    <script>
        function calculateSum() {
            let a = parseFloat(document.getElementById('inputA').value);
            let b = parseFloat(document.getElementById('inputB').value);
            let operation = document.getElementById('operation').value;
            let result;

            switch (operation) {
                case '+':
                    result = a + b;
                    break;
                case '-':
                    result = a - b;
                    break;
                case '*':
                    result = a * b;
                    break;
                case '/':
                    if (b !== 0) {
                        result = a / b;
                    } else {
                        result = 'Ділення на нуль!';
                    }
                    break;
                default:
                    result = 'Невідома операція';
            }

            // Перевірка, чи результат є дробовим числом
            if (typeof result === 'number' && result % 1 !== 0) {
                result = result.toFixed(2);
            }
            document.getElementById('result').textContent = ' ' + result;
        }
    </script>
</head>
<body>
<h1 style="text-align: center">Простий калькулятор</h1>
<div>
    <label for="inputA">Число <b>a</b>:</label>
    <input type="text" id="inputA">
    <label for="operation">Операція:</label>
    <select id="operation">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
    </select>
    <label for="inputB">Число <b>b</b>:</label>
    <input type="text" id="inputB">
    <button onclick="calculateSum()">=</button>
    <p id="result"></p>
</div>
</body>
</html>

