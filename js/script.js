let arrRusKeys = document.querySelectorAll(".rus");
let arrEngKeys = document.querySelectorAll(".eng");
let arrEngSpans = document.querySelectorAll(".eng > span");
let arrRusSpans = document.querySelectorAll(".rus > span");
let arrKeyboardKey = document.querySelectorAll(".keyboard-key");
let arrKeyboardKeyGreen = document.querySelectorAll(".green");
let textaria = document.querySelector(".textarea");

document.addEventListener("keyup", function (e) {
  for (let i = 0; i < arrKeyboardKey.length; i++) {
    if (arrKeyboardKey[i].id == e.code) {
      arrKeyboardKey[i].style.background = "#444444de";
      arrKeyboardKey[i].style.transform = "5s";
    }
  }
  for (let i = 0; i < arrKeyboardKeyGreen.length; i++) {
    if (arrKeyboardKeyGreen[i].id == e.code) {
      arrKeyboardKeyGreen[i].style.background = " #222222";
      arrKeyboardKeyGreen[i].style.transform = "5s";
    }
  }
});

for (let i = 0; i < arrKeyboardKey.length; i++) {
  arrKeyboardKey[i].addEventListener("click", (e) => {
    if (arrKeyboardKey[i].className == "keyboard-key") {
        
        textaria.innerHTML += e.target.innerText;
        console.log(typeof(textaria))
    }
  });
}
document.addEventListener("keydown", function (e) {
  for (let i = 0; i < arrKeyboardKey.length; i++) {
    if (arrKeyboardKey[i].id == e.code) {
      arrKeyboardKey[i].style.background = "#ffdcc8";
      arrKeyboardKey[i].style.transform = "5s";
      if (arrKeyboardKey[i].className == "keyboard-key") {
        if (arrKeyboardKey[i].children[0].className == "rus") {
          if (
            arrKeyboardKey[i].children[0].children[0].className == "caseDown"
          ) {
            let newSymbol = arrKeyboardKey[i].children[0].children[0].innerHTML;
            textaria.innerHTML += newSymbol;
            console.log(newSymbol);
          }
          if (arrKeyboardKey[i].children[0].children[2].className == "caps") {
            let newSymbol = arrKeyboardKey[i].children[0].children[2].innerHTML;
            textaria.innerHTML += newSymbol;
            console.log(newSymbol);
          }
        }
        if (arrKeyboardKey[i].children[1].className == "eng") {
          if (
            arrKeyboardKey[i].children[1].children[0].className == "caseDown"
          ) {
            let newSymbol = arrKeyboardKey[i].children[1].children[0].innerHTML;
            textaria.innerHTML += newSymbol;
            console.log(newSymbol);
          }
          if (arrKeyboardKey[i].children[1].children[2].className == "caps") {
            let newSymbol = arrKeyboardKey[i].children[1].children[2].innerHTML;
            textaria.innerHTML += newSymbol;
            console.log(newSymbol);
          }
        }
      }
    }
  }

  if (e.code == "CapsLock") {
    for (let i = 0; i < arrEngKeys.length; i++) {
      if (arrEngKeys[i].className == "eng") {
        if (arrEngKeys[i].children[2].className == "caps hidden") {
          arrEngKeys[i].children[2].classList.remove("hidden");
          arrEngKeys[i].children[0].classList.add("hidden");
        } else {
          arrEngKeys[i].children[0].classList.remove("hidden");
          arrEngKeys[i].children[2].classList.add("hidden");
        }
      }
    }
    for (let i = 0; i < arrRusKeys.length; i++) {
      if (arrRusKeys[i].className == "rus") {
        if (arrRusKeys[i].children[2].className == "caps hidden") {
          arrRusKeys[i].children[2].classList.remove("hidden");
          arrRusKeys[i].children[0].classList.add("hidden");
          console.log(e);
        } else {
          arrRusKeys[i].children[0].classList.remove("hidden");
          arrRusKeys[i].children[2].classList.add("hidden");
        }
      }
    }
  }
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

function changeLang() {
  for (let i = 0; i < arrEngKeys.length; i++) {
    if (arrEngKeys[i].className == "eng") {
      arrEngKeys[i].classList.toggle("hidden");
      arrEngKeys[i].children[0].classList.toggle("hidden");
      arrRusKeys[i].classList.toggle("hidden");
      arrRusKeys[i].children[0].classList.toggle("hidden");
      //   addSymbol();
    } else {
      arrEngKeys[i].classList.toggle("hidden");
      arrEngKeys[i].children[0].classList.toggle("hidden");
      arrRusKeys[i].classList.toggle("hidden");
      arrRusKeys[i].children[0].classList.toggle("hidden");
      //   addSymbol(e);
    }
  }
}
runOnKeys(() => changeLang(), "ShiftLeft", "AltLeft");
