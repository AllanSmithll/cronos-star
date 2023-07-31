function displayHours() {
    const cronosDiv = document.getElementById("cronos");
    cronosDiv.innerHTML = "";
    document.getElementById("cronos").innerText = hours;

    for (let i = 1; i <= 12; i++) {
        const hourMarker = document.createElement("div");
        hourMarker.classList.add("hour-marker");
        const angle = (i - 3) * 30;
        hourMarker.style.transform = `rotate(${angle}deg)`;
        cronosDiv.appendChild(hourMarker);
    }
}

displayHours();
setInterval(displayHours, 1000)