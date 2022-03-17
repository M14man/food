'use strict';



    class User {
        constructor(name, age) {
            this.name = name;
            this._age = age;
        }

        #surname = 'Turovskyi'; // так ми створили закриту властивість то якої можем отримати доступ тільки через геттер а змінити тільки через сеттер

        say() {
            console.log(`Ім'я користувача: ${this.name} ${this.#surname}, вік ${this._age} `);
        }

        get age() {
            return this._age;
        }
        set age(age) {
            if (typeof age === 'number' && age > 0 && age < 100) {
                this.age = age;
            } else {
                console.log('Недопустипе значення');
            }
        }

        get surname() {
            return this.#surname;
        }

        set surname(surname) {
            this.#surname = surname;
        }


    }

    const dima = new User('Dima', 30);

    console.log(dima.surname = 'Saporchuk');

    dima.say();