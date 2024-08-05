let btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  let randomColor = getRandomColor();
  let p = document.querySelector("p");
  p.innerText = randomColor;

  let div = document.querySelector(".color-container");
  div.style.backgroundColor = randomColor;
});

function getRandomColor(){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let color = `rgb(${red}, ${green}, ${blue})`; 
    return color;
}
