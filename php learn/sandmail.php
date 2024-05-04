<?php
  if($_POST['capcha'] != 56) {
    header('location: index.php');
    exit;
  }

if($_POST['subject'] == 1) {
    $subject = 'Питання з уроку';
} elseif($_POST['subject'] == 2) {
    $subject = 'Особисте питання';
} elseif($_POST['subject'] == 3) {
    $subject = 'Подяка';
} else {
    $subject = 'Питання з уроку';
}

$to = "rewardroad@gmail.com";
$from = trim($_POST['email']);

  $message = htmlspecialchars($_POST['message']);
  $message = urldecode($message);
  $message = trim($message);

$headers = "From: $from" . "\r\n" .
    "Reply-To: $from" . "\r\n" .
    "X-Mailer: PHP/" . phpversion();

if(mail($to, $subject, $message, $headers)) {
    echo 'Лист надісланий';
} else {
    echo 'Лист не надіслано';
}