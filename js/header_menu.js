// встановлюємо обробник на клік list
let listMenu = document.querySelector("#list");
let loadNav = document.querySelector(".load_nav_mob");
let menu_bl = document.querySelector(".menu_page_block")
listMenu.addEventListener("click", function() {
    if (listMenu.getAttribute("src") === "./charm_menu-hamburger.svg") {
        listMenu.setAttribute("src", "./charm_menu-hamburger_alone.svg");
        loadNav.style.display = "block";
        menu_bl.style.display = "none";
    } else if (listMenu.getAttribute("src") === "./charm_menu-hamburger_alone.svg") {
        listMenu.setAttribute("src", "./charm_menu-hamburger.svg");
        loadNav.style.display = "none";
        menu_bl.style.display = "grid";
    }
});
// встановлюємо обробник на клік language
let language = document.querySelector("#language");
let changeLang = document.querySelector(".lang");
language.addEventListener("click", function() {
    if (changeLang.style.display === "none"){
        changeLang.style.display = "grid"
    }
    else {
        changeLang.style.display = "none"
    }
})