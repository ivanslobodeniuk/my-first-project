function convertMillionKilometersToLightYears(millionKilometers) {
    const LIGHT_YEAR_IN_KILOMETERS = 9.461e+12; // 9 460 730 472 580.8 km
    const kilometers = millionKilometers * 1000000;
    const lightYears = kilometers / LIGHT_YEAR_IN_KILOMETERS;
    const lightDays = Math.floor((lightYears % 1) * 365);
    const lightHours = Math.floor((lightDays % 1) * 24);
    const lightMinutes = Math.floor((lightHours % 1) * 60);
    const lightSeconds = Math.floor((lightMinutes % 1) * 60);

    // Convert remaining kilometers to light seconds
    const remainingKilometers = kilometers % LIGHT_YEAR_IN_KILOMETERS;
    const lightSecondsFromRemaining = Math.round(
        (remainingKilometers / 299792.458) * 100
    ) / 100;

    // Convert remaining light seconds to light days, hours, and minutes
    const remainingSeconds = Math.floor(
        (lightSeconds + lightSecondsFromRemaining) % 60);
    const remainingMinutes = Math.floor(
        ((lightSeconds + lightSecondsFromRemaining) / 60) % 60);
    const remainingHours = Math.floor(
        ((lightSeconds + lightSecondsFromRemaining) / (60 * 60)) % 24);
    const remainingDays = Math.floor(
        ((lightSeconds + lightSecondsFromRemaining) / (60 * 60 * 24)) % 365.25);

    return `${Math.floor(lightYears)} св. роки, ${remainingDays} св. дні, ${remainingHours} св. години, ${remainingMinutes} св. хвилини, ${remainingSeconds} св. секунди`;
}

const millionKilometersInput = document.getElementById("million-kilometers-input");
const resultOutput = document.getElementById("result-output");
const convertButton = document.getElementById("convert-button");

convertButton.addEventListener("click", () => {
    const millionKilometers = Number(millionKilometersInput.value);
    resultOutput.value = convertMillionKilometersToLightYears(millionKilometers);
});


// calculation of distances to planets in light time
const output = document.getElementById("output");
const distances = { // 1 a.u. = 149597870,7 km
    mercury: 57.909100,
    venus: 108.942110,
    earth: 149.598260,
    mars: 227.939100,
    ceres: 413.832590,
    jupiter: 778.547200,
    saturn: 1433.449370,
    uranus: 2876.679080,
    neptune: 4503.443660,
    pluto: 5906.380000,
    haumea: 6452.455360,
    makemake: 6783.365850,
    eris: 10178.639122,
    sedna: 80932.448050
};

for (const planet in distances) {
    const lightYears = convertMillionKilometersToLightYears(distances[planet]);
    output.innerHTML += `<strong>${planet}: ${lightYears}<br><br></strong>`;
}