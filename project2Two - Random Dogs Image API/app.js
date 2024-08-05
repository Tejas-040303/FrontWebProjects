
let btn2 = document.querySelector(".btn2");
let image  = document.querySelector("#result");

let url2 = "https://dog.ceo/api/breeds/image/random";

btn2.addEventListener("click", async ()=>{
    let dogImg = await getImg();
    // divImg.innerHTML = '<img src="dogImg" alt="">';
    image.setAttribute("src",dogImg)
})

async function getImg(){
    let res = await axios.get(url2);
    return res.data.message;

}