const generateBtnEl = document.querySelector("#generate-btn");
const containerEl = document.querySelector(".boxes");
const body = document.body;

function renderColorCards(len = 50) {
  let html = "";
  for (let i = 0; i < len; i++) {
    const color = getRandomColor();
    html += `<div class="box" style="background: ${color};">
                <div class="box-btns">
                  <button class="copy-btn" data-color-bg="${color}"><img src="./icons/copy.svg" alt="copy" /> </button> <button class="setbg-btn" data-color-bg="${color}"> <img src="./icons/bg.svg" alt="bg"/> </button> </div>
              </div>`;
  }

  containerEl.innerHTML = html;
}

renderColorCards();

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}

generateBtnEl.addEventListener("click", () => {
  renderColorCards();
});

const copyBtnEl = document.querySelectorAll(".copy-btn");
copyBtnEl.forEach((btn) => {
  btn.addEventListener("click", function () {
   const {colorBg} = btn.dataset;
    navigator.clipboard.writeText(colorBg);
    // Todo: when the use copy check for 1500 ms sec
  });
}); 


const setBgBtnEl = document.querySelectorAll(".setbg-btn");
setBgBtnEl.forEach((btn) => {
  btn.addEventListener("click", function () {
   const {colorBg} = btn.dataset
    body.style.backgroundColor = colorBg;
  });
});

const boxesEl = document.querySelectorAll(".box");

boxesEl.forEach((box)=>{
  
  box.addEventListener("mouseout", function(){
    body.style.backgroundColor = "#0a121f";
  });  
})