const input = document.querySelector("input");
const addBtn = document.getElementById("btn");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty")

addBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const text = input.value;
    const textEdit = text.replace(text[0], text[0].toUpperCase())

    if (text !== "") {
        const li = document.createElement("li")
        const p = document.createElement("p")
        p.textContent = textEdit;
        ul.appendChild(li)
        li.appendChild(deleteBtn())
        li.appendChild(p)
        input.value = ""
        empty.style.display = "none"
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