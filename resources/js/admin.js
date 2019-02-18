// window.onload=function(){
  const header = document.querySelector("#head");
  const menuBtn = document.querySelector(".menu-btn");
  const menu = document.querySelector("#menu2");
  const menuBranding = document.querySelector(".menu-branding");
  const navLink = document.querySelectorAll(".nav-link");
  const navItems = document.querySelectorAll(".nav-item");
  const frontLinks = document.querySelector(".links");
  const stripper = document.querySelector("#stripper");
  const container = document.querySelector(".container");
  const icon1 = document.querySelector(".icon1");
  const icon2 = document.querySelector(".icon2");


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


      /// project page display starts ///

      // variable for containing page info inside of an object
      let htmlEmail;

      // pathArray retrieves window location id to match the objects in swithc statement
      let pathArray = window.location.pathname.split('/');
      switch (pathArray[3]) {
        case '1':
          htmlEmail = {
            gif: 'https://raw.githubusercontent.com/court-tek/myWebFiles/master/testImage6.0.gif',
            projectName: 'Smart Watch Project',
            github: 'https://github.com/court-tek/outbackAd',
            test: 'this is email 1'
          }
          console.log(`${htmlEmail.test}`);
          break;
        case '2':
          htmlEmail = {
            gif: 'https://raw.githubusercontent.com/court-tek/myWebFiles/master/testImage6.0.gif',
            projectName: 'Outback Ad Project',
            github: "https://github.com/court-tek/outbackAd",
            test: 'this is email 2'
          }
          console.log(`${htmlEmail.test}`);
          break;
        case '3':
          htmlEmail = {
            gif: 'https://raw.githubusercontent.com/court-tek/myWebFiles/master/testImage6.0.gif',
            projectName: 'Outback Ad Project',
            github: "https://github.com/court-tek/outbackAd",
            test: 'this is email 3'
          }
          console.log(`${htmlEmail.test}`);
          break;
        case '4':
          htmlEmail = {
            gif: 'https://raw.githubusercontent.com/court-tek/myWebFiles/master/testImage6.0.gif',
            projectName: 'Outback Ad Project',
            github: "https://github.com/court-tek/outbackAd",
            test: 'this is email 4'
          }
          console.log(`${htmlEmail.test}`);
          break;
        default:
      }

      const markup = `
          <div class="project-image">
            <div class="img" style="border: 5px #fff solid; background: url(${htmlEmail.gif})"></div>
          </div>
          <h1 class="project-name">${htmlEmail.projectName}</h1>
          <div class="info">
            <div class="buttons">
              <a href="${htmlEmail.github}"><i class="fas fa-code"></i>View Code</a>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div class="technologies">
            <h3>Technologies</h3>
            <div class="icons">
                <div class="icon icon1">

                </div>
                <div class="icon icon2">

                </div>
                <div class="icon icon3">

                </div>
                <div class="icon icon4">

                </div>
            </div>
          </div>
      `
      container.innerHTML = markup;
      // Project page display ends
// }
