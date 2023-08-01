let clockActivate = false;
let cronometerActivate = false;
let clockInterval;
let stopwatchInterval;

function displayTime() {
    const cronosDiv = document.getElementById("cronos");
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    cronosDiv.innerText = `${hours}:${minutes}:${seconds}`;
}

function displayHours() {
    clockActivate = true;
    cronometerActivate = false;
    clearInterval(clockInterval);
    const cronosDiv = document.getElementById("cronos");
    cronosDiv.innerHTML = "";

    const hour = new Date().getHours().toString().padStart(2,"0");
    const minute = new Date().getMinutes().toString().padStart(2,"0");
    const second = new Date().getSeconds().toString().padStart(2,"0");
    document.getElementById("cronos").innerText = hour + ":" + minute + ":" + second;

    for (let i = 1; i <= 12; i++) {
        const hourMarker = document.createElement("div");
        hourMarker.classList.add("hour-marker");
        const angle = (i - 3) * 30;
        hourMarker.style.transform = `rotate(${angle}deg)`;
        cronosDiv.appendChild(hourMarker);
    }
    if (cronometerActivate == true && cronometerActivate == false) {
        stopwatchInterval = setInterval(displayHours, 1000);
    }
}

function resetClock() {
    const cronosDiv = document.getElementById("cronos");
    cronosDiv.innerText = "00:00:00";
    cronometerActivate = true;
    clockActivate = false;
    clearInterval(clockInterval);
    clearInterval(stopwatchInterval);
}

document.getElementById("btn-clock").addEventListener("click", () => {
    displayHours();
    if (clockActivate == true) {
        clearInterval(stopwatchInterval);
        clockInterval = setInterval(displayTime, 1000);
    }
});
document.getElementById("btn-stopwatch").addEventListener("click", () => {
    resetClock();
});