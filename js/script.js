'use strict'

document.addEventListener("DOMContentLoaded", () => {
    //3.1
    console.log("Скрипт отработал корректно");

    //3
    document.addEventListener('scroll', () => {
        console.log("Страница скролится");

    });
    //3.2
    const card = document.querySelector('.card');       // создаем переменную находя блок по классу
    if (card) {                                           // проверяем существование элемента в DOM
        console.log('Константа card существует');

        /*
        *   Алгоритм
        *
        *   1. Начало.
        *   2. Получаем  все элементы карточек с описанием состава  (создание переменной, которая не будет меняться).
        *   3. Для каждого состава (проверяем есть ли такие)
        *       3.1 Навешиваем слушатель событий на текст(состав) карточки : если курсор наведен.
        *           3.1.1 Да: Получаем значение описания состава (создание переменной, которая будет меняться).
        *               3.1.1.1.  показываем текст описания при наведении
        *           3.1.2. Нет: конец.
        *       3.2. Навешиваем слушатель событий на текс(состав) карточки : если курсор уходит с текста(состав).
        *           3.2.1 Да:
        *               3.2.1.1 Скрываем эелемент с описанием.
        *           3.2.2 Нет: конец.
        *   4. Конец
        *
        *   Блок-схема: /images/block-schema.png
        */
        const cardText = card.querySelectorAll('.card__text');

        //Пройдемся по каждому элементу массива cardText, с помощью цикла forEach.  Внутри функции 2 переменные:
        // item - текущий текст (состав), а index — его номер в массиве, начиная с 0
        cardText.forEach((item, index) => {

            //Объявляем переменную cardDescription и сохраняем в нее все элементы с классом card__description, которые связаны с описаниями
            const cardDescription = card.querySelectorAll('.card__description');

            //Когда курсор наводится на текст(событие mouseenter), срабатывает обработчик события mouseenter:
            item.addEventListener('mouseenter', () => {
                // Делаем текст полупрозрачным
                item.style.opacity = 0.5;
                //И удаляем атрибут hidden и описание становится видимым
                cardDescription[index].removeAttribute('hidden');
            });

            //Когда курсор убираем с текста (событие mouseleave),срабатывает обработчик события mouseleave:
            item.addEventListener('mouseleave', () => {
                //текст делаем непрозрачным
                item.style.opacity = 1;
                // И добавляем атрибут hidden и описание становится невидимым
                cardDescription[index].setAttribute('hidden', true);
            });
        });

        //3.4 Формируем массив из заголовков элементов блока  и выводим их
        // создаем массив dataTitleCard
        const dataTitleCard = [
            "Ролл “Так”",
            "Ролл “Сяк”",
            "Ролл “Так и сяк”",
        ];

        const titleCard = card.querySelectorAll(".card__subtitle");
        // Проходим по каждому элементу массива titleCard с помощью цикла forEach
        titleCard.forEach((item, index) => {
            item.textContent = dataTitleCard[index];
        });

    }



    //3.5 моковые данные
    // const reviews = document.querySelector('.reviews');

    // if (reviews) {
    //     const reviewsList = reviews.querySelector('.reviews__list');

    //     const reviewsItemData = {
    //         item1: {
    //             title: 'Ульяна',
    //             text: 'всегда заказываю доставкой, роллы упаковывают хорошо, роллы очень вкусные, продукты свежие, количество набора очень радует, есть приятные скидки и система начисления бонусов, время ожидания соответствует заявленному'

    //         },
    //         item2: {
    //             title: 'Степан',
    //             text: 'Заказали сегодня сет роллов. Это вкусно, это действительно очень вкусно, спасибо большое повару, будем заказывать ещё, дальнейшего процветания и благодарных клиентов'
    //         },
    //         item3: {
    //             title: 'Мария',
    //             text: 'Очень вкусные роллы, всегда заказываем только в IKIGAI. Быстрая доставка, доступные цены<'
    //         }
    //     }

    //     const createCard = (title, text) => {
    //         const card = `
    //         <li class="reviews__item">
    //                         <h3 class="reviews__subtitle">${title}</h3>
    //                         <p class="reviews__text">${text}</p>
    //                     </li>
    //     `;
    //         return card;
    //     }
    //     for (const cardKey in reviewsItemData) {
    //         const card = reviewsItemData[cardKey];
    //         const cardElement = createCard(card.title, card.text);
    //         reviewsList.insertAdjacentHTML('beforeend', cardElement);
    //     }
    // }


    // формы
    /*  Появление и работа с формами */

    const loginMenuButton = document.querySelector('.menu__login');
    const dialogLayout = document.querySelector('.dialog');
    const deliveryButton = document.querySelectorAll('[data-delivery]');
    const header = document.querySelector('.header');
    if (loginMenuButton && dialogLayout) {
        const closeDialogButtons = dialogLayout.querySelectorAll('[data-close]');
        const selectPopup = dialogLayout.querySelector('#popup-select');
        const loginPopup = dialogLayout.querySelector('#popup-login');
        const registrationPopup = dialogLayout.querySelector('#popup-registration');
        const deliveryPopup = dialogLayout.querySelector('#popup-delivery');
        const switchToRegisterButtons = dialogLayout.querySelectorAll('[data-registration]');
        const switchToLoginButtons = dialogLayout.querySelectorAll('[data-login]');

        // Открытие модального окна при клике на кнопку "Войти"
        loginMenuButton.addEventListener('click', () => {
            dialogLayout.removeAttribute('hidden');
            selectPopup.removeAttribute('hidden');

        });

        // Открытие модального окна при клике на кнопку "Заказать доставку"
        if (deliveryButton) {
            deliveryButton.forEach(button => {
                button.addEventListener('click', (event) => {
                    event.preventDefault();
                    dialogLayout.removeAttribute('hidden');
                    deliveryPopup.removeAttribute('hidden');

                });
            });
        }

        // Закрытие модального окна при клике на кнопку закрытия
        if (closeDialogButtons) {
            closeDialogButtons.forEach(button => {
                button.addEventListener('click', () => {
                    dialogLayout.setAttribute('hidden', true);
                    selectPopup.setAttribute('hidden', true);
                    loginPopup.setAttribute('hidden', true);
                    registrationPopup.setAttribute('hidden', true);
                    deliveryPopup.setAttribute('hidden', true);
                });
            });
        }

        // Закрытие модального окна при клике вне его области
        window.addEventListener('click', (event) => {
            if (event.target === dialogLayout) {
                dialogLayout.setAttribute('hidden', true);
                selectPopup.setAttribute('hidden', true);
                loginPopup.setAttribute('hidden', true);
                deliveryPopup.setAttribute('hidden', true);
                registrationPopup.setAttribute('hidden', true);

            }
        });

        // Переключение на форму регистрации
        if (registrationPopup) {
            switchToRegisterButtons.forEach(button => {
                button.addEventListener('click', (event) => {
                    event.preventDefault();
                    selectPopup.setAttribute('hidden', true);
                    loginPopup.setAttribute('hidden', true);
                    registrationPopup.removeAttribute('hidden');
                });
            });
        }

        // Переключение на форму входа
        if (loginPopup) {
            switchToLoginButtons.forEach(button => {
                button.addEventListener('click', (event) => {
                    event.preventDefault();
                    selectPopup.setAttribute('hidden', true);
                    registrationPopup.setAttribute('hidden', true);
                    loginPopup.removeAttribute('hidden');

                    // Проверяем, есть ли сохраненный логин в localStorage
                    if (localStorage.getItem('login')) {
                        // Находим поле ввода логина
                        const loginField = document.querySelector('#userlogin');

                        // Устанавливаем значение поля из localStorage
                        loginField.value = localStorage.getItem('login');
                    }
                });
            });
        }

        // Отправка данных на форме регистрации
        registrationPopup.addEventListener('submit', event => {
            event.preventDefault(); // Предотвращаем отправку формы

            const username = registrationPopup.querySelector('#username').value;
            const login = registrationPopup.querySelector('#login').value;
            const email = registrationPopup.querySelector('#email').value;
            const password = registrationPopup.querySelector('#password').value;
            const confirmPassword = registrationPopup.querySelector('#confirm-password').value;

            const errorMessage = registrationPopup.querySelector('#error-message');

            if (password !== confirmPassword) {
                errorMessage.textContent = 'Пароли не совпадают';
                errorMessage.style.color = 'red';
                return;
            }

            if (username.length < 3) {
                errorMessage.textContent = 'Имя пользователя должно содержать не менее 3 символов';
                return;
            }

            if (password.length < 8) {
                errorMessage.textContent = 'Пароль должен содержать не менее 8 символов';
                return;
            }

            // Здесь можно добавить отправку данных на сервер
            errorMessage.textContent = 'Регистрация прошла успешно!';
            errorMessage.style.color = 'green';

            // Запишем логин
            window.localStorage.setItem("login", login);

            // Очистка формы
            document.getElementById('registration-form').reset();
        });
        //Отправка данных на форме входа
        loginPopup.addEventListener('submit', event => {
            event.preventDefault(); // Предотвращаем отправку формы

            const loginField = loginPopup.querySelector('#userlogin').value;
            const passwordField = loginPopup.querySelector('#userpassword').value;

            const errorMessage = loginPopup.querySelector('#error-message-login');

            const users = {
                'test': '12345678',
                'student': '0987654321',
            }

            if (users.hasOwnProperty(loginField) && users[loginField] === passwordField) {
                // Здесь можно добавить отправку данных на сервер
                errorMessage.textContent = 'Вход выполнен успешно';
                errorMessage.style.color = 'green';

                loginMenuButton.remove();

                const userHeader = `
                <div class="header__user-block">
                    <svg width="64px" height="64px" viewBox="-4.08 -4.08 32.16 32.16" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#d45a25"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#ffa424" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    <span class="header__login">${loginField}</span>
                </div>
                    `;

                header.insertAdjacentHTML('beforeend', userHeader);

                setTimeout(() => {
                    dialogLayout.setAttribute('hidden', true);
                    selectPopup.setAttribute('hidden', true);
                    loginPopup.setAttribute('hidden', true);
                    registrationPopup.setAttribute('hidden', true);
                    deliveryPopup.setAttribute('hidden', true);

                    document.getElementById('login-form').reset();
                }, 3000);
            } else {
                errorMessage.textContent = 'Пользователь с таким логином и паролем не найден!';
                errorMessage.style.color = 'red';
            }
        });
    }

    //3.6 json
    const reviews = document.querySelector('.reviews');

    if (reviews) {
        const reviewsList = reviews.querySelector('.reviews__list');
        const apiUrl = 'data.json';

        const createCard = (title, text) => {
            const card = `
            <li class="reviews__item">
                            <h3 class="reviews__subtitle">${title}</h3>
                            <p class="reviews__text">${text}</p>
                        </li>
        `;
            return card;
        }

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Данные
                console.log(typeof (data)); // Тип полученных данных

                data.forEach(item => {
                    const cardElement = createCard(item.title, item.text);
                    reviewsList.insertAdjacentHTML('beforeend', cardElement);

                });
            })
            .catch(error => {
                console.error('Ошибка при загрузке данных:', error);
            });

    }

    //
    const preloader = document.querySelector('.preloader');
    const content = document.querySelector('.content');

    if (preloader && content) {
        setTimeout(() => {
            // Скрываем прелоадер
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';

            // Показываем контент
            content.style.display = 'block';

            // Удаляем элемент из DOM
            preloader.remove();
        }, 3000); // Задержка 3 секунд
    }


    // ScrollTop
    const scrollTopButton = document.querySelector('.scrolltop');

    if (scrollTopButton) {
        const windowHeight = document.documentElement.clientHeight;

        document.addEventListener('scroll', () => {
            if (window.scrollY > windowHeight) {
                scrollTopButton.classList.add('scrolltop--visible');
            } else {
                scrollTopButton.classList.remove('scrolltop--visible');
            }
        });

        scrollTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    //3.7 Карусель (слайдер)
    const slider = document.querySelector('.swiper');

    if (slider) {
        const swiper = new Swiper(slider, {
            // Дополнительные параметры
            slidesPerView: 1, // Количество слайдов на экране
            spaceBetween: 15, // Расстояние между слайдами
            loop: true,  // Зацикливание слайдов
            autoplay: true,
            // Пагинация
            pagination: {
                el: '.swiper-pagination',
            },

            // Навигационные стрелки
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

});