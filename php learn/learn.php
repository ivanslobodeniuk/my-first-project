<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<!--    <link rel="stylesheet" href="style.css">-->
    <title>Document</title>
    <script>
        // Виводимо дату і час в тег <h1> з id='datetime'
        function updateDateTime() {
            let dateElement = document.getElementById('datetime');
            let now = new Date();
            dateElement.textContent = now.toLocaleString('en-GB', {timeZone: 'Europe/Kiev'});
        }
        // Оновлюємо дату та час кожну секунду
        setInterval(updateDateTime, 1000);
    </script>

    <style>
        img {
            width: 300px;
            display: block;
            margin: 0 auto;
        }
    </style>
</head>
<body>

<h1 id="datetime"></h1>

<!--<h1>--><?php
//        date_default_timezone_set('Europe/Kiev');
//        echo $today = date("Y-m-d H:i:s");
//    ?><!--</h1>-->

<?php
//$text = file_get_contents('text.txt');
//$input_txt = "\nЦей текст записаний в текстовий файл за допомогою функції 'file_put_contents()'";
//file_put_contents('text.txt', $input_txt );
//echo $text;
//?>
<!---->
<!--<h2>-->
<!--    --><?php
//    const SPEED_OF_LIGHT = 299792.458;
//    echo "C = " .SPEED_OF_LIGHT ." km/h";
//    ?>
<!--    <br>-->
<?php
//    $num = 10;
//    $root = $num **0.5;
//    echo $root;
//    ?>
<!--</h2>-->

<!--<h1>--><?php
//    function sum( $a,  $b): float|int
//    {
//        return $a - $b;
//    }
//    echo sum(1, 1);
//    ?><!--</h1>-->

<?php
//// & - посилання на змінну
//function sum(&$a): int
//{
//    $a += 10;
//    return $a;
//}
//$b = 5;
//echo sum($b);
//echo '<br>';
//echo $b;
//?>

<?php
//// массив $items як аргументи для outArg()
//$items = ['html', 'css', 'js', 'php', 'react'];
//function outArg(array $items): void
//{
//   foreach ($items as $item) {
//       echo "$item<br>";
//   }
//}
//
//outArg($items);
//?>

<?php
//function formatSize($bytes): array
//{
//    $kilobytes = $bytes/1024;
//    $megabytes = $kilobytes/1024;
//    $gigabytes = $megabytes/1024;
//    return [$bytes, $kilobytes, $megabytes, $gigabytes];
//}
//
//list($bytes, $kilobytes, $megabytes, $gigabytes) = formatSize(10240000);
//echo "$bytes b =<br>$kilobytes kb<br>  $megabytes mb<br>$gigabytes gb";
//?>

<?php
//$numbers = [5, 3, 8, 1, 4];
//usort($numbers, function($a, $b) {
//    return $a <=> $b; // Сортування за зростанням
//});
//print_r($numbers);
//?>

<?php
//// приклад замикання
//$message = 'Old text';
//$mFu = function () use ($message) {
//    $message = 'New text';
//    echo $message;
//};
//$mFu(); // зміна в замиканні
//echo '<br>';
//echo $message; // зміна, внесена у замиканні, не впливає на значення змінної поза замиканням
//?>

<?php
// перевірка на парне/непарне число
//function checkNumber($number): string
//{
//    if ($number % 2 === 0) {
//        return 'Парне';
//    } else {
//        return 'Непарне';
//    }
//}
//echo checkNumber(7);
?>

