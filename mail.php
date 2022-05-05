<?php

$to = "alex.chursinov@gmail.com"; // емайл получателя данных из формы
$tema = "Сообщение от Nord Digital"; // тема полученного емайла
$message = "Имя: ".$_POST['name']."<br>";//присвоить переменной значение, полученное из формы name=name
$message .= "E-mail: ".$_POST['email']."<br>"; //полученное из формы name=email
$message .= "Контактный номер: ".$_POST['phone']."<br>"; //полученное из формы name=phone
$message .= "Сообщение: ".$_POST['message']."<br>"; //полученное из формы name=message
$headers  = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
$headers .= 'From: Nord Digital web-site <info@address.com>' . "\r\n";
mail($to, $tema, $message, $headers); //отправляет получателю на емайл значения переменных

?>