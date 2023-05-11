let a = ''; // перше число
let b = ''; // друге число
let sign = ''; // знак
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']; // масив з кнопками
const action = ['-', '+', 'x', '/']; //  масив зі знаками операцій
const out = document.querySelector('.calc-screen p'); // виводимо операції в тег <p>0</>

function clearAll () { // функція "стерти все"
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = '0';
}

document.querySelector('.ac').onclick = clearAll; // присвоюємо функцію "стерти все" кнопці 'ac'
document.querySelector('.buttons').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('ac')) return;
    out.textContent = '';
    const key = event.target.textContent;
    if (digit.includes(key)) { // якщо масив(digit) має ключ - то
        if (b === '' && sign === '') { // якщо (число 'b' строго дорівнює пустому рядку і знак також) - то
            a += key; // до числа 'а' додаемо ключ із массива(digit)
            out.textContent = a; // число 'а' виводимо
        }
        else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
        return;
    }
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        return;
    }
    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = a - b;
                break;
            case 'x':
                a = a * b;
                break;
            case '/':
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
    }
}