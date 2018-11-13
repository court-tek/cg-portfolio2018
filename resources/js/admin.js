const header = document.querySelector(".head");
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navLink = document.querySelectorAll(".nav-link");
const navItems = document.querySelectorAll(".nav-item");
const frontLinks = document.querySelector(".links");
const stripper = document.querySelector("#stripper");
const menuList = [
  { id: 1, link: 'Home', linkTags: "/" },
  { id: 2, link: 'Skills', linkTags: "skills" },
  { id: 3, link: 'Projects', linkTags: "projects"},
  { id: 4, link: 'Experience', linkTags: "experience" }
];

// CSS Spinner
if (window.location.href === 'http://localhost:8000/experience') {
    promise = new Promise((resovle) => {
      setTimeout(() => {
        resovle();
      }, 4000);
    });

    promise
      .then(() => stripper.classList.remove('spinner'))
      .then(() => stripper.innerHTML = `<h1 class="NoWork">${'No Work Experience Found'}</h1>`)
// Spinner Ends
} else {
  console.log('Do Nothing!');
}

// Header
if (window.location.href === 'http://localhost:8000/') {
  let text1 = ''
  for (var i = 0; i < menuList.length; i++) {
    text1 += `<a key="${menuList[i].id}" href="${menuList[i].linkTags}">${menuList[i].link}</a>`
  }
  frontLinks.innerHTML = text1;
} else {
  console.log('we are here!');
  let text2 = ''
  for (var i = 0; i < menuList.length; i++) {
    text2 += `<li key="${menuList[i].id}" class="nav-item"><a href="${menuList[i].linkTags}" class="nav-link">${menuList[i].link}</a></li>`
  }
    menuNav.innerHTML = text2;
  }

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