<?php
// сумма будь якої кількості переданих аргументів
//function calculate_sum(...$numbers):float|int {
//    return array_sum($numbers); // вбудована функція 'array_sum()'
//}
//
//// Приклад використання
//$result = calculate_sum(2, 4, 5, 8);
//echo $result; // Виведе сумму всіх аргументів
?>
<!--<h1 style="color: hotpink">-->
<!--    --><?php
//    $str = 'привіт світ';
//    echo $str[0]; // вертає 2 біт замість 1-го для латиниці
//    echo '<br>';
//    echo strlen($str). '- strlen'; // кирилиця має 2 біти на символ
//    echo '<br>';
//    echo mb_strlen($str). '- mb_strlen'; // доповнення для php показує 1 біт на символ для кирилиці
//    echo '<br>';
//    echo chr(36); // $
//    echo '<br>';
//    echo ord('k'); // 107
//    echo '<br>';
//    $date = '28.06.2016';
//    echo 'день '.substr($date,0,2).'<br>'; // substr() аналог slice() в js
//    echo 'місяць '.substr($date,3,2).'<br>';
//    echo 'рік '.substr($date,6).'<br>';
//    echo '<br>';
//    echo strpos($str, 'світ'); // 'світ' починається з індексу 13, по нормальному з 7-го
//    echo '<br>';

    // Початковий рядок з тегами [b] та [/b]
    $string = "Це [b]приклад[/b] тексту з тегами."; // [b] і [/b] теги в невідомих мені текстових редакторах

    // Заміна тегів на html теги
    //$string_with_tags = str_replace("[b]", "<b>", $string); // щоб видалити тег ми ставимо "" замість "<b>"
    //$string_with_tags = str_replace("[/b]", "</b>", $string_with_tags);
//    $string = str_replace(['[b]', '[/b]'], ['', ''], $string, $number); // те саме, тільки задопомогою масивів
//    // Виведення результату
//    echo $string;
//    echo '<br>';
//    echo 'Виконано замін з тегами - ' . $number;
    //echo $string_with_tags; // Виведе: Це <b>приклад</b> тексту з тегами.
//    echo '<br>';
//    echo trim($str, 'п'); // вирізаємо символ 'п' із $str
    ?>
</h1>


<?php
//echo '<pre style="font-size: 30px; color: blue;">';
//$url = 'http://localhost:63342/my-first-project/php%20learn/learn.php?first=name&second=pass';
//print_r(parse_url($url));
//echo '</pre>';
?>
<!--<form method="GET" action="">-->
<!--    <label>-->
<!--        <input type="text" name="first">-->
<!--    </label><br>-->
<!--    <label>-->
<!--        <input type="text" name="second">-->
<!--    </label><br>-->
<!--    <input type="submit" value="Віддіслати">-->
<!--</form>-->
<?php
//if (!empty($_GET['first']) && !empty($_GET['second'])) {
//    echo '<pre>';
//    print_r($_GET);
//    echo '</pre>';
//} else {
//    exit('Текстові поля не заповнені');
//}
?>

<?php
//$errors = [];
//$first = '';
//
//if (!empty($_POST)) {
//    if (isset($_POST['first'])) {
//        $first = htmlspecialchars($_POST['first'], ENT_QUOTES);
//    }
//    if (empty($first)) {
//        $errors[] = 'Текстове поле не заповнено';
//    }
//    if (empty($errors)) {
//        echo $first;
//        exit();
//    }
//}
//if (!empty($errors)) {
//    foreach ($errors as $err) {
//        echo "<span style='color:red'>$err</span><br>";
//    }
//}
//?>

<!--Форма для завантаження файлу на сервер-->
<!--<form method="POST">-->
<!--    <label>-->
<!--        <input type="text" name="first" value="--><?php //echo $first; ?><!--">-->
<!--    </label><br>-->
<!--    <input type="submit" value="Віддіслати">-->
<!--</form>-->
<!--
-->

<!--<img src="lesson50.png" alt="">-->
<!--Форма для завантаження файлів<br>-->
<!--<form action="script.php" method="POST" enctype="multipart/form-data">-->
<!--    <input type="file" name="filename">-->
<!--    <input type="submit" value="Відправити">-->
<!--</form>-->

<!--Форма для відсилання листа на пошту-->
<!-- <form action="sandmail.php" method="POST">-->
<!--        <select name="subject">-->
<!--            <option disabled selected>Тема листа</option>-->
<!--            <option value="1">Питання по уроку</option>-->
<!--            <option value="2">Особисте питання</option>-->
<!--            <option value="3">Вдячність</option>-->
<!--        </select>-->
<!--        <input type="email" name="email" placeholder="Введіть ваш email" maxlength="50" required>-->
<!--        <textarea name="message" placeholder="Введіть повідомлення" maxlength="150" required></textarea>-->
<!--        <img src="capcha1.jpg">-->
<!--        <input type="number" name="capcha" placeholder="Введіть відповідь" maxlength="3" required>-->
<!--        <input type="submit" value="Відіслати лист">-->
<!--    </form>-->

