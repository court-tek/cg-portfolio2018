const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navLink = document.querySelectorAll(".nav-link");
const navItems = document.querySelectorAll(".nav-item");

// hamburger menu
let showMenu = false;
menuBtn.addEventListener("click", () => {
    if (!showMenu) {
        menuBtn.classList.add("openIt");
        // menu.ClassList.add('show');
        // menuNav.ClassList.add('show');
        // menuBranding.ClassList.add('show');
        // navItems.forEach(item => item.ClassList.add('show'));

        showMenu = true;
    } else {
        menuBtn.classList.remove("openIt");
        // m44321enu.ClassList.remove('show');
        // menuNav.ClassList.remove('show');
        // menuBranding.ClassList.remove('show');
        // navItems.forEach(item => item.ClassList.remove('show'));

        showMenu = false;
    }
});
// hamburger menu ends
