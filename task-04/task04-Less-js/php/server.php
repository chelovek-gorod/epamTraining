<?php

// unpacking the request
$email = $_POST["email"];
$text = $_POST["message"];

// sending a email
$to = "chelovek-gorod@yandex.by";
$theme = "Solar System"; // subject of the received email
$message .= "Email: ".$email."<br><br>"; // received email from the form
$message .= "Message: <br>".$text."<br>"; // received message from the form
$headers  = "MIME-Version: 1.0" . "\r\n"; // the header and new line character
$headers .= "From: metal@bit-studio.by" . "\r\n";
$headers .= "Content-type: text/html; charset=utf-8" . "\r\n"; // type of sensing content
$send_ok = mail($to, $theme, $message, $headers); //send email

// server response
if ($send_ok) {echo 1;} else {echo 0;}

?>