<?php
// робота з класами
//class Hello {
//    public function printText(): string
//    {
//        return "Hello world!";
//    }
//}
//$obj = new Hello();
//echo $obj->printText();

//class Point {
//    private $x;
//    private $y;
//    public function setX($x): void
//    {
//        $this->x=$x;
//    }
//    public function setY($y): void
//    {
//        $this->y=$y;
//    }
//    public function getX() {
//        return $this->x;
//    }
//    public function getY() {
//        return $this->y;
//    }
//    public function distance(): float
//    {
//        return sqrt($this->getX()**2 + $this->getY()**2);
//    }
//}
//$p1 = new Point();
//$p1->setX(2);
//$p1->setY(4);
//echo $p1->distance();

//class Hello {
//    public static function printText(): string
//    {
//        return "Hello world!";
//    }
//}
//$obj = new Hello();
//echo Hello::printText();

// Використання методів класу без створення екземпляра класа
//class Page {
//    static string $content = 'This body site<br>'; // Оголошується статичне властивість $content класу Page і присвоюється значення 'This body site<br>'
//    public static function footer(): string // Оголошується статичний публічний метод footer(), який повертає рядок
//    {
//        return 'This footer site<br>'; // Повертається рядок 'This footer site<br>'
//    }
//    public static function header(): string // Оголошується статичний публічний метод header(), який повертає рядок
//    {
//        return 'This header site<br>'; // Повертається рядок 'This header site<br>'
//    }
//    public static function site(): void // Оголошується статичний публічний метод site() без повернення значення
//    {
//        echo self::header() . // Виводиться результат виклику методу header()
//            self::$content . // Виводиться вміст властивості $content
//            self::footer(); // Виводиться результат виклику методу footer()
//    }
//}
//
//Page::site(); // Виклик статичного методу site() класу Page, що виводить заголовок, вміст та футер сайту

// Приховані методи
//class People {
//    private $name; // Оголошення приватної властивості $name
//
//    public function __construct() { // Конструктор класу
//        echo 'Виклик конструктора'; // Вивід повідомлення про виклик конструктора
//        $this->name = "Ivan"; // Ініціалізація приватної властивості $name значенням "Ivan"
//    }
//}
//
//$obj = new People(); // Створення об'єкта класу People, що викликає конструктор
//
//echo '<pre>'; // Початок виведення форматованого тексту
//echo print_r($obj, true); // Виведення об'єкту за допомогою print_r
//echo '</pre>'; // Завершення виведення форматованого тексту

// конструктор для створення точок
// Оголошення класу Point
//class Point {
//    private $x; // Приватне властивість $x для збереження координати X
//    private $y; // Приватне властивість $y для збереження координати Y
//
//    // Конструктор класу, який приймає значення X і Y за замовчуванням, які дорівнюють 0
//    public function __construct($x=0, $y=0) { // вказали $x=0 та $y=0 щоб не викидало помилки при new Point();
//        $this->x = $x; // Ініціалізація властивості $x значенням, переданим в конструктор
//        $this->y = $y; // Ініціалізація властивості $y значенням, переданим в конструктор
//    }
//
//    // Магічний метод __toString, який повертає рядок з координатами точки
//    public function __toString() {
//        return "({$this->x}, {$this->y})"; // Повертає рядок з координатами точки
//    }
//}
//
//$obj = new Point(10, 12); // Створення об'єкта класу Point з координатами (10, 12)
//
//echo "{$obj}"; // Виведення координат точки у форматі (x, y)

