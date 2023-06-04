 // сторюємо слайдер

 let pizzas = [
    {
     foto: "1.svg",
     name: "Челінтаніо (570 г.)",
     price: "139 грн",
     discount: "-10%"
    },
    {
     foto: "2.svg",
     name: "Челінтаніо (570 г.)",
     price: "159 грн",
     discount: "-15%"
    },
    {
     foto: "3.svg",
     name: "Челінтаніо (570 г.)",
     price: "120 грн",
     discount: "-20%"
    }
]

let slider = document.querySelector(".slaider");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let maincont = document.querySelector(".main_sec_slaid");
let canClick = true;
slider.addEventListener("transitionend", function () {
    console.log("finished");
    canClick = true;
})
function createSlides() {
    slider.innerHTML = ""
    pizzas.forEach(pizza => {
        let contain2 = document.createElement("div");
        contain2.className = "contain2";
        let contain = document.createElement("div");
        contain.className = "contain_slide";
        let discount = document.createElement("div");
        discount.className = "discount";
        discount.innerHTML = `${pizza.discount}`
        let foto = document.createElement("div");
        foto.className = "pizza_foto";
        foto.innerHTML = `<img src="./foto_pizza/${pizza.foto}" alt="Pizza foto">`
        let nameP = document.createElement("h4");
        nameP.innerHTML = `${pizza.name}`;
        let priceP = document.createElement("p");
        priceP.innerHTML = `${pizza.price}`;

        contain.append(discount, foto, nameP, priceP)
        contain2.append(contain)
        slider.append(contain2)
    })
}

createSlides();

let slide = document.querySelectorAll(".contain2");

prev.onclick = function () {
let slideWidth = parseFloat(getComputedStyle(maincont).width);
let position = parseFloat(getComputedStyle(slider).left);
console.log(position)
let slidesNumber = slide.length;
    if (canClick) {
        if (position <= -(slidesNumber - 1) * slideWidth) {
            return;
        } else {
            slider.style.left = (position - slideWidth) + "px";
        }
        canClick = false;
    }
}

next.onclick = function () {
let slideWidth = parseFloat(getComputedStyle(maincont).width);
let position = parseFloat(getComputedStyle(slider).left);
let slidesNumber = slide.length;
    if (canClick) {
        if (position >= 0) {
            return;
        } else {
            slider.style.left = (position + slideWidth) + "px";
        }
        canClick = false;
    }
}