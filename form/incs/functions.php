<?php

function debug($data){
    echo '<pre>' . print_r($data, 1) . '</pre>';
}

function load($data){
    foreach ($_POST as $k => $v) {
        if(array_key_exists($k, $data)){
            $data[$k]['value'] = trim($v);
        }
    }
    return $data;
}

function validate($data){
    $errors = '';
    foreach ($data as $k => $v) {
        if($data[$k]['required'] && empty($data[$k]['value'])){
            $errors .= "<li>Ви не заповнили поле {$data[$k]['field_name']}</li>";
        }
    }
    if(!check_captcha($data['captcha']['value'])){
        $errors .= "<li>Невірно заповнене поле Captcha</li>";
    }
    return $errors;
}

function set_captcha(){
    $num1 = rand(1, 100);
    $num2 = rand(1, 100);
    $_SESSION['captcha'] = $num1 + $num2;
    return "Скільки буде {$num1} + {$num2}?";
}

function check_captcha($res){
    return $_SESSION['captcha'] == $res;
}
