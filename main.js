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
    const miliseconds = now.getMilliseconds().toString().padStart(3, "0");
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
    document.getElementById("btn-clock").style.display = "inline-block";
    clockInterval = setInterval(displayTime, 1000);
    document.querySelector("h2").style.display = "block";
}

document.getElementById("btn-clock").addEventListener("click", () => {
    displayHours();
});