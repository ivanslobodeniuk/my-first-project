let showOrHideForm = function () {
    let button = document.getElementById('form_register');
    let form = document.getElementById('register-form');
    if (form.style.display === 'block') {
        form.style.display = 'none';
        button.innerText = 'Show form register';
    } else {
        form.style.display = 'block';
        button.innerText = 'Hide form register';
    }
}

// let i = 0
// while (i<3) alert(i++)

// let i = 0
// do {
//     alert (i-5)
//     i++
// } while (i<5)

// let i=0
// for (; i<3;) {
//     alert(i++)
// }

// for (; ;) {}
