// Кнопка - показати/сховати налаштування

const showOrHideForm = () => { // функція відслідкує клік по кнопці, і змінить стиль для form, тому що <button onclick="return showOrHideForm();" id="form_register">
    const button = document.getElementById('form_register');
    const form = document.getElementById('register-form');
    const isFormVisible = form.style.display === 'block';

    form.style.display = isFormVisible ? 'none' : 'block'; // тут на перщому кліку isFormVisible верне false, тому що тут <div className="form" id="register-form" style="display: none">
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

// Чекбокс - збільшити швидкість для планет

const speedPlanetCheckbox = document.getElementById("speedPlanetCheckbox");
const planets = document.querySelectorAll('.mercury, .venus, .earth, .mars, .jupiter, .saturn, .uranus, .neptune');

speedPlanetCheckbox.addEventListener("click", () => {
    const animationDurationMultiplier = 10;

    if (speedPlanetCheckbox.checked) {
        planets.forEach(planet => {
            const currentAnimationDuration = parseFloat(getComputedStyle(planet).animationDuration);
            planet.style.animationDuration = currentAnimationDuration / animationDurationMultiplier + 's';
            planet.style.animationFillMode = 'forwards';
        });
    } else {
        planets.forEach(planet => {
            planet.style.animationDuration = '';
            planet.style.animationFillMode = '';
        });
    }
});

// Кнопка - зупинити/відновити анімацію

const pauseButton = document.getElementById("pauseButton");
let isAnimationPaused = false;

pauseButton.addEventListener("click", () => {
    isAnimationPaused = !isAnimationPaused; // при кожному клікові значення isAnimationPaused міняється на протилежне
    if (isAnimationPaused) {
        // Призупинити анімацію
        elements.forEach(element => {
            element.style.animationPlayState = "paused";
            pauseButton.innerText = 'Відновити анімацію';
            pauseButton.style.background = "red";
        });
    } else {
        // Продовжити анімацію
        elements.forEach(element => {
            element.style.animationPlayState = "running";
            pauseButton.innerText = 'Зупинити анімацію';
            pauseButton.style.background = "green";
        });
    }
});
