<?php

$str_json = file_get_contents('php://input');
$response = json_decode($str_json, true);

$to = "chelovek-gorod@yandex.by";
$theme = "Order pizza"; 
$message = $str_json; 
$headers  = "MIME-Version: 1.0" . "\r\n";
$headers .= "From: calc-array@bit-studio.by" . "\r\n";
$headers .= "Content-type: text/html; charset=utf-8" . "\r\n";
$send_ok = mail($to, $theme, $message, $headers);

echo $str_json;

?>