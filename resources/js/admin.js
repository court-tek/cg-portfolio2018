const header = document.querySelector("#head");
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("#menu2");
const menuBranding = document.querySelector(".menu-branding");
const navLink = document.querySelectorAll(".nav-link");
const navItems = document.querySelectorAll(".nav-item");
const frontLinks = document.querySelector(".links");
const stripper = document.querySelector("#stripper");
const menuList = [
    { id: 2, link: "Skills", linkTags: "skills" },
    { id: 3, link: "Projects", linkTags: "projects" },
    { id: 4, link: "Short Bio", linkTags: "short-bio" }
];

// CSS Spinner
// if (window.location.href === "http://localhost:8000/short-bio") {
//     promise = new Promise(resovle => {
//         setTimeout(() => {
//             resovle();
//         }, 3000);
//     });
//
//     promise
//         .then(() => stripper.classList.remove("spinner"))
//         .then(() =>(stripper.innerHTML =
//           `  `
//           )
//         );
//     // Spinner Ends
// } else {
//     console.log("Don't promise anything!");
// }

// hamburger menu
if (window.location.href === "http://localhost:8000/" || window.location.href === "https://courtportfolio2018.herokuapp.com/") {
    console.log("no event listener");
} else {
    let showMenu = false;
    menuBtn.addEventListener("click", () => {
        if (!showMenu) {
            menuBtn.classList.add("openIt");
            menu.classList.add("show");
            menuBranding.classList.add("show");
            navItems.forEach(item => item.classList.add("show"));
            showMenu = true;
            console.log(showMenu);
        } else {
            menuBtn.classList.remove("openIt");
            menu.classList.remove("show");
            menuBranding.classList.remove("show");
            navItems.forEach(item => item.classList.remove("show"));
            showMenu = false;
            console.log(showMenu);
        }
    });
}
// hamburger menu ends

// Header
if (window.location.href === "http://localhost:8000/" || window.location.href === "https://courtportfolio2018.herokuapp.com/") {
    let text1 = "";
    for (var i = 0; i < menuList.length; i++) {
        text1 += `<a key="${menuList[i].id}" href="${menuList[i].linkTags}">${
            menuList[i].link
        }</a>`;
    }
    frontLinks.innerHTML = text1;
} else {
    console.log("hello");
    // let text2 = ''
    // for (var i = 0; i < menuList.length; i++) {
    //   text2 += `<li class="nav-item"><a class="nav-link" key="${menuList[i].id}" href="${menuList[i].linkTags}">${menuList[i].link}</a></li>`
    // }
    // menuBranding.innerHTML = text2;
}
// Header Ends
