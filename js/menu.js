// створюємо картки Меню
let allPizza_menu = [
    {
        foto: "01.svg",
        name: "Lorem ipsum1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
        price: "120 грн"
    },
    {
        foto: "2.svg",
        name: "Lorem ipsum2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
        price: "102 грн",
    },
    {
        foto: "3.svg",
        name: "Lorem ipsum3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
        price: "125 грн",
    },
    {
        foto: "4.svg",
        name: "Lorem ipsum4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
        price: "124 грн",
    },
    {
        foto: "5.svg",
        name: "Lorem ipsum5",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
        price: "150 грн",
    },
    {
        foto: "6.svg",
        name: "Lorem ipsum6",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
        price: "160 грн",
    },
    {
        foto: "7.svg",
        name: "Lorem ipsum7",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
        price: "170 грн",
    },
    {
        foto: "8.svg",
        name: "Lorem ipsum8",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
        price: "180 грн",
    },
    {
        foto: "9.svg",
        name: "Lorem ipsum9",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
        price: "190 грн",
    },
    {
        foto: "10.svg",
        name: "Lorem ipsum10",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
        price: "1020 грн",
    },
    {
        foto: "11.svg",
        name: "Lorem ipsum11",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
        price: "120 грн"
    },
    {
        foto: "12.svg",
        name: "Lorem ipsum12",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
        price: "102 грн",
    },
    {
        foto: "13.svg",
        name: "Lorem ipsum13",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
        price: "125 грн",
    },
    {
        foto: "14.svg",
        name: "Lorem ipsum14",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
        price: "241 грн",
    },
    {
        foto: "15.svg",
        name: "Lorem ipsum15",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
        price: "501 грн",
    },
    {
        foto: "16.svg",
        name: "Lorem ipsum16",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
        price: "111 грн",
    },
    {
        foto: "17.svg",
        name: "Lorem ipsum17",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
        price: "170 грн",
    },
    {
        foto: "18.svg",
        name: "Lorem ipsum18",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
        price: "118 грн",
    },
    {
        foto: "19.svg",
        name: "Lorem ipsum19",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
        price: "190 грн",
    },
    {
        foto: "20.svg",
        name: "Lorem ipsum20",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
        price: "200 грн",
    },
]

let menuList = document.querySelector(".menu_list");
let prevMenu = document.querySelector("#prevMenu");
let nextMenu = document.querySelector("#nextMenu");
let minimumPage = document.querySelector("#minimumPage");
let maximumPage = document.querySelector("#maximumPage");
let page = 1;
let start = 0;
let end = 8;
let minimum = 1;
let maximum = findMaximum();

minimumPage.innerHTML = minimum;
maximumPage.innerHTML = maximum;

function findMaximum() {
        let maximumNumber = allPizza_menu.length / 9;

        if (Number.isInteger(maximumNumber)) {
            return maximumNumber;
        } else {
            return Math.floor(maximumNumber) + 1;
        }
    }

function createList(start, end){
    menuList.innerHTML = "";
    let showMenuList = allPizza_menu.slice(start, end + 1);
    showMenuList.forEach(list => {
        let pizzaInfo = document.createElement("div");
        pizzaInfo.className = "pizza_info";
        pizzaInfo.innerHTML = `
            <img src="./foto_pizza/${list.foto}" alt="Foto This Pizza">
            <h2>${list.name}</h2>
            <p>${list.description}</p>
            <h3>${list.price}</h2>
            <button><a href="pizzaDay_formblock.html">BUY</a></button>  
        `
        menuList.append(pizzaInfo);
    })
}

createList(start, end);

nextMenu.onclick = function () {
        if (page >= maximum) {
            return;
        } else {
            page++;
            start += 9;
            end += 9;
            createList(start, end)
            minimumPage.innerHTML = page;
        }
    }

prevMenu.onclick = function () {
        if (page <= 1) {
            return;
        } else {
            page--;
            start -= 9;
            end -= 9;
            createList(start, end)
            minimumPage.innerHTML = page;
        }
    }