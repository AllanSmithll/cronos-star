let clockInterval;

function displayTimeWithOffset(offset) {
    const cronosDiv = document.getElementById("cronos");
    const now = new Date();
    const adjustedTime = new Date(now.getTime() + offset * 3600000);
    const hours = adjustedTime.getHours().toString().padStart(2, "0");
    const minutes = adjustedTime.getMinutes().toString().padStart(2, "0");
    const seconds = adjustedTime.getSeconds().toString().padStart(2, "0");
    cronosDiv.innerText = `${hours}:${minutes}:${seconds}`;
}

function displayHours(offset) {
    clearInterval(clockInterval);
    const cronosDiv = document.getElementById("cronos");
    cronosDiv.innerHTML = "";

    displayTimeWithOffset(offset);

    for (let i = 1; i <= 12; i++) {
        const hourMarker = document.createElement("div");
        hourMarker.classList.add("hour-marker");
        const angle = (i - 3) * 30;
        hourMarker.style.transform = `rotate(${angle}deg)`;
        cronosDiv.appendChild(hourMarker);
    }
    clockInterval = setInterval(() => displayTimeWithOffset(offset), 1000);
    document.querySelector("h2").style.display = "block";
}

function selectButton(buttonId) {
    const buttons = document.getElementsByClassName("btn-primary");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("selected");
    }
    document.getElementById(buttonId).classList.add("selected");
}

document.getElementById("btn-brazil").addEventListener("click", () => {
    selectButton("btn-brazil");
    displayHours(0);
});
document.getElementById("btn-portugal").addEventListener("click", () => {
    selectButton("btn-portugal");
    displayHours(+4);
});
document.getElementById("btn-russia").addEventListener("click", () => {
    selectButton("btn-russia");
    displayHours(+6);
});
document.getElementById("btn-india").addEventListener("click", () => {
    selectButton("btn-india");
    displayHours(+8.5);
});
document.getElementById("btn-japan").addEventListener("click", () => {
    selectButton("btn-japan");
    displayHours(+12);
});
