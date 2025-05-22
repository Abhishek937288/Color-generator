const generateBtnEl = document.querySelector("#generate-btn")
const boxesEl = document.querySelectorAll(".box");
const copyBtnEl = document.querySelectorAll("#copybtn");
const setBgBtnEl = document.querySelectorAll("#setbgbtn");
const card = document.querySelector(".card");
const body = document.body;


function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for(let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}


generateBtnEl.addEventListener("click",()=>{
    boxesEl.forEach((box)=>{
        box.style.backgroundColor = getRandomColor();
    })
});

copyBtnEl.forEach((btn) =>{
    btn.addEventListener("click",function(event){
        const parent = this.parentElement.parentElement;
        const color = parent.style.backgroundColor;
        navigator.clipboard.writeText(color);
   
})});

setBgBtnEl.forEach((btn)=>{
    btn.addEventListener("click",function(){
         const parent = this.parentElement.parentElement;
   const color = parent.style.backgroundColor;
    body.style.backgroundColor = color;
    })
})


