window.onload=function(){
  const header = document.querySelector("#head");
  const menuBtn = document.querySelector(".menu-btn");
  const menu = document.querySelector("#menu2");
  const menuBranding = document.querySelector(".menu-branding");
  const navLink = document.querySelectorAll(".nav-link");
  const navItems = document.querySelectorAll(".nav-item");
  const frontLinks = document.querySelector(".links");
  const stripper = document.querySelector("#stripper");

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
