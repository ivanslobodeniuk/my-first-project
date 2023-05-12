const SECONDS_PER_YEAR = 31536000;
const SECONDS_PER_DAY = 86400;
const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MINUTE = 60;

function convertSecondsToDays(seconds) {
    const years = Math.floor(seconds / SECONDS_PER_YEAR);
    seconds = seconds % SECONDS_PER_YEAR;
    const days = Math.floor(seconds / SECONDS_PER_DAY);
    seconds = seconds % SECONDS_PER_DAY;
    const hours = Math.floor(seconds / SECONDS_PER_HOUR);
    seconds = seconds % SECONDS_PER_HOUR;
    const minutes = Math.floor(seconds / SECONDS_PER_MINUTE);
    seconds = seconds % SECONDS_PER_MINUTE;

    return `${years} роки, ${days} дні, ${hours} години, ${minutes} хвилини, ${seconds} секунди`;
}

const secondsInput = document.getElementById("seconds-input");
const resultOutput1 = document.getElementById("result-output1");
const convertButton1 = document.getElementById("convert-button1");

convertButton1.addEventListener("click", () => {
    const seconds = Number(secondsInput.value);
    resultOutput1.value = convertSecondsToDays(seconds);
});