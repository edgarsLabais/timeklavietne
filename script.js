
// script.js

// Function to get a cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

// Function to load preferences
function loadPreferences() {
    var urlParams = new URLSearchParams(window.location.search);
    var isGuest = urlParams.get('guest');

    if (isGuest) {
        document.body.style.backgroundColor = 'gray';
        document.getElementById("welcomeMessage").textContent = "Sveicināts, Viesi!";
    } else {
        var name = getCookie("name") || "Viesi";
        var surname = getCookie("surname") || "";
        var color = getCookie("color") || "white";

        document.body.style.backgroundColor = color;
        document.getElementById("welcomeMessage").textContent = "Sveicināts, " + name + " " + surname + "!";
    }
}
