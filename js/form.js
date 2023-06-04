// встановлюємо обробник на форму
let form = document.querySelector("form");


    let inputname = document.querySelector("#first");
    let messageName = document.querySelector(".errorfirst");
    inputname.addEventListener("input", function (e){
      e.preventDefault();
    if (inputname.value.length === 0) {
    messageName.style.display = "block";
    messageName.textContent = "Введіть Ваше ім'я";
    messageName.className = "invalid";
  } else {
    messageName.style.display = "block";
    messageName.textContent = "Значення введено";
    messageName.className = "valid";
  }
    })
    

   