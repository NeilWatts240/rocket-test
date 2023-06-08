const popup = () => {
  const headerMenu = document.querySelector(".header-menu");
  const close = document.querySelector(".close");
  const nav = document.querySelector("nav");

  headerMenu.addEventListener("click", () => {
    nav.style.display = "block";
    close.style.display = "block";
    headerMenu.style.display = "none";
  });
  close.addEventListener("click", () => {
    nav.style.display = "none";
    close.style.display = "none";
    headerMenu.style.display = "block";
  });
};

popup();
