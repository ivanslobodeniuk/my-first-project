const showOrHideForm = () => {
    const button = document.getElementById('form_register');
    const form = document.getElementById('register-form');
    const isFormVisible = form.style.display === 'block';

    form.style.display = isFormVisible ? 'none' : 'block';
    button.innerText = isFormVisible ? 'Показати налаштування' : 'Сховати налаштування';
};

// Чекбокс - показати орбіти

const orbitCheckbox = document.getElementById("orbitCheckbox");
const container = document.querySelector(".container");
const elements = container.querySelectorAll("div");

orbitCheckbox.addEventListener("click", () => {
    const borderWidth = orbitCheckbox.checked ? "0.1em" : "0.0em";
    elements.forEach(element => {
        element.style.borderWidth = borderWidth;
    });
});

// Чекбокс - зменшити швидкість супутників

const speedSatellitesCheckbox = document.getElementById("speedSatellitesCheckbox");
const satellites = document.querySelectorAll('.earth div, .mars div, .jupiter div, .saturn div, .uranus div, .neptune div');

speedSatellitesCheckbox.addEventListener("click", () => {
    if (speedSatellitesCheckbox.checked) {
        satellites.forEach(satellite => {
            const currentAnimationDuration = parseFloat(getComputedStyle(satellite).animationDuration);
            satellite.style.animationDuration = currentAnimationDuration * 10 + 's';
        });
    } else {
        satellites.forEach(satellite => {
            satellite.style.animationDuration = '';
        });
    }
});












