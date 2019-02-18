window.onload=function(){
  const header = document.querySelector("#head");
  const menuBtn = document.querySelector(".menu-btn");
  const menu = document.querySelector("#menu2");
  const menuBranding = document.querySelector(".menu-branding");
  const navLink = document.querySelectorAll(".nav-link");
  const navItems = document.querySelectorAll(".nav-item");
  const frontLinks = document.querySelector(".links");
  const stripper = document.querySelector("#stripper");
  const icon1 = document.querySelector(".icon1");
  const icon2 = document.querySelector(".icon2");
  const pageInfo = {

  }
      // Menu toggle
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
      // Menu toggle ends
      // project page display
      let pathArray = window.location.pathname.split('/');
      console.log(pathArray);
      switch (pathArray[3]) {
        case '1':
          console.log('we did it');
          icon1.innerHTML = '<img src="https://raw.githubusercontent.com/court-tek/myWebFiles/master/html5.png">'
          icon2.innerHTML = '<img src="https://raw.githubusercontent.com/court-tek/myWebFiles/master/css3Logo.png">'
          break;
        case '2':
          console.log('we did it');
          icon1.innerHTML = '<img src="https://raw.githubusercontent.com/court-tek/myWebFiles/master/html5.png">'
          break;
        default:
      }
}
