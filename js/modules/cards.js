import { getResource } from '../services/services';

function cards() {

    // Використовуємо класи для карточок

    class MenuCard {
        constructor(src, alt, title, descr, prise, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.prise = prise;
            this.parent = document.querySelector(parentSelector);
            this.classes = classes;
            this.transfer = 28;
            this.changeToUAH();

        }
        
        changeToUAH() {
            this.prise = this.prise * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.classes = 'menu__item';
                element.classList.add(this.classes);
            } else {
               this.classes.forEach(item => element.classList.add(item)); 
            }
            element.innerHTML = `
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.prise}</span> грн/день</div>
                    </div>`;
            this.parent.append(element);
        }
    }

    getResource('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({ img, altimg, title, descr, price }) => {
                
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
            });
        });
}

export default cards;