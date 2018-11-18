const header = document.querySelector("#head");
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("#menu2");
const menuNav = document.querySelector("#other");
const otherNav = document.querySelector("#other");
const menuBranding = document.querySelector(".menu-branding");
const navLink = document.querySelectorAll(".nav-link");
const navItems = document.querySelectorAll(".nav-item");
const frontLinks = document.querySelector(".links");
const stripper = document.querySelector("#stripper");
const uniqueLink = document.querySelector(".current");
const menuList = [
  { id: 1, link: 'Home', linkTags: "/" },
  { id: 2, link: 'Skills', linkTags: "skills" },
  { id: 3, link: 'Projects', linkTags: "projects" },
  { id: 4, link: 'Experience', linkTags: "experience" }
];

// CSS Spinner
if (window.location.href === 'http://localhost:8000/experience') {
    promise = new Promise((resovle) => {
      setTimeout(() => {
        resovle();
      }, 3000);
    });

    promise
      .then(() => stripper.classList.remove('spinner'))
      .then(() => stripper.innerHTML = `<h1 class="NoWork">${'No Work Experience Found'}</h1>`)
// Spinner Ends
} else {
  console.log('Don\'t promise anything!');
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
    text2 += `<li key="${menuList[i].id}" class="nav-item"><a href="${menuList[i].linkTags}" class="nav-link current">${menuList[i].link}</a></li>`
  }
  // randon style
    menuNav.innerHTML = text2;
    uniqueLink.style.color = 'yellow';
  }
// Header Ends

// hamburger menu
if (window.location.href === 'http://localhost:8000/') {
  console.log('no event listener');
} else {
  let showMenu = false;
  menuBtn.addEventListener("click", () => {
      if (!showMenu) {
          menuBtn.classList.add("openIt");
          menu.classList.add('show');
          otherNav.classList.add('show');
          menuBranding.classList.add('show');
          navItems.forEach(item => item.classList.add('show'));
          showMenu = true;
          console.log(showMenu);
      } else {
          menuBtn.classList.remove("openIt");
          menu.classList.remove('show');
          otherNav.classList.remove('show');
          menuBranding.classList.remove('show');
          navItems.forEach(item => item.classList.remove('show'));
          showMenu = false;
          console.log(showMenu)
      }
  });
}
// hamburger menu ends
