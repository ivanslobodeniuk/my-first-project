document.addEventListener('DOMContentLoaded', () => {
    // Функція для перемикання видимості контейнера та зміни іконки кнопки
    const toggleVisibility = (button, container) => {
        button.addEventListener('click', () => {
            container.classList.toggle('container-invisible');
            if (container.classList.contains('container-invisible')) {
                button.querySelector('img').src = 'img/show.png';
                button.title = 'Показати';
            } else {
                button.querySelector('img').src = 'img/hide.png';
                button.title = 'Сховати';
            }
        });
    };

    // Функція для перемикання видимості в зворотньому порядку
    const toggleVisibilityReverse = (button, container) => {
        button.addEventListener('click', () => {
            container.classList.toggle('container-invisible-reverse');
            if (container.classList.contains('container-invisible-reverse')) {
                button.querySelector('img').src = 'img/hide.png';
                button.title = 'Показати';
            } else {
                button.querySelector('img').src = 'img/show.png';
                button.title = 'Сховати';
            }
        });
    };

    // Перемикаємо кнопки та контейнери у поколі бабусь та дідусів
    const hideButtons = document.querySelectorAll('.grandparents .hide');
    const showButtons = document.querySelectorAll('.grandparents .show');
    const uncleAntContainers = document.querySelectorAll('.grandparents .uncle-ant');

    hideButtons.forEach((button, index) => {
        toggleVisibility(button, uncleAntContainers[index]);
    });

    showButtons.forEach((button, index) => {
        toggleVisibility(button, uncleAntContainers[index]);
    });

    const reverseShowButtons = document.querySelectorAll('.grandparents .show-reverse');
    const reverseHideButtons = document.querySelectorAll('.grandparents .hide-reverse');
    const uncleAntReverseContainers = document.querySelectorAll('.grandparents .uncle-ant.container-invisible-reverse');

    reverseShowButtons.forEach((button, index) => {
        toggleVisibilityReverse(button, uncleAntReverseContainers[index]);
    });

    reverseHideButtons.forEach((button, index) => {
        toggleVisibilityReverse(button, uncleAntReverseContainers[index]);
    });

    // Перемикаємо кнопки та контейнери у поколі батьків
    const parentHideButtons = document.querySelectorAll('.parents .hide');
    const parentShowButtons = document.querySelectorAll('.parents .show');
    const parentUncleAntContainers = document.querySelectorAll('.parents .uncle-ant');

    parentHideButtons.forEach((button, index) => {
        toggleVisibility(button, parentUncleAntContainers[index]);
    });

    parentShowButtons.forEach((button, index) => {
        toggleVisibility(button, parentUncleAntContainers[index]);
    });

    const parentReverseShowButtons = document.querySelectorAll('.parents .show-reverse');
    const parentReverseHideButtons = document.querySelectorAll('.parents .hide-reverse');
    const parentUncleAntReverseContainers = document.querySelectorAll('.parents .uncle-ant.container-invisible-reverse');

    parentReverseShowButtons.forEach((button, index) => {
        toggleVisibilityReverse(button, parentUncleAntReverseContainers[index]);
    });

    parentReverseHideButtons.forEach((button, index) => {
        toggleVisibilityReverse(button, parentUncleAntReverseContainers[index]);
    });
});