// Handle cookies consent
document.addEventListener("DOMContentLoaded", () => {
    const cookieBanner = document.createElement("div");
    cookieBanner.id = "cookieBanner";
    cookieBanner.style.position = "fixed";
    cookieBanner.style.bottom = "0";
    cookieBanner.style.left = "0";
    cookieBanner.style.width = "100%";
    cookieBanner.style.backgroundColor = "#333";
    cookieBanner.style.color = "#fff";
    cookieBanner.style.padding = "15px";
    cookieBanner.style.textAlign = "center";
    cookieBanner.style.zIndex = "1000";

    cookieBanner.innerHTML = `
        <p>We use cookies to improve your experience. By continuing to browse, you agree to our use of cookies. 
        <button id="acceptCookies" style="margin-left: 10px; padding: 5px 10px; background-color: #0077cc; color: #fff; border: none; border-radius: 5px; cursor: pointer;">Accept</button>
        </p>
    `;

    document.body.appendChild(cookieBanner);

    const acceptCookiesButton = document.getElementById("acceptCookies");
    acceptCookiesButton.addEventListener("click", () => {
        setCookie("cookiesAccepted", "true", 365);
        cookieBanner.style.display = "none";
    });

    // Check if cookies are already accepted
    if (getCookie("cookiesAccepted") === "true") {
        cookieBanner.style.display = "none";
    }
});

// Function to set a cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get a cookie
function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        if (cookie[0] === name) {
            return cookie[1];
        }
    }
    return "";
}