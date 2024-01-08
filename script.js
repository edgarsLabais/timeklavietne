
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
    var name = getCookie("name") || "Guest";
    var surname = getCookie("surname") || "";
    var color = getCookie("color") || "white";

    document.body.style.backgroundColor = color;
    document.getElementById("welcomeMessage").textContent = "Welcome, " + name + " " + surname + "!";
}

// Function to save preferences
function savePreferences() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var color = document.getElementById("color").value;

    document.cookie = "name=" + name + ";path=/";
    document.cookie = "surname=" + surname + ";path=/";
    document.cookie = "color=" + color + ";path=/";

    window.location.href = "welcome.html";
}
