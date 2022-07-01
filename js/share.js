$(function() {

    let share = document.getElementsByClassName('i-share');

    [].forEach.call(share, function(el) {
        el.addEventListener('click', function(e) {
            var copytext = document.createElement('input')
            copytext.value = window.location.href
            document.body.appendChild(copytext)
            copytext.select()
            document.execCommand('copy')
            document.body.removeChild(copytext)

            Swal.fire("Ссылка на вакансию скопирована")
        })
    });

});