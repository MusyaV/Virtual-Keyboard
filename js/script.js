window.addEventListener("load", () => {
  document.body.innerHTML = pageHTML;

  let arrRusKeys = document.querySelectorAll(".rus");
  let arrEngKeys = document.querySelectorAll(".eng");
  let arrKeyboardKey = document.querySelectorAll(".keyboard-key");
  let arrKeyboardKeyGreen = document.querySelectorAll(".green");
  let textaria = document.querySelector(".textarea");

  //   функция для backspace
  document.querySelector("#Backspace").addEventListener("click", () => {
    if (textaria.selectionStart == 0) {
      textaria.innerHTML = textaria.value.substring(
        0,
        textaria.value.length - 1
      );
    } else {
      textaria.innerHTML =
        textaria.value.slice(0, textaria.selectionStart - 1) +
        textaria.value.slice(textaria.selectionStart, textaria.value.length);
    }
  });
  //   функция для delete
  document.querySelector("#Delete").addEventListener("click", () => {
    console.log(
      textaria.value.slice(0, textaria.selectionStart) +
        textaria.value.slice(textaria.selectionStart + 1, textaria.value.length)
    );
    textaria.innerHTML =
      textaria.value.slice(0, textaria.selectionStart) +
      textaria.value.slice(textaria.selectionStart + 1, textaria.value.length);
  });
  //   функция для Enter
  document.querySelector("#Enter").addEventListener("click", () => {
    textaria.innerHTML =
      textaria.value.substring(0, textaria.selectionStart) +
      "\n" +
      textaria.value.substring(textaria.selectionEnd, textaria.value.length);
  });
  //   функция для CapsLock
  document.querySelector("#CapsLock").addEventListener("click", () => {
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
  });
  //   клик на все кнопки
  for (let i = 0; i < arrKeyboardKey.length; i++) {
    arrKeyboardKey[i].addEventListener("click", (e) => {
      if (arrKeyboardKey[i].className == "keyboard-key") {
        textaria.innerHTML += e.target.innerText;
        console.log(e);
      }
      if (arrKeyboardKey[i].id == "Space") {
        textaria.value =
          textaria.value.substring(0, textaria.selectionStart) +
          " " +
          textaria.value.substring(
            textaria.selectionEnd,
            textaria.value.length
          );
      }
    });
  }
  //   функция вводим символ по нажатию на клавиатуру
  function keyDown(e) {
    for (let i = 0; i < arrKeyboardKey.length; i++) {
      if (arrKeyboardKey[i].id == e.code) {
        arrKeyboardKey[i].style.background = "#ffdcc8";
        arrKeyboardKey[i].style.transform = "5s";
        if (arrKeyboardKey[i].className == "keyboard-key") {
          if (arrKeyboardKey[i].children[0].className == "rus") {
            if (
              arrKeyboardKey[i].children[0].children[0].className == "caseDown"
            ) {
              let newSymbol =
                arrKeyboardKey[i].children[0].children[0].innerHTML;
              textaria.innerHTML += newSymbol;
              console.log(newSymbol);
            }
            if (arrKeyboardKey[i].children[0].children[2].className == "caps") {
              let newSymbol =
                arrKeyboardKey[i].children[0].children[2].innerHTML;
              textaria.innerHTML += newSymbol;
              console.log(newSymbol);
            }
          }
          if (arrKeyboardKey[i].children[1].className == "eng") {
            if (
              arrKeyboardKey[i].children[1].children[0].className == "caseDown"
            ) {
              let newSymbol =
                arrKeyboardKey[i].children[1].children[0].innerHTML;
              textaria.innerHTML += newSymbol;
              console.log(newSymbol);
            }
            if (arrKeyboardKey[i].children[1].children[2].className == "caps") {
              let newSymbol =
                arrKeyboardKey[i].children[1].children[2].innerHTML;
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
  }
  document.addEventListener("keydown", keyDown);
  // функция убрать анимацию
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
  // меняем язык
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
});

let pageHTML = `
<div class="centralizer">
<p class="title">Виртуальная клавиатура</p>
<textarea class="textarea" id="textarea" cols="50" rows="5"></textarea>
<div class="keyboard-body" id="keyboard">
    <div class="keyboard-row">
        <div class="keyboard-key" id="Backquote">
            <span class="rus hidden">
                <span class="caseDown hidden">ё</span>
                <span class="caseUp hidden">Ё</span>
                <span class="caps hidden">Ё</span>
                <span class="shiftCaps hidden">ё</span>
            </span>
            <span class="eng">
                <span class="caseDown">&#8219;</span>
                <span class="caseUp hidden">~</span>
                <span class="caps hidden">&#8219;</span>
                <span class="shiftCaps hidden">~</span>
            </span>
        </div>
        <div class="keyboard-key" id="Digit1">
            <span class="rus hidden">
                <span class="caseDown hidden">1</span>
                <span class="caseUp hidden">!</span>
                <span class="caps hidden">1</span>
                <span class="shiftCaps hidden">!</span>
            </span>
            <span class="eng">
                <span class="caseDown">1</span>
                <span class="caseUp hidden">!</span>
                <span class="caps hidden">1</span>
                <span class="shiftCaps hidden">!</span>
            </span>
        </div>
        <div class="keyboard-key" id="Digit2">
            <span class="rus hidden">
                <span class="caseDown hidden">2</span>
                <span class="caseUp hidden">"</span>
                <span class="caps hidden">2</span>
                <span class="shiftCaps hidden">"</span>
            </span>
            <span class="eng">
                <span class="caseDown">2</span>
                <span class="caseUp hidden">@</span>
                <span class="caps hidden">2</span>
                <span class="shiftCaps hidden">@</span>
            </span>
        </div>
        <div class="keyboard-key" id="Digit3">
            <span class="rus hidden">
                <span class="caseDown hidden">3</span>
                <span class="caseUp hidden">№</span>
                <span class="caps hidden">3</span>
                <span class="shiftCaps hidden">№</span>
            </span>
            <span class="eng">
                <span class="caseDown">3</span>
                <span class="caseUp hidden">#</span>
                <span class="caps hidden">3</span>
                <span class="shiftCaps hidden">#</span>
            </span>
        </div>
        <div class="keyboard-key" id="Digit4">
            <span class="rus hidden">
                <span class="caseDown hidden">4</span>
                <span class="caseUp hidden">;</span>
                <span class="caps hidden">4</span>
                <span class="shiftCaps hidden">;</span>
            </span>
            <span class="eng">
                <span class="caseDown">4</span>
                <span class="caseUp hidden">$</span>
                <span class="caps hidden">4</span>
                <span class="shiftCaps hidden">$</span>
            </span>
        </div>
        <div class="keyboard-key" id="Digit5">
            <span class="rus hidden">
                <span class="caseDown hidden">5</span>
                <span class="caseUp hidden">%</span>
                <span class="caps hidden">5</span>
                <span class="shiftCaps hidden">%</span>
            </span>
            <span class="eng">
                <span class="caseDown">5</span>
                <span class="caseUp hidden">%</span>
                <span class="caps hidden">5</span>
                <span class="shiftCaps hidden">%</span>
            </span>
        </div>
        <div class="keyboard-key" id="Digit6">
            <span class="rus hidden">
                <span class="caseDown hidden">6</span>
                <span class="caseUp hidden">:</span>
                <span class="caps hidden">6</span>
                <span class="shiftCaps hidden">:</span>
            </span>
            <span class="eng">
                <span class="caseDown">6</span>
                <span class="caseUp hidden">^</span>
                <span class="caps hidden">6</span>
                <span class="shiftCaps hidden">^</span>
            </span>
        </div>
        <div class="keyboard-key" id="Digit7">
            <span class="rus hidden">
                <span class="caseDown hidden">7</span>
                <span class="caseUp hidden">?</span>
                <span class="caps hidden">7</span>
                <span class="shiftCaps hidden">?</span>
            </span>
            <span class="eng">
                <span class="caseDown">7</span>
                <span class="caseUp hidden">&</span>
                <span class="caps hidden">7</span>
                <span class="shiftCaps hidden">&</span>
            </span>
        </div>
        <div class="keyboard-key" id="Digit8">
            <span class="rus hidden">
                <span class="caseDown hidden">8</span>
                <span class="caseUp hidden">*</span>
                <span class="caps hidden">8</span>
                <span class="shiftCaps hidden">*</span>
            </span>
            <span class="eng">
                <span class="caseDown">8</span>
                <span class="caseUp hidden">*</span>
                <span class="caps hidden">8</span>
                <span class="shiftCaps hidden">*</span>
            </span>
        </div>
        <div class="keyboard-key" id="Digit9">
            <span class="rus hidden">
                <span class="caseDown hidden">9</span>
                <span class="caseUp hidden">(</span>
                <span class="caps hidden">9</span>
                <span class="shiftCaps hidden">(</span>
            </span>
            <span class="eng">
                <span class="caseDown">9</span>
                <span class="caseUp hidden">(</span>
                <span class="caps hidden">9</span>
                <span class="shiftCaps hidden">(</span>
            </span>
        </div>
        <div class="keyboard-key" id="Digit0">
            <span class="rus hidden">
                <span class="caseDown hidden">0</span>
                <span class="caseUp hidden">)</span>
                <span class="caps hidden">0</span>
                <span class="shiftCaps hidden">)</span>
            </span>
            <span class="eng">
                <span class="caseDown">0</span>
                <span class="caseUp hidden">)</span>
                <span class="caps hidden">0</span>
                <span class="shiftCaps hidden">)</span>
            </span>
        </div>
        <div class="keyboard-key" id="Minus">
            <span class="rus hidden">
                <span class="caseDown hidden">-</span>
                <span class="caseUp hidden">_</span>
                <span class="caps hidden">-</span>
                <span class="shiftCaps hidden">_</span>
            </span>
            <span class="eng">
                <span class="caseDown">-</span>
                <span class="caseUp hidden">_</span>
                <span class="caps hidden">-</span>
                <span class="shiftCaps hidden">_</span>
            </span>
        </div>
        <div class="keyboard-key" id="Equal">
            <span class="rus hidden">
                <span class="caseDown hidden">=</span>
                <span class="caseUp hidden">+</span>
                <span class="caps hidden">=</span>
                <span class="shiftCaps hidden">+</span>
            </span>
            <span class="eng">
                <span class="caseDown">=</span>
                <span class="caseUp hidden">+</span>
                <span class="caps hidden">=</span>
                <span class="shiftCaps hidden">+</span>
            </span>
        </div>
        <div class="keyboard-key green" id="Backspace">
            <span class="rus hidden">
                <span class="caseDown hidden">Backspace</span>
                <span class="caseUp hidden">Backspace</span>
                <span class="caps hidden">Backspace</span>
                <span class="shiftCaps hidden">Backspace</span>
            </span>
            <span class="eng">
                <span class="caseDown">Backspace</span>
                <span class="caseUp hidden">Backspace</span>
                <span class="caps hidden">Backspace</span>
                <span class="shiftCaps hidden">Backspace</span>
            </span>
        </div>
    </div>
    <div class="keyboard-row">
        <div class="keyboard-key green" id="Tab">
            <span class="rus hidden">
                <span class="caseDown hidden">Tab</span>
                <span class="caseUp hidden">Tab</span>
                <span class="caps hidden">Tab</span>
                <span class="shiftCaps hidden">Tab</span>
            </span>
            <span class="eng">
                <span class="caseDown">Tab</span>
                <span class="caseUp hidden">Tab</span>
                <span class="caps hidden">Tab</span>
                <span class="shiftCaps hidden">Tab</span>
            </span>
        </div>
        <div class="keyboard-key" id="KeyQ">
            <span class="rus hidden">
                <span class="caseDown hidden">й</span>
                <span class="caseUp hidden">Й</span>
                <span class="caps hidden">Й</span>
                <span class="shiftCaps hidden">й</span>
            </span>
            <span class="eng">
                <span class="caseDown">q</span>
                <span class="caseUp hidden">Q</span>
                <span class="caps hidden">Q</span>
                <span class="shiftCaps hidden">q</span>
            </span>
        </div>
        <div class="keyboard-key" id="KeyW">
            <span class="rus hidden">
                <span class="caseDown hidden">ц</span>
                <span class="caseUp hidden">Ц</span>
                <span class="caps hidden">Ц</span>
                <span class="shiftCaps hidden">ц</span>
            </span>
            <span class="eng">
                <span class="caseDown">w</span>
                <span class="caseUp hidden">W</span>
                <span class="caps hidden">W</span>
                <span class="shiftCaps hidden">w</span>
            </span>
        </div>
        <div class="keyboard-key" id="KeyE">
            <span class="rus hidden">
                <span class="caseDown hidden">у</span>
                <span class="caseUp hidden">У</span>
                <span class="caps hidden">У</span>
                <span class="shiftCaps hidden">у</span>
            </span>
            <span class="eng">
                <span class="caseDown">e</span>
                <span class="caseUp hidden">E</span>
                <span class="caps hidden">E</span>
                <span class="shiftCaps hidden">e</span>
            </span>
        </div>
        <div class="keyboard-key" id="KeyR">
            <span class="rus hidden">
                <span class="caseDown hidden">к</span>
                <span class="caseUp hidden">К</span>
                <span class="caps hidden">К</span>
                <span class="shiftCaps hidden">к</span>
            </span>
            <span class="eng">
                <span class="caseDown">r</span>
                <span class="caseUp hidden">R</span>
                <span class="caps hidden">R</span>
                <span class="shiftCaps hidden">r</span>
            </span>
        </div>
        <div class="keyboard-key" id="KeyT">
            <span class="rus hidden">
                <span class="caseDown hidden">е</span>
                <span class="caseUp hidden">Е</span>
                <span class="caps hidden">Е</span>
                <span class="shiftCaps hidden">е</span>
            </span>
            <span class="eng">
                <span class="caseDown">t</span>
                <span class="caseUp hidden">T</span>
                <span class="caps hidden">T</span>
                <span class="shiftCaps hidden">t</span>
            </span>
        </div>
        <div class="keyboard-key" id="KeyY">
            <span class="rus hidden">
                <span class="caseDown hidden">н</span>
                <span class="caseUp hidden">Н</span>
                <span class="caps hidden">Н</span>
                <span class="shiftCaps hidden">н</span>
            </span>
            <span class="eng">
                <span class="caseDown">y</span>
                <span class="caseUp hidden">Y</span>
                <span class="caps hidden">Y</span>
                <span class="shiftCaps hidden">y</span>
            </span>
        </div>
        <div class="keyboard-key" id="KeyU">
            <span class="rus hidden">
                <span class="caseDown hidden">г</span>
                <span class="caseUp hidden">Г</span>
                <span class="caps hidden">Г</span>
                <span class="shiftCaps hidden">г</span>
            </span>
            <span class="eng">
                <span class="caseDown">u</span>
                <span class="caseUp hidden">U</span>
                <span class="caps hidden">U</span>
                <span class="shiftCaps hidden">u</span>
            </span>
        </div>
        <div class="keyboard-key" id="KeyI">
            <span class="rus hidden">
                <span class="caseDown hidden">ш</span>
                <span class="caseUp hidden">Ш</span>
                <span class="caps hidden">Ш</span>
                <span class="shiftCaps hidden">ш</span>
            </span>
            <span class="eng">
                <span class="caseDown">i</span>
                <span class="caseUp hidden">I</span>
                <span class="caps hidden">I</span>
                <span class="shiftCaps hidden">i</span>
            </span>
        </div>
        <div class="keyboard-key" id="KeyO">
            <span class="rus hidden">
                <span class="caseDown hidden">щ</span>
                <span class="caseUp hidden">Щ</span>
                <span class="caps hidden">Щ</span>
                <span class="shiftCaps hidden">щ</span>
            </span>
            <span class="eng">
                <span class="caseDown">o</span>
                <span class="caseUp hidden">O</span>
                <span class="caps hidden">O</span>
                <span class="shiftCaps hidden">o</span>
            </span>
        </div>
        <div class="keyboard-key" id="KeyP">
            <span class="rus hidden">
                <span class="caseDown hidden">з</span>
                <span class="caseUp hidden">З</span>
                <span class="caps hidden">З</span>
                <span class="shiftCaps hidden">з</span>
            </span>
            <span class="eng">
                <span class="caseDown">p</span>
                <span class="caseUp hidden">P</span>
                <span class="caps hidden">P</span>
                <span class="shiftCaps hidden">p</span>
            </span>
        </div>
        <div class="keyboard-key" id="BracketLeft">
            <span class="rus hidden">
                <span class="caseDown hidden">х</span>
                <span class="caseUp hidden">Х</span>
                <span class="caps hidden">Х</span>
                <span class="shiftCaps hidden">х</span>
            </span>
            <span class="eng">
                <span class="caseDown">[</span>
                <span class="caseUp hidden">{</span>
                <span class="caps hidden">[</span>
                <span class="shiftCaps hidden">{</span>
            </span>
        </div>
        <div class="keyboard-key" id="BracketRight">
            <span class="rus hidden">
                <span class="caseDown hidden">ъ</span>
                <span class="caseUp hidden">Ъ</span>
                <span class="caps hidden">Ъ</span>
                <span class="shiftCaps hidden">ъ</span>
            </span>
            <span class="eng">
                <span class="caseDown">]</span>
                <span class="caseUp hidden">}</span>
                <span class="caps hidden">]</span>
                <span class="shiftCaps hidden">}</span>
            </span>
        </div>
        <div class="keyboard-key" id="Backslash">
            <span class="rus hidden">
                <span class="caseDown hidden">&#92;</span>
                <span class="caseUp hidden">&#8260;</span>
                <span class="caps hidden">&#92;</span>
                <span class="shiftCaps hidden">&#8260;</span>
            </span>
            <span class="eng">
                <span class="caseDown">&#92;</span>
                <span class="caseUp hidden">|</span>
                <span class="caps hidden">&#92;</span>
                <span class="shiftCaps hidden">|</span>
            </span>
        </div>
        <div class="keyboard-key green" id="Delete">
            <span class="rus hidden">
                <span class="caseDown hidden">Del</span>
                <span class="caseUp hidden">Del</span>
                <span class="caps hidden">Del</span>
                <span class="shiftCaps hidden">Del</span>
            </span>
            <span class="eng">
                <span class="caseDown">Del</span>
                <span class="caseUp hidden">Del</span>
                <span class="caps hidden">Del</span>
                <span class="shiftCaps hidden">Del</span>
            </span>
        </div>
    </div>
    <div class="keyboard-row">
        <div class="keyboard-key green" id="CapsLock">
            <span class="rus hidden">
                <span class="caseDown hidden">CapsLock</span>
                <span class="caseUp hidden">CapsLock</span>
                <span class="caps hidden">CapsLock</span>
                <span class="shiftCaps hidden">CapsLock</span>
            </span>
            <span class="eng">
                <span class="caseDown">CapsLock</span>
                <span class="caseUp hidden">CapsLock</span>
                <span class="caps hidden">CapsLock</span>
                <span class="shiftCaps hidden">CapsLock</span>
            </span>
        </div>
        <div class="keyboard-key" id="KeyA">
            <span class="rus hidden">
                <span class="caseDown hidden">ф</span>
                <span class="caseUp hidden">Ф</span>
                <span class="caps hidden">Ф</span>
                <span class="shiftCaps hidden">ф</span>
            </span>
            <span class="eng">
                <span class="caseDown">a</span>
                <span class="caseUp hidden">A</span>
                <span class="caps hidden">A</span>
                <span class="shiftCaps hidden">a</span>
            </span>
        </div>
        <div class="keyboard-key" id="KeyS">
            <span class="rus hidden">
                <span class="caseDown hidden">ы</span>
                <span class="caseUp hidden">Ы</span>
                <span class="caps hidden">Ы</span>
                <span class="shiftCaps hidden">ы</span>
            </span>
            <span class="eng">
                <span class="caseDown">s</span>
                <span class="caseUp hidden">S</span>
                <span class="caps hidden">S</span>
                <span class="shiftCaps hidden">s</span>
            </span>
        </div>
        <div class="keyboard-key" id="KeyD">
            <span class="rus hidden">
                <span class="caseDown hidden">в</span>
                <span class="caseUp hidden">В</span>
                <span class="caps hidden">В</span>
                <span class="shiftCaps hidden">в</span>
            </span>
            <span class="eng">
                <span class="caseDown">d</span>
                <span class="caseUp hidden">D</span>
                <span class="caps hidden">D</span>
                <span class="shiftCaps hidden">d</span>
            </span>
        </div>
        <div class="keyboard-key" id="KeyF">
            <span class="rus hidden">
                <span class="caseDown hidden">а</span>
                <span class="caseUp hidden">А</span>
                <span class="caps hidden">А</span>
                <span class="shiftCaps hidden">а</span>
            </span>
            <span class="eng">
                <span class="caseDown">f</span>
                <span class="caseUp hidden">F</span>
                <span class="caps hidden">F</span>
                <span class="shiftCaps hidden">f</span>
            </span>
        </div>
        <div class="keyboard-key" id="KeyG">
            <span class="rus hidden">
                <span class="caseDown hidden">п</span>
                <span class="caseUp hidden">П</span>
                <span class="caps hidden">П</span>
                <span class="shiftCaps hidden">п</span>
            </span>
            <span class="eng">
                <span class="caseDown">g</span>
                <span class="caseUp hidden">G</span>
                <span class="caps hidden">G</span>
                <span class="shiftCaps hidden">g</span>
            </span>
        </div>
        <div class="keyboard-key" id="KeyH">
            <span class="rus hidden">
                <span class="caseDown hidden">р</span>
                <span class="caseUp hidden">Р</span>
                <span class="caps hidden">Р</span>
                <span class="shiftCaps hidden">р</span>
            </span>
            <span class="eng">
                <span class="caseDown">h</span>
                <span class="caseUp hidden">H</span>
                <span class="caps hidden">H</span>
                <span class="shiftCaps hidden">h</span>
            </span>
        </div>
        <div class="keyboard-key" id="KeyJ">
            <span class="rus hidden">
                <span class="caseDown hidden">о</span>
                <span class="caseUp hidden">О</span>
                <span class="caps hidden">О</span>
                <span class="shiftCaps hidden">о</span>
            </span>
            <span class="eng">
                <span class="caseDown">j</span>
                <span class="caseUp hidden">J</span>
                <span class="caps hidden">J</span>
                <span class="shiftCaps hidden">j</span>
            </span>
        </div>
        <div class="keyboard-key" id="KeyK">
            <span class="rus hidden">
                <span class="caseDown hidden">л</span>
                <span class="caseUp hidden">Л</span>
                <span class="caps hidden">Л</span>
                <span class="shiftCaps hidden">л</span>
            </span>
            <span class="eng">
                <span class="caseDown">k</span>
                <span class="caseUp hidden">K</span>
                <span class="caps hidden">K</span>
                <span class="shiftCaps hidden">k</span>
            </span>
        </div>
        <div class="keyboard-key" id="KeyL">
            <span class="rus hidden">
                <span class="caseDown hidden">д</span>
                <span class="caseUp hidden">Д</span>
                <span class="caps hidden">Д</span>
                <span class="shiftCaps hidden">д</span>
            </span>
            <span class="eng">
                <span class="caseDown">l</span>
                <span class="caseUp hidden">L</span>
                <span class="caps hidden">L</span>
                <span class="shiftCaps hidden">l</span>
            </span>
        </div>
        <div class="keyboard-key" id="Semicolor">
            <span class="rus hidden">
                <span class="caseDown hidden">ж</span>
                <span class="caseUp hidden">Ж</span>
                <span class="caps hidden">Ж</span>
                <span class="shiftCaps hidden">ж</span>
            </span>
            <span class="eng">
                <span class="caseDown">;</span>
                <span class="caseUp hidden">:</span>
                <span class="caps hidden">;</span>
                <span class="shiftCaps hidden">:</span>
            </span>
        </div>
        <div class="keyboard-key" id="Quote">
            <span class="rus hidden">
                <span class="caseDown hidden">э</span>
                <span class="caseUp hidden">Э</span>
                <span class="caps hidden">Э</span>
                <span class="shiftCaps hidden">э</span>
            </span>
            <span class="eng">
                <span class="caseDown">&#8217;</span>
                <span class="caseUp hidden">&#34;</span>
                <span class="caps hidden">&#8217;</span>
                <span class="shiftCaps hidden">&#34;</span>
            </span>
        </div>
        <div class="keyboard-key green" id="Enter">
            <span class="rus hidden">
                <span class="caseDown hidden">Enter</span>
                <span class="caseUp hidden">Enter</span>
                <span class="caps hidden">Enter</span>
                <span class="shiftCaps hidden">Enter</span>
            </span>
            <span class="eng">
                <span class="caseDown">Enter</span>
                <span class="caseUp hidden">Enter</span>
                <span class="caps hidden">Enter</span>
                <span class="shiftCaps hidden">Enter</span>
            </span>
        </div>
    </div>
    <div class="keyboard-row">
        <div class="keyboard-key green" id="ShiftLeft">
            <span class="rus hidden">
                <span class="caseDown hidden">Shift</span>
                <span class="caseUp hidden">Shift</span>
                <span class="caps hidden">Shift</span>
                <span class="shiftCaps hidden">Shift</span>
            </span>
            <span class="eng">
                <span class="caseDown">Shift</span>
                <span class="caseUp hidden">Shift</span>
                <span class="caps hidden">Shift</span>
                <span class="shiftCaps hidden">Shift</span>
            </span>
        </div>
        <div class="keyboard-key" id="KeyZ">
            <span class="rus hidden">
                <span class="caseDown hidden">я</span>
                <span class="caseUp hidden">Я</span>
                <span class="caps hidden">Я</span>
                <span class="shiftCaps hidden">я</span>
            </span>
            <span class="eng">
                <span class="caseDown">z</span>
                <span class="caseUp hidden">Z</span>
                <span class="caps hidden">Z</span>
                <span class="shiftCaps hidden">z</span>
            </span>
        </div>
        <div class="keyboard-key" id="KeyX">
            <span class="rus hidden">
                <span class="caseDown hidden">ч</span>
                <span class="caseUp hidden">Ч</span>
                <span class="caps hidden">Ч</span>
                <span class="shiftCaps hidden">ч</span>
            </span>
            <span class="eng">
                <span class="caseDown">x</span>
                <span class="caseUp hidden">X</span>
                <span class="caps hidden">X</span>
                <span class="shiftCaps hidden">x</span>
            </span>
        </div>
        <div class="keyboard-key" id="KeyC">
            <span class="rus hidden">
                <span class="caseDown hidden">с</span>
                <span class="caseUp hidden">С</span>
                <span class="caps hidden">С</span>
                <span class="shiftCaps hidden">с</span>
            </span>
            <span class="eng">
                <span class="caseDown">c</span>
                <span class="caseUp hidden">C</span>
                <span class="caps hidden">C</span>
                <span class="shiftCaps hidden">c</span>
            </span>
        </div>
        <div class="keyboard-key" id="KeyV">
            <span class="rus hidden">
                <span class="caseDown hidden">м</span>
                <span class="caseUp hidden">М</span>
                <span class="caps hidden">М</span>
                <span class="shiftCaps hidden">м</span>
            </span>
            <span class="eng">
                <span class="caseDown">v</span>
                <span class="caseUp hidden">V</span>
                <span class="caps hidden">V</span>
                <span class="shiftCaps hidden">v</span>
            </span>
        </div>
        <div class="keyboard-key" id="KeyB">
            <span class="rus hidden">
                <span class="caseDown hidden">и</span>
                <span class="caseUp hidden">И</span>
                <span class="caps hidden">И</span>
                <span class="shiftCaps hidden">и</span>
            </span>
            <span class="eng">
                <span class="caseDown">b</span>
                <span class="caseUp hidden">B</span>
                <span class="caps hidden">B</span>
                <span class="shiftCaps hidden">b</span>
            </span>
        </div>
        <div class="keyboard-key" id="KeyN">
            <span class="rus hidden">
                <span class="caseDown hidden">т</span>
                <span class="caseUp hidden">Т</span>
                <span class="caps hidden">Т</span>
                <span class="shiftCaps hidden">т</span>
            </span>
            <span class="eng">
                <span class="caseDown">n</span>
                <span class="caseUp hidden">N</span>
                <span class="caps hidden">N</span>
                <span class="shiftCaps hidden">n</span>
            </span>
        </div>
        <div class="keyboard-key" id="KeyM">
            <span class="rus hidden">
                <span class="caseDown hidden">ь</span>
                <span class="caseUp hidden">Ь</span>
                <span class="caps hidden">Ь</span>
                <span class="shiftCaps hidden">ь</span>
            </span>
            <span class="eng">
                <span class="caseDown">m</span>
                <span class="caseUp hidden">M</span>
                <span class="caps hidden">M</span>
                <span class="shiftCaps hidden">m</span>
            </span>
        </div>
        <div class="keyboard-key" id="Comma">
            <span class="rus hidden">
                <span class="caseDown hidden">б</span>
                <span class="caseUp hidden">Б</span>
                <span class="caps hidden">Б</span>
                <span class="shiftCaps hidden">б</span>
            </span>
            <span class="eng">
                <span class="caseDown">,</span>
                <span class="caseUp hidden">&#8249</span>
                <span class="caps hidden">,</span>
                <span class="shiftCaps hidden">&#8249</span>
            </span>
        </div>
        <div class="keyboard-key" id="Period">
            <span class="rus hidden">
                <span class="caseDown hidden">ю</span>
                <span class="caseUp hidden">Ю</span>
                <span class="caps hidden">Ю</span>
                <span class="shiftCaps hidden">ю</span>
            </span>
            <span class="eng">
                <span class="caseDown">.</span>
                <span class="caseUp hidden">></span>
                <span class="caps hidden">.</span>
                <span class="shiftCaps hidden">></span>
            </span>
        </div>
        <div class="keyboard-key" id="Slash">
            <span class="rus hidden">
                <span class="caseDown hidden">.</span>
                <span class="caseUp hidden">,</span>
                <span class="caps hidden">.</span>
                <span class="shiftCaps hidden">,</span>
            </span>
            <span class="eng">
                <span class="caseDown">/</span>
                <span class="caseUp hidden">?</span>
                <span class="caps hidden">/</span>
                <span class="shiftCaps hidden">?</span>
            </span>
        </div>
        <div class="keyboard-key green" id="ArrowUp">
            <span class="rus hidden">
                <span class="caseDown hidden">🡅</span>
                <span class="caseUp hidden">🡅</span>
                <span class="caps hidden">🡅</span>
                <span class="shiftCaps hidden">🡅</span>
            </span>
            <span class="eng">
                <span class="caseDown">🡅</span>
                <span class="caseUp hidden">🡅</span>
                <span class="caps hidden">🡅</span>
                <span class="shiftCaps hidden">🡅</span>
            </span>
        </div>
        <div class="keyboard-key green" id="ShiftRight">
            <span class="rus hidden">
                <span class="caseDown hidden">Shift</span>
                <span class="caseUp hidden">Shift</span>
                <span class="caps hidden">Shift</span>
                <span class="shiftCaps hidden">Shift</span>
            </span>
            <span class="eng">
                <span class="caseDown">Shift</span>
                <span class="caseUp hidden">Shift</span>
                <span class="caps hidden">Shift</span>
                <span class="shiftCaps hidden">Shift</span>
            </span>
        </div>
    </div>
    <div class="keyboard-row">
        <div class="keyboard-key green" id="ControlLeft">
            <span class="rus hidden">
                <span class="caseDown hidden">Ctrl</span>
                <span class="caseUp hidden">Ctrl</span>
                <span class="caps hidden">Ctrl</span>
                <span class="shiftCaps hidden">Ctrl</span>
            </span>
            <span class="eng">
                <span class="caseDown">Ctrl</span>
                <span class="caseUp hidden">Ctrl</span>
                <span class="caps hidden">Ctrl</span>
                <span class="shiftCaps hidden">Ctrl</span>
            </span>
        </div>
        <div class="keyboard-key green" id="MetaLeft">
            <span class="rus hidden">
                <span class="caseDown hidden">Win</span>
                <span class="caseUp hidden">Win</span>
                <span class="caps hidden">Win</span>
                <span class="shiftCaps hidden">Win</span>
            </span>
            <span class="eng">
                <span class="caseDown">Win</span>
                <span class="caseUp hidden">Win</span>
                <span class="caps hidden">Win</span>
                <span class="shiftCaps hidden">Win</span>
            </span>
        </div>
        <div class="keyboard-key green" id="AltLeft">
            <span class="rus hidden">
                <span class="caseDown hidden">Alt</span>
                <span class="caseUp hidden">Alt</span>
                <span class="caps hidden">Alt</span>
                <span class="shiftCaps hidden">Alt</span>
            </span>
            <span class="eng">
                <span class="caseDown">Alt</span>
                <span class="caseUp hidden">Alt</span>
                <span class="caps hidden">Alt</span>
                <span class="shiftCaps hidden">Alt</span>
            </span>
        </div>
        <div class="keyboard-key" id="Space">
            <span class="rus hidden">
                <span class="caseDown hidden"> </span>
                <span class="caseUp hidden"> </span>
                <span class="caps hidden"> </span>
                <span class="shiftCaps hidden"> </span>
            </span>
            <span class="eng">
                <span class="caseDown"> </span>
                <span class="caseUp hidden"> </span>
                <span class="caps hidden"> </span>
                <span class="shiftCaps hidden"> </span>
            </span>
        </div>
        <div class="keyboard-key green" id="AltRight">
            <span class="rus hidden">
                <span class="caseDown hidden">Alt</span>
                <span class="caseUp hidden">Alt</span>
                <span class="caps hidden">Alt</span>
                <span class="shiftCaps hidden">Alt</span>
            </span>
            <span class="eng">
                <span class="caseDown">Alt</span>
                <span class="caseUp hidden">Alt</span>
                <span class="caps hidden">Alt</span>
                <span class="shiftCaps hidden">Alt</span>
            </span>
        </div>
        <div class="keyboard-key green" id="ArrowLeft">
            <span class="rus hidden">
                <span class="caseDown hidden">🡄</span>
                <span class="caseUp hidden">🡄</span>
                <span class="caps hidden">🡄</span>
                <span class="shiftCaps hidden">🡄</span>
            </span>
            <span class="eng">
                <span class="caseDown">🡄</span>
                <span class="caseUp hidden">🡄</span>
                <span class="caps hidden">🡄</span>
                <span class="shiftCaps hidden">🡄</span>
            </span>
        </div>
        <div class="keyboard-key green" id="ArrowDown">
            <span class="rus hidden">
                <span class="caseDown hidden">🡇</span>
                <span class="caseUp hidden">🡇</span>
                <span class="caps hidden">🡇</span>
                <span class="shiftCaps hidden">🡇</span>
            </span>
            <span class="eng">
                <span class="caseDown">🡇</span>
                <span class="caseUp hidden">🡇</span>
                <span class="caps hidden">🡇</span>
                <span class="shiftCaps hidden">🡇</span>
            </span>
        </div>
        <div class="keyboard-key green" id="ArrowRight">
            <span class="rus hidden">
                <span class="caseDown hidden">🡆</span>
                <span class="caseUp hidden">🡆</span>
                <span class="caps hidden">🡆</span>
                <span class="shiftCaps hidden">🡆</span>
            </span>
            <span class="eng">
                <span class="caseDown">🡆</span>
                <span class="caseUp hidden">🡆</span>
                <span class="caps hidden">🡆</span>
                <span class="shiftCaps hidden">🡆</span>
            </span>
        </div>
        <div class="keyboard-key green" id="ControlRight">
            <span class="rus hidden">
                <span class="caseDown hidden">Ctrl</span>
                <span class="caseUp hidden">Ctrl</span>
                <span class="caps hidden">Ctrl</span>
                <span class="shiftCaps hidden">Ctrl</span>
            </span>
            <span class="eng">
                <span class="caseDown">Ctrl</span>
                <span class="caseUp hidden">Ctrl</span>
                <span class="caps hidden">Ctrl</span>
                <span class="shiftCaps hidden">Ctrl</span>
            </span>
        </div>
    </div>
</div>
<div id="text">
    <p class="description">Клавиатура создана в операционной системе Windows</p>
    <p class="language">Для переключения языка комбинация: левые SHIFT+ALT</p>
</div>
</div>
`;
