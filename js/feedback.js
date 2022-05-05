// Как только страничка загрузилась 
window.onload = function() {
    // проверяем поддерживает ли браузер FormData 
    if (!window.FormData) {
        alert("Браузер не поддерживает загрузку файлов на этом сайте");
    }
}

$(function() {

    document.getElementById('feedback__form').addEventListener('submit', function(evt) {
        var http = new XMLHttpRequest(),
            f = this;
        evt.preventDefault();
        http.open("POST", "send_mail.php", true);
        http.onreadystatechange = function() {
            if (http.readyState == 4 && http.status == 200) {
                alert(http.responseText);
                $('form#feedback__form').trigger('reset');
            }
        }
        http.onerror = function() {
            alert('Извините, данные не были переданы');
        }
        http.send(new FormData(f));
    }, false);

    // =====================

    $('#consult__form').on("submit", function(event) {
        event.preventDefault();
        // собираем данные с формы
        var user_name = $('#name').val();
        var user_email = $('#email').val();
        var user_phone = $('#phone').val();
        var message = $('#message').val();

        // отправляем данные
        $.ajax({
            url: "mail.php", // куда отправляем
            type: "post", // метод передачи
            data: { // что отправляем
                "name": user_name,
                "email": user_email,
                "phone": user_phone,
                "message": message
            },
            error: function() {
                $("#erconts").html("Произошла ошибка!");
            },
            /* если произойдет ошибка в элементе с id erconts выведится сообщение*/
            beforeSend: function() {
                $("#erconts").html("Отправляем данные...");
            },
            success: function() {
                /* В случае удачной обработки и отправки выполнится следующий код*/
                $('#erconts').html("Сообщение отправлено!");
                $('form#consult__form').trigger('reset');
            }
        });
        // return false;
    });
});