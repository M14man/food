function showModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('active');
    modal.classList.remove('hiden');
    document.body.style.overflow = 'hidden'; // забираєм прокрутку в вікні
    console.log(modalTimerId);
    if (modalTimerId) {
        clearInterval(modalTimerId); // це для того щоб якщо ми вже відкрили модальне то скинути таймер
    }
    
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('hiden');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector, modalTimerId) {

    // Modal window

    const btnModal = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);
    
    
    

    btnModal.forEach(item => {
        item.addEventListener('click', ()=> showModal(modalSelector, modalTimerId)); // спочатку було просто showModal !!!!
    });
    


    modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('active')) {
            closeModal(modalSelector);
        } 
    });


    function showModalByScroll() {
        const doc = document.documentElement;
        if (doc.scrollTop + doc.clientHeight == doc.scrollHeight) {
            showModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);  
        }
    }


    window.addEventListener('scroll', showModalByScroll);
}    

export default modal;
export { closeModal };
export { showModal };