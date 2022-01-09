<?php

if (!empty($_SERVER['HTTPS']) && ('on' == $_SERVER['HTTPS'])) {
    $uri = 'https://';
} else {
    $uri = 'http://';
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Page !</title>

    <link rel="stylesheet" type="text/css" href="css/custom-styles.css">
</head>
<body>
    <h1>Greetings: <?= 'This is my first site page!'; ?></h1>
    <h3>Protocol: <?= $uri; ?></h3>
    <div class="link">
        <a href="custom-page.html" target="_blank">Go to custom page!</a>
    </div>
    <script>
        console.log('Page: My Page!');
    </script>
</body>
</html>
