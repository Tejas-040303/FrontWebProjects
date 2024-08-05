let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(){
    let newItem = document.createElement("li");
    newItem.innerText = inp.value;
    
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete");
    newItem.appendChild(deleteButton);
    ul.appendChild(newItem);
    inp.value="";
})

ul.addEventListener("click", function(event){
    // console.log(event.target);
    if(event.target.nodeName == "BUTTON"){
        let listItem  = event.target.parentElement;
        listItem.remove();
    }
    
})