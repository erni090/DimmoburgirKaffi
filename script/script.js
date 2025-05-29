function adjustMainPadding() {
    let navbarHeight = document.querySelector("nav").offsetHeight; // Otteniamo l'altezza della navbar
    document.querySelector(".container").style.paddingTop = navbarHeight + "px"; // Impostiamo il padding-top del main
}

// Chiama la funzione al caricamento e al resize della finestra
window.addEventListener("load", adjustMainPadding);
window.addEventListener("resize", adjustMainPadding);

// Get references to the menu button and the menu list
const menuToggle = document.getElementById('menu-toggle');
const menuList = document.getElementById('menu-list');

// Toggle the visibility of the menu when the button is clicked
menuToggle.addEventListener('click', function () {
    menuList.classList.toggle('active');
});
