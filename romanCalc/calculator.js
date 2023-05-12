// прив'язуємось до необхідних елементів в html сторінці
const firstNumber = document.getElementById('first-number'); // перший input
const secondNumber = document.getElementById('second-number'); // другий input
const resultContainer = document.getElementById('result'); //  невидимий input
const resultButton = document.getElementById('get-result'); // кнопка Calculate
const clear = document.getElementById('clear'); // кнопка Clear
const plusButton = document.getElementById('plus-button'); // кнопка +
const minusButton = document.getElementById('minus-button'); // кнопка -
const operationDivs = document.getElementsByClassName('operation'); // 2 div із класом operation

let operation = '+'; // змінна для операторів ('+' по дефауту)

const validateNumber = function(event) { // пітвердити номер: (перевірка на число)?
    event.target.style.border = ''; // скидаєм стиль рамки елемента на якому виникла подія
    let number = event.target.value; // значення поля input
    if (number === '') { // якщо значення поля input порожнє то:
        return true; // вертаємо true
    }

    let numCheck = +number; // берем значення поля input, із string робимо тип number
    let checkResult = !isNaN(numCheck) && numCheck !== 0; // перевірка результату: вертаємо перший false: numCheck не дорівнює NaN і numCheck не дорівнює 0
    if (!checkResult) {
        alert('Please enter correct number!');
        console.log('Styles before click: ', event.target.style.border);
        event.target.value = ''; // очищаємо значення поля input
        event.target.style.border = '2px solid red'; // задаєм червоний колір рамці елементу на якому виникла подія
        event.preventDefault(); // запобігти діям за умовчанням
        console.log('Styles before click: ', event.target.style.border);
    } else {
        event.target.style.border = '2px solid green'; // інакше колір рамки зелений
    }

    return true; // якщо не підходить не одна умова вертаємо true
}

const clearOperationBorder = function() { // із кнопок з операторами очищаємо стиль рамки
    for (let key in operationDivs) { // тут типу 2 div із класом operation, який ми перебираємо за допомогою циклу for (key in obj) {0:'0', 1:'1'} ?
        console.log('Поточне значення key: "' + key + '"');
        if (!isNaN(+key)) { // якщо +'0' або +'1' !== NaN ?
            operationDivs[key].style.border = ''; // то для кнопок  із класом operation скидаємо стилі для рамок
        }
    }
}

// clearOperationBorder();

firstNumber.addEventListener('keyup', (event) => { // коли відпускається кнопка над input firstNumber
    validateNumber(event); // застосовуємо функцію validateNumber
});
plusButton.addEventListener('click', (event) => { // при кліку на plusButton
    clearOperationBorder(); // застосовуємо функцію clearOperationBorder
    operation = '+'; // у змінну operation записуємо '+'
    console.log('You have clicked PLUS button!');
    console.log('Current operation is set to: "' + operation + '"');
    event.target.style.border = '2px solid green'; // задаємо колір рамки зелений для кнопки
});
minusButton.addEventListener('click', (event) => { // при кліку на minusButton
    clearOperationBorder(); // застосовуємо функцію clearOperationBorder
    operation = '-'; // у змінну operation записуємо '-'
    console.log('You have clicked MINUS button!');
    console.log('Current operation is set to: "' + operation + '"');
    event.target.style.border = '2px solid green'; // задаємо колір рамки зелений для кнопки
});
secondNumber.addEventListener('keyup', (event) => { // коли відпускається кнопка над input secondNumber
    validateNumber(event); // застосовуємо функцію validateNumber
});
resultButton.addEventListener('click', function(event) { // при кліку на resultButton
    let result = 0;
    switch (operation) { // якщо
        case '+': // нажата кнопка '+'
            result = Number(firstNumber.value) + Number(secondNumber.value); // то перше число додаєм до другого
            break;
        case '-': // нажата кнопка '-'
            result = Number(firstNumber.value) - Number(secondNumber.value); // то від першого числа віднімаємо друге
            break;
    }

    resultContainer.value = result; // в невидимий input записуємо result із кейса
    resultContainer.style.display = ''; // робимо input видимим
});
clear.addEventListener('click', function(event) { // очищаємо все крім кнопки '+'
    firstNumber.style.border = '';
    secondNumber.style.border = '';
    clearOperationBorder();
    plusButton.style.border = '2px solid green';
    operation = '+';
    firstNumber.value = '';
    secondNumber.value = '';
    resultContainer.value = '';
    resultContainer.style.display = 'none';
});


// document.addEventListener('click', (event) => {
//   console.log(event.target);
//   console.log(event.target.value);
//   const styles = window.getComputedStyle(event.target);
//   console.dir(styles);
//   console.log(event.target.style);
// }, { capture: true });

// firstNumber.addEventListener('keydown', function(event) {
//   const target = event.target;
//   const stylesBeforeClick = window.getComputedStyle(target);
//   console.log('Styles before click: ', stylesBeforeClick.border);
//   console.log('Styles before click: ', stylesBeforeClick.outline);
// });
//
// firstNumber.addEventListener('keyup', function(event) {
//   const target = event.target;
//   const stylesAfterClick = window.getComputedStyle(target);
//   console.log('Styles after click: ', stylesAfterClick.border);
//   console.log('Styles after click: ', stylesAfterClick.outline);
// });