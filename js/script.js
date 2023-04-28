document.addEventListener("keydown", function (e) {
  //   console.log(e.which);
});

// функция отслеживания двойного клика
function runOnKeys(func, ...codes) {
  let pressed = new Set();
  document.addEventListener("keydown", function (event) {
    pressed.add(event.code);
    for (let code of codes) {
      if (!pressed.has(code)) {
        return;
      }
    }
    pressed.clear();
    func();
  });
  document.addEventListener("keyup", function (event) {
    pressed.delete(event.code);
  });
}
let arrRusKeys = document.querySelectorAll(".rus");
let arrEngKeys = document.querySelectorAll(".eng");

function changeLang() {
  for (let i = 0; i < arrEngKeys.length; i++) {
    if (arrEngKeys[i].className == "eng") {
      arrEngKeys[i].classList.toggle("hidden");
      arrEngKeys[i].children[0].classList.toggle("hidden");
      arrRusKeys[i].classList.toggle("hidden");
      arrRusKeys[i].children[0].classList.toggle("hidden");
    } else {
      arrEngKeys[i].classList.toggle("hidden");
      arrEngKeys[i].children[0].classList.toggle("hidden");
      arrRusKeys[i].classList.toggle("hidden");
      arrRusKeys[i].children[0].classList.toggle("hidden");
    }
  }
}
runOnKeys(() => changeLang(), "ShiftLeft", "AltLeft");
let capsLock = document.querySelector()