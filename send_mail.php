<?php

$to = 'info.nd78@mail.ru';

if (isset ($_POST['email'])) {
    $name  = substr( $_POST['name'], 0, 64 );
    $phone = substr( $_POST['phone'], 0, 64 );
    $email   = substr( $_POST['email'], 0, 64 );
    $message = substr( $_POST['message'], 0, 250 );
    $filesize = '';
   
  
    if ( !empty( $_FILES['file-upload']['tmp_name'] ) and $_FILES['file-upload']['error'] == 0 ) {
      $filepath = $_FILES['file-upload']['tmp_name'];
      $filename = $_FILES['file-upload']['name'];
      $filesize = $_FILES['file-upload']['size'];
    } else {
      $filepath = '';
      $filename = '';
    }
    
    $body = "Имя:\r\n".$name."\r\n\r\n";
    $body .= "Контактный номер:\r\n".$phone."\r\n\r\n";
    $body .= "E-mail:\r\n".$email."\r\n\r\n";
    $body .= "Сообщение:\r\n".$message;
   
    send_mail($to, $body, $email, $filepath, $filename, $filesize);
  }
  
  // Вспомогательная функция для отправки почтового сообщения с вложением
  function send_mail($to, $body, $email, $filepath, $filename, $filesize)
  {
    $subject = 'Сообщение от Nord Digital';
    $boundary = "--".md5(uniqid(time())); // генерируем разделитель
    $headers = "From: Nord Digital web-site ".$email."\r\n";   
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .="Content-Type: multipart/mixed; boundary=\"".$boundary."\"\r\n";
    $multipart = "--".$boundary."\r\n";
    $multipart .= "Content-type: text/plain; charset=\"utf-8\"\r\n";
    $multipart .= "Content-Transfer-Encoding: quoted-printable\r\n\r\n";
  
    $body = $body."\r\n\r\n";
   
    $multipart .= $body;
   
    $file = '';
    if ( !empty( $filepath ) ) {
      $fp = fopen($filepath, "r");
      if ( $fp ) {
        $content = fread($fp, filesize($filepath));
        fclose($fp);
        $file .= "--".$boundary."\r\n";
        $file .= "Content-Type: application/octet-stream\r\n";
        $file .= "Content-Transfer-Encoding: base64\r\n";
        $file .= "Content-Disposition: attachment; filename=\"".$filename."\"\r\n\r\n";
        $file .= chunk_split(base64_encode($content))."\r\n";
      }
    }
    $multipart .= $file."--".$boundary."--\r\n";
    
    
    if ($filesize < 10000000) { // проверка на общий размер всех файлов. Многие почтовые сервисы не принимают вложения больше 10 МБ
        mail($to, $subject, $multipart, $headers);
        echo $_POST['name'].', Ваше сообщение получено, спасибо!';
      } else {
        echo 'Извините, письмо не отправлено. Размер всех файлов превышает 10 МБ.';
      }
  
  }
?>