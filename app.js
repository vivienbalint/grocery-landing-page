const btn = document.querySelector(".hamburger");
const body = document.getElementById("page-wrapper");
const sidebar = document.getElementById("sidebar");
const desktopSize = window.matchMedia("(min-width: 748px)");

let img = document.createElement("img");
img.classList.add("img");
img.alt = "An image of various groceries in a bag";

const desktopImg = () => {
  img.src = "./paper-bag-desktop.webp";
  return document.getElementById("img").appendChild(img);
};

const mobileImg = () => {
  img.src = "./paper-bag-mobile.webp";
  return document.getElementById("img").appendChild(img);
};

(function () {
  desktopSize ? desktopImg() : mobileImg();
})();

desktopSize.addEventListener("change", () => {
  if (desktopSize.matches) {
    desktopImg();
    body.classList.remove("disable-scrolling");
    btn.classList.remove("is-active");
  } else {
    mobileImg();
  }
});

btn.addEventListener("click", () => {
  window.scroll(0, 0);
  if (btn.classList.contains("is-active")) {
    body.classList.remove("disable-scrolling");
    btn.classList.remove("is-active");
    sidebar.classList.remove("fly-in");
    sidebar.classList.add("fly-out");
  } else {
    body.classList.add("disable-scrolling");
    btn.classList.add("is-active");
    sidebar.classList.remove("fly-out");
    sidebar.classList.add("fly-in");
  }
});
