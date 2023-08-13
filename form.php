<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
		$text = $_POST["text"];


    echo "Спасибо, $name! Ожидайте письмо на Вашу электронную почту";

}
?>