//використання фрагментів коду повторно, наслідування класу, абстрактний клас, абстрактний метод
//Визначення класу Animal
//Абстрактний клас дозволяє наслідувати його методи, але не дає створювати нові об'єкти цього класу
//abstract class Animal { // якщо замість abstract написати final то клас Animal не зможе наслідуватися
//    protected int $legs = 4; // Захищена властивість $legs, яка зберігає кількість ніг (за замовчуванням 4)
//
//    // Метод info, який виводить інформацію про кількість ніг тварини
//    public function info(): void {
//        echo "У мене {$this->legs} лапи.";
//    }
// abstract function color(); // абстрактний метод, він пустий, його можна реалізувати в дочірніх класах
//}
//
//// Визначення класу Dog, який є нащадком класу Animal
//class Dog extends Animal {
//    public function color(): void // тут ми реалізуємо абстрактний метод color
//    {
//        echo 'red';
//    }
//    public string $name = "Собака"; // Публічна властивість $name, яка зберігає назву тварини (за замовчуванням "Собака")
//
//    // Перевизначений метод info, який виводить інформацію про тварину (ім'я та кількість ніг)
//    public function info(): void {
//        echo "Я {$this->name}, У мене {$this->legs} лапи.";
//    }
//
//    // Метод voice, який виводить звук, що виділяє тварина
//    public function voice(): void {
//        echo "{$this->name} видає звук гав-гав.";
//    }
//
//    // Метод parentInfo, який викликає метод info з батьківського класу
//    public function parentInfo(): void {
//        parent::info(); // Виклик методу info з класу Animal
//    }
//}
//
//// Визначення класу Cat, який також є нащадком класу Animal
//class Cat extends Animal {
//    public function color(): void
//    {
//        echo 'green';
//    }
//    public string $name = "Кішка"; // Публічна властивість $name, яка зберігає назву тварини (за замовчуванням "Кішка")
//
//    // Метод voice, який виводить звук, що виділяє тварина
//    public function voice(): void {
//        echo "{$this->name} видає звук м'яв.";
//    }
//}
//
//$dog = new Dog(); // Створення об'єкта класу Dog
//
//// Виклик методу parentInfo, який виводить інформацію про кількість ніг тварини
//$dog->parentInfo(); // Виклик методу info з класу Animal

// перевірка чи дочірній клас наслідує батьківський за допомогою instanceOf
// Базовий (батьківський) клас
//class Animal
//{
//    // Інформація про кількість лап
//    protected int $legs = 4;
//
//    // Метод для виведення інформації про тварину
//    public function info(): void
//    {
//        echo "У мене {$this->legs} лапи.";
//    }
//}
//
//// Похідний (нащадковий) клас, який наслідує базовий клас Animal
//class Dog extends Animal
//{
//    // Ім'я собаки
//    public string $name = "Собака";
//
//    // Перевизначений метод info() для собаки
//    public function info(): void
//    {
//        echo "Я {$this->name}, У мене {$this->legs} лапи.";
//    }
//}
//
//// Створення об'єкта класу Dog
//$dog = new Dog();
//
//// Перевірка, чи клас Dog наслідує клас Animal
//if ($dog instanceof Animal) {
//    echo "Клас Dog наслідує клас Animal.";
//} else {
//    echo "Клас Dog не наслідує клас Animal.";
//}

//echo $_SERVER['HTTP_USER_AGENT']; // інформація про сервер
//if (str_contains($_SERVER['HTTP_USER_AGENT'], 'FireFox')) { // перевірка браузера
//    echo 'Ви використовуєте Firefox.';
//} else {
//    echo   'У вас Google Chrome.';
//}

//echo get_debug_type([])


?>
<?php //= 'the same as it echo'// Не рекомендується використовувати короткі теги?>

<?php
//// Визначення перерахування Suit
//enum Suit
//{
//    case Hearts;
//    case Diamonds;
//    case Clubs;
//    case Spades;
//}
//
//// Функція, яка приймає аргумент типу Suit
//function do_stuff(Suit $s): void
//{
//    // Приклад використання switch для обробки різних значень enum
//    switch ($s) {
//        case Suit::Hearts:
//            echo "You selected Hearts.\n";
//            break;
//        case Suit::Diamonds:
//            echo "You selected Diamonds.\n";
//            break;
//        case Suit::Clubs:
//            echo "You selected Clubs.\n";
//            break;
//        case Suit::Spades:
//            echo "You selected Spades.\n";
//            break;
//    }
//}
//
//// Виклик функції з аргументом Suit::Spades
//do_stuff(Suit::Spades);
//?>

</body>
</html>

