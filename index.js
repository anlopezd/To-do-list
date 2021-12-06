const input = document.querySelector("input");
const addBtn = document.getElementById("btn");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty")
const numbers = document.querySelector(".numbers")

addBtn.addEventListener("click", (e) => {
    e.preventDefault()
    
    const text = input.value;
    const textEdit = text.replace(text[0], text[0].toUpperCase())
    const numeros = /^[0-9]/
    

    if (text !== "" && !text.match(numeros)) {
        const li = document.createElement("li")
        const p = document.createElement("p")
        p.textContent = textEdit;
        ul.appendChild(li)
        li.appendChild(deleteBtn())
        li.appendChild(p)
        input.value = ""
        empty.style.display = "none"
        numbers.style.display = "none";
    } else if (text.match(numeros)) {
        numbers.style.display = "block";
        input.value = ""
    }
    

   
})

function deleteBtn() {
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "X"
    deleteBtn.className = "delete-btn"

    deleteBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const item = e.target.parentElement;
        ul.removeChild(item)
        const items = document.querySelectorAll("li");
        if(items.length === 0) {
            empty.style.display = "block"
        }
    })
    return deleteBtn;
}