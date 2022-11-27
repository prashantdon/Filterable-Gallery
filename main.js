let inputBox = document.getElementById("input");
let select = document.getElementById("select").value;
let items = document.getElementById("items");
let addBtn = document.getElementById("add");



addBtn.addEventListener("click", () => {
    if (select[0]) {
        items.innerHTML = `<div class="headphoneitem">
        <img  src="./headphone.jfif" alt="">
        <button class="delete">Delete</button>
       </div>`
    }
     if (select[1]) {
        items.innerHTML = `<div class="laptopitem">
        <img src="./laptop.jfif" alt="">
        <button>delete</button>
    </div>`
    }
     if (select[2]) {
        items.innerHTML = `<div class="mobileitem"><img src="./mobile.jfif" alt="">
        <button>delete</button>
    </div>`
    }
})

const deleteBtn = document.getElementsByClassName("delete")
console.log(deleteBtn)

deleteBtn.addEventListener("click",()=>{
    
})