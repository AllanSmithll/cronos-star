function displayHours() {
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
}

displayHours();
setInterval(displayHours, 1000);
