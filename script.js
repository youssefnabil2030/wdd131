// JavaScript for W03 Country Page Assignment

document.addEventListener("DOMContentLoaded", () => {
    updateFooter();
    displayWindChill();
});

function updateFooter() {
    const footer = document.querySelector("footer");
    const year = new Date().getFullYear();
    const lastModified = document.lastModified;
    footer.innerHTML = `&copy; ${year} | Last Modified: ${lastModified}`;
}

function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2);
    } else {
        return "N/A";
    }
}

function displayWindChill() {
    const temp = 5; // Example static temperature in Celsius
    const windSpeed = 10; // Example static wind speed in km/h
    const windChill = calculateWindChill(temp, windSpeed);
    document.getElementById("windChill").textContent = `Wind Chill: ${windChill} °C`;
}
