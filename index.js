const dropdown = document.getElementById("dropdown");
const about = document.getElementById("newsroom-link");
console.log(dropdown);

if (dropdown.style.display === "block") {
  about.classList.add("on");
} else {
  about.classList.add("on");
}
about.addEventListener("click", () => {
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
    about.classList.add("on");
    console.log(ok);
  } else {
    dropdown.style.display = "block";
    about.classList.add("on");
    console.log(ok);
  }
});

const dropdownHeaders = document.querySelectorAll(".dropdown-header");
let activeMenu = null;

dropdownHeaders.forEach((header) => {
  header.addEventListener("click", function () {
    const menuTitle = this.querySelector(".heder-drop").innerText;
    const submenu = this.nextElementSibling;

    if (activeMenu === menuTitle) {
      activeMenu = null;
      this.classList.remove("active");
      submenu.classList.remove("visible");
    } else {
      if (activeMenu) {
        const activeHeader = document.querySelector(".dropdown-header.active");
        const activeSubmenu = activeHeader.nextElementSibling;

        activeHeader.classList.remove("active");
        activeSubmenu.classList.remove("visible");
      }
      activeMenu = menuTitle;
      this.classList.add("active");
      submenu.classList.add("visible");
    }
  });
});

const submenuItems = document.querySelectorAll(".submenu p");
submenuItems.forEach((item) => {
  item.addEventListener("click", function () {
    const link = this.getAttribute("data-link");
    const currentPath = window.location.pathname;

    if (currentPath === link) {
      window.location.reload();
    } else {
      window.location.href = link;
    }
  });
});
