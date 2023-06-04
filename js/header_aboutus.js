// встановлюємо обробник на клік list
let listMenu = document.querySelector("#list");
let loadNav = document.querySelector(".load_nav_mob");
let aboutus = document.querySelector(".aboutus")
listMenu.addEventListener("click", function() {
    if (listMenu.getAttribute("src") === "./charm_menu-hamburger.svg") {
        listMenu.setAttribute("src", "./charm_menu-hamburger_alone.svg");
        loadNav.style.display = "block";
        aboutus.style.display = "none";
    } else if (listMenu.getAttribute("src") === "./charm_menu-hamburger_alone.svg") {
        listMenu.setAttribute("src", "./charm_menu-hamburger.svg");
        loadNav.style.display = "none";
        aboutus.style.display = "grid";
    }
});
// встановлюємо обробник на клік language
let language = document.querySelector("#language");
let changeLang = document.querySelector(".lang");
language.addEventListener("click", function() {
    if (changeLang.style.display === "none"){
        changeLang.style.display = "grid";
        changeLang.style.opacity = "1";
    }
    else {
        changeLang.style.display = "none"
    }
})