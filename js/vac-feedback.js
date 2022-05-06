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
        http.open("POST", "../send_mail.php", true);
        http.onreadystatechange = function() {
            if (http.readyState == 4 && http.status == 200) {
                // alert(http.responseText);
                Swal.fire(
                    'Сообщение отправлено',
                    http.responseText,
                    'success'
                );
                $('form#feedback__form').trigger('reset');
            }
        }
        http.onerror = function() {
            alert('Извините, данные не были переданы');
        }
        http.send(new FormData(f));
    }, false);

});