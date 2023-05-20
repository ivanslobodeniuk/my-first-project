// кнопки next/preview

// Отримання всіх кнопок з класом "next" і "next1"
const nextButtons = document.querySelectorAll('.next, .next1');

// Отримання всіх кнопок з класом "preview" і "preview1"
const previewButtons = document.querySelectorAll('.preview, .preview1');

// Перевірка наявності кнопок з класом "next" або "next1"
if (nextButtons.length > 0) {
    // Додавання обробника подій для кожної кнопки
    nextButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Знаходження батьківського елемента з класом "container" або "container1"
            const container = button.closest('.container, .container1');

            // Знаходження наступного сусіднього елемента з класом "container-invisible" або "container-invisible1"
            const containerInvisible = container.nextElementSibling;

            // Перевірка наявності наступного сусіднього елемента з класом "container-invisible" або "container-invisible1"
            if (containerInvisible.classList.contains('container-invisible') || containerInvisible.classList.contains('container-invisible1')) {
                // Приховуємо вміст поточного елемента
                container.style.display = 'none';

                // Показуємо вміст наступного сусіднього елемента
                containerInvisible.style.display = 'block';
            }
        });
    });
}

// Перевірка наявності кнопок з класом "preview" або "preview1"
if (previewButtons.length > 0) {
    // Додавання обробника подій для кожної кнопки
    previewButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Знаходження батьківського елемента з класом "container-invisible" або "container-invisible1"
            const containerInvisible = button.closest('.container-invisible, .container-invisible1');

            // Знаходження попереднього сусіднього елемента з класом "container" або "container1"
            const container = containerInvisible.previousElementSibling;

            // Перевірка наявності попереднього сусіднього елемента з класом "container" або "container1"
            if (container.classList.contains('container') || container.classList.contains('container1')) {
                // Приховуємо вміст поточного елемента
                containerInvisible.style.display = 'none';

                // Показуємо вміст попереднього сусіднього елемента
                container.style.display = 'block';
            }
        });
    });
}

// Густина

const data = {
    labels: ['mercury', 'venus', 'earth', 'mars', 'ceres', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto', 'haumea', 'makemake', 'eris'],
    datasets: [{
        label: 'екваторіальний радіус у км',
        data: [4879, 12104, 12756, 6792, 940, 142984, 120536, 51118, 49528, 2370, 1436, 1434, 1163],
        backgroundColor: [
            'rgba(54, 255, 135, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)'
        ],
        borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)'
        ]
    }]
};

const config = {
    type: 'bar', // line, bar, radar, doughnut, pie, polarArea
    data: data,
    options: {}
};
new Chart(
    document.getElementById('myChart'),
    config
);

// Екваторіальний радіус

const data1 = {
        labels: ['sun', 'mercury', 'venus', 'earth', 'mars', 'ceres', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto', 'haumea', 'makemake', 'eris'],
        datasets: [{
            label: 'густина у г/см³',
            data: [1.408, 5.427, 5.243, 5.515, 3.933, 2.16, 1.326, 0.687, 1.27, 1.638, 1.88, 1.9, 1.6, 2.52],
        backgroundColor: [
            'rgba(54, 255, 135, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)'
        ],
        borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)'
        ]
    }]
};

const config1 = {
    type: 'bar', // line, bar, radar, doughnut, pie, polarArea
    data: data1,
    options: {}
};
new Chart(
    document.getElementById('myChart1'),
    config1
);

// Маса

const data2 = {
    labels: ['sun', 'mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'],
    datasets: [{
        label: 'маса у земних масах',
        data: [333000, 0.055, 0.815, 1, 0.107, 317.8, 95.2, 14.5, 17.1],

        backgroundColor: [
            'rgba(255, 206, 86, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 255, 135, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)'
        ],
        borderColor: [
            'rgba(255, 206, 86, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1
    }]
};

const config2 = {
    type: 'pie', // line, bar, radar, doughnut, pie, polarArea
    data: data2,
    options: {}
};
new Chart(
    document.getElementById('myChart2'),
    config2
);

// Об'єм

const data3 = {
    labels: ['sun', 'mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'],
    datasets: [{
        label: 'об\'єм у земних об\'ємах',
        data: [1300000, 0.055, 0.866, 1, 0.151, 1321, 764, 63.1, 57.7],
        backgroundColor: [
            'rgba(255, 206, 86, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 255, 135, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)'
        ],
        borderColor: [
            'rgba(255, 206, 86, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1
    }]
};

const config3 = {
    type: 'pie', // line, bar, radar, doughnut, pie, polarArea
    data: data3,
    options: {}
};
new Chart(
    document.getElementById('myChart3'),
    config3
);

// scatter (розсіювання)

new Chart(document.getElementById('scatterChart'), {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Відстань від Сонця в млн. км і а.о.',
            data: [{
                x: 0,
                y: 0,
                name: 'Сонце',
            }, {
                x: 57.91,
                y: 0.39,
                name: 'Меркурій'
            }, {
                x: 108.2,
                y: 0.72,
                name: 'Венера'
            }, {
                x: 149.6,
                y: 1,
                name: 'Земля'
            }, {
                x: 227.9,
                y: 1.52,
                name: 'Марс'
            }, {
                x: 778.3,
                y: 5.20,
                name: 'Юпітер'
            }, {
                x: 1426.7,
                y: 9.58,
                name: 'Сатурн'
            }, {
                x: 2870.9,
                y: 19.18,
                name: 'Уран'
            }, {
                x: 4498.3,
                y: 30.07,
                name: 'Нептун'
            }],
            backgroundColor: [
                'yellow',
                'black',
                'black',
                'black',
                'black',
                'black',
                'black',
                'black',
                'black'
            ],
            // borderColor: [
            //     'black'
            // ],
            radius: [
                '3',
            ],
            hoverRadius: '3'
        }]
    },
});
