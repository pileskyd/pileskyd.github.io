document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Здесь можно добавить код для отправки данных формы, например, через AJAX.
    alert('Спасибо за ваше сообщение, ' + name + '!');
});
