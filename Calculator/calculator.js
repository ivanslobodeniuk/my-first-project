let a = ''; // перше число
let b = ''; // друге число
let sign = ''; // знак
let finish = false;
let sqrt = false; // індикатор для квадратного кореня

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']; // масив з кнопками
const action = ['-', '+', '*', '/', '%', '√', '+/-']; // масив зі знаками операцій
const out = document.querySelector('.calc-screen p'); // виводимо операції в тег <p>0</>

function clearAll() { // функція "стерти все"
    a = '';
    b = '';
    sign = '';
    finish = false;
    sqrt = false;
    out.textContent = '0';
}

function trimOutput(value) {
    if (value.length > 9) {
        value = parseFloat(value).toPrecision(9);
    }
    return value;
}

document.querySelector('.ac').onclick = clearAll; // присвоюємо функцію "стерти все" кнопці 'ac'

document.querySelector('.buttons').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('ac')) return;
    const key = event.target.textContent;
    if (digit.includes(key)) { // якщо масив(digit) має ключ - то
        if (b === '' && sign === '') { // якщо (число 'b' строго дорівнює пустому рядку і знак також) - то
            a += key; // до числа 'а' додаємо ключ із масива(digit)
            if (sqrt) {
                out.textContent = trimOutput('√' + a);
            } else {
                out.textContent = trimOutput(a); // число 'а' виводимо
            }
        } else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = trimOutput(a + sign + b);
        } else {
            b += key;
            out.textContent = trimOutput(a + sign + b);
        }
        return;
    }
    if (action.includes(key)) {
        if (key === '√') {
            sqrt = true;
            a = '';
            out.textContent = trimOutput('√');
        } else if (key === '%') {
            if (b === '') {
                b = (a / 100).toString();
                out.textContent = trimOutput(a + sign + b);
            } else {
                b = ((a * b) / 100).toString();
                out.textContent = trimOutput(a + sign + b);
            }
        } else if (key === '+/-') {
            if (b === '') {
                a = (a * -1).toString();
                out.textContent = trimOutput(a);
            } else {
                b = (b * -1).toString();
                out.textContent = trimOutput(a + sign + b);
            }
        } else {
            sign = key;
            out.textContent = trimOutput(a + sign);
        }
        return;
    }
    if (key === '=') {
        if (b === '') b = a;
        if (sqrt) {
            a = Math.sqrt(a).toString();
            sqrt = false;
        }
        switch (sign) {
            case '+':
                a = (+a + +b).toString();
                break;
            case '-':
                a = (a - b).toString();
                break;
            case '*':
                a = (a * b).toString();
                break;
            case '/':
                if (b === '0') {
                    out.textContent = 'Error';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = (a / b).toString();
                break;
        }
        
        // a = parseFloat(a).toFixed(4).toString();
        finish = true;
        out.textContent = trimOutput(a);
    }
}