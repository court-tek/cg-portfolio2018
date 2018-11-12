const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navLink = document.querySelectorAll(".nav-link");
const navItems = document.querySelectorAll(".nav-item");
const menuList = [
  { id: 1, link: 'Home', linkTags: "/" },
  { id: 2, link: 'Skills', linkTags: "skills" },
  { id: 3, link: 'Projects', linkTags: "projects"},
  { id: 4, link: 'Experience', linkTags: "experience" }
];

// Header Links
text = ''
for (var i = 0; i < menuList.length; i++) {
  text += `<li key="${menuList[i].id}" class="nav-item"><a href="${menuList[i].linkTags}" class="nav-link">${menuList[i].link}</a></li>`
}
document.querySelector('.menu-nav').innerHTML = text;
// Header Links ends

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
