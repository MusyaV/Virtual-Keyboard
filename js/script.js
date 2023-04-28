let arrRusKeys = document.querySelectorAll(".rus");
let arrEngKeys = document.querySelectorAll(".eng");
let arrEngSpans = document.querySelectorAll(".eng > span");
let arrRusSpans = document.querySelectorAll(".rus > span");

document.addEventListener("keydown", function (e) {
  if (e.code == "CapsLock") {
    for (let i = 0; i < arrEngKeys.length; i++) {
      if (arrEngKeys[i].className == "eng") {
        if (arrEngKeys[i].children[1].className == 'caseUp hidden') {
            arrEngKeys[i].children[1].classList.remove('hidden')
            arrEngKeys[i].children[0].classList.add('hidden')
            // arrEngKeys[i].children[2].classList.add('hidden')
            // arrEngKeys[i].children[3].classList.add('hidden')
        }else{
            arrEngKeys[i].children[0].classList.remove('hidden')
            arrEngKeys[i].children[1].classList.add('hidden')
            // arrEngKeys[i].children[2].classList.add('hidden')
            // arrEngKeys[i].children[3].classList.add('hidden')
        }
      }
    }
    for (let i = 0; i < arrRusKeys.length; i++) {
      if (arrRusKeys[i].className == "rus") {
        if (arrRusKeys[i].children[1].className == 'caseUp hidden') {
            arrRusKeys[i].children[1].classList.remove('hidden')
            arrRusKeys[i].children[0].classList.add('hidden')
            // arrRusKeys[i].children[2].classList.add('hidden')
            // arrRusKeys[i].children[3].classList.add('hidden')
        }else{
            arrRusKeys[i].children[0].classList.remove('hidden')
            arrRusKeys[i].children[1].classList.add('hidden')
            // arrRusKeys[i].children[2].classList.add('hidden')
            // arrRusKeys[i].children[3].classList.add('hidden')
        }
      }
    }
    // for (let i = 0; i < arrRusKeys.length; i++) {
    //   if (arrEngKeys[i].className == "rus") {
    //     console.log("da рус");
    //   }else{
    //     console.log("net рус");
    //   }
    // }

    
  }

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
