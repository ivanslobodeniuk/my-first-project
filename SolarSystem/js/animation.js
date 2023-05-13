let showOrHideForm = function () {
    let button = document.getElementById('form_register');
    let form = document.getElementById('register-form');
    if (form.style.display === 'block') {
        form.style.display = 'none';
        button.innerText = 'Показати налаштування';
    } else {
        form.style.display = 'block';
        button.innerText = 'Сховати налаштування';
    }
}

let orbitCheckbox = document.getElementById("orbitCheckbox");
let elements = document.querySelectorAll(".mercury, .venus, .earth, .moon, .mars, .phobos, .deimos, .jupiter, .io, .europa, .ganymede, .callisto, .saturn, .titan, .rhea, .iapetus, .dione, .tethys, .enceladus, .mimas, .uranus, .titania, .oberon, .umbriel, .ariel, .miranda, .neptune, .triton, .proteus");

orbitCheckbox.addEventListener("click", function () {
    if (orbitCheckbox.checked) {
        // Якщо прапорець відмічений, застосовуємо новий стиль
        elements.forEach(function (element) {
            element.style.borderWidth = "0.1em";
        });
    } else {
        // Якщо прапорець не відмічений, скидаємо стиль
        elements.forEach(function (element) {
            element.style.borderWidth = "0.0em";
        });
    }
});

let speedSatellitesCheckbox = document.getElementById("speedSatellitesCheckbox");
let satellites = document.querySelectorAll(".moon, .phobos, .deimos, .io, .europa, .ganymede, .callisto, .titan, .rhea, .iapetus, .dione, .tethys, .enceladus, .mimas, .titania, .oberon, .umbriel, .ariel, .miranda, .triton, .proteus");

let initialAnimationSpeeds = [];

// Зберігаємо початкову швидкість анімації для кожного елемента
satellites.forEach(function(element) {
    initialAnimationSpeeds.push(getComputedStyle(element).animationDuration);
});

speedSatellitesCheckbox.addEventListener("click", function() {
    if (speedSatellitesCheckbox.checked) {
        satellites.forEach(function(element, index) {
            // Змінюємо швидкість кожного елемента
            let orbitSpeed = 1.0 + (index * 0.1); // Розрахунок швидкості обертання для кожного елемента
            element.style.animationDuration = `${orbitSpeed}s`;
            // Додайте інші зміни стилю, які вам потрібні
        });
    } else {
        satellites.forEach(function(element, index) {
            // Повертаємо початкову швидкість анімації для кожного елемента
            element.style.animationDuration = initialAnimationSpeeds[index];
            // Додайте інші зміни стилю, які вам потрібні для початкового стану
        });
    }
});









