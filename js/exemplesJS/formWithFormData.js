'use strict';


const forms = document.querySelectorAll('form');

    const message = {
        loading: 'Загрузка',
        success: "Дякуємо! Мискоро з вами зв'яжемось.",
        failure: 'Щось пышло не так'
    };



    forms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            form.append(statusMessage);

            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');

            // request.setRequestHeader('Content-type', 'multipart/form-data');
            const formData = new FormData(form);

            request.send(formData);

            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    statusMessage.textContent = message.success;
                    form.reset();
                    setTimeout(() => statusMessage.remove(), 2000);
                } else {
                    statusMessage.textContent = message.failure;
                }
            });



        });
    }


    //Для коректної роботи FormData важливо щоб в input завжди був атрибут 'name' !!!!!
    // При використанні XMLHttpHeader і FormData задавати заголок setRequestHeader не потрібно.
