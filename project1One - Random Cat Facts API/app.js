let btn1 = document.querySelector(".btn1");
let p = document.querySelector("p");

let url = "https://catfact.ninja/fact";

btn1.addEventListener("click",()=>{
    getFacts();
})

async function getFacts() {
  try {
    let res = await axios.get(url);
    console.log(res.data);
    p.innerText = res.data.fact;
  } catch (e) {
    console.log(e);
  }
}


// below api not working

// let btn3 = document.querySelector(".btn3");
// let p2 = document.querySelector("#resultingClg");

// let url3 = "https://universities.hipolabs.com/search?name=";

// // btn3.addEventListener("click", async ()=>{
// //     let countryName = document.getElementById('countryName');
// //     let result = await clgName(countryName);
// // })

// async function clgName(country){
//     let res = await axios.get(url3+country);
//     console.log(res);
// }