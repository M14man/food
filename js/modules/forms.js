import { closeModal, showModal } from './modal';
import { postData } from '../services/services';


function forms(formSelector, modalTimerId) {
    
    // Forms

    const forms = document.querySelectorAll(formSelector);


    forms.forEach(item => bindPostData(item));

    const message = {
        loading: 'img/form/spinner.svg',
        success: "Дякуємо. Скоро ми з вами зв'яжимось.",
        failure: 'Щось пішло не так'
    };




    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;

            form.insertAdjacentElement('afterend', statusMessage);

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            
            postData('http://localhost:3000/requests', json) // тут ми беремо дані з формт (formData) перетворюєм її в масив масивів за допомогою - formData.entries() а потім знову перетворює її на звичайний об'єкт Object.fromEntries()
                .then(data => { // це ді дані які нам вернулись з промісу тобто ті які вернув сервер
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            });
        });
    }
    /*Promise який запускається за допомогою fetch не перейде в статус reject (відхилено)
     через відповіді які рахуються помилкою http 404, 500, 501, єдине там зміниться статус який перейде в режим false*/
    
    /*Для коректної роботи FormData важливо щоб в input завжди був атрибут 'name' !!!!!
     При використанні XMLHttpRequest і FormData задавати заголок setRequestHeader не потрібно.*/


    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
        prevModalDialog.classList.add('hiden');
        showModal('.modal', modalTimerId);
        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
        <div class="modal__content">
            <div data-close class="modal__close">&times;</div>
            <div class="modal__title">${message}</div>
        </div>
        `;
        document.querySelector('.modal').append(thanksModal);

        setTimeout(() => {
            prevModalDialog.classList.remove('hiden');
            prevModalDialog.classList.add('active');
            thanksModal.remove();
            closeModal('.modal');
        }, 4000);
    }
    
    
}

export default forms;
