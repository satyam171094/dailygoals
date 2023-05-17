const title = document.querySelector(".title")
const description = document.querySelector(".description")
const form = document.querySelector("form")
const container = document.querySelector(".container")


const data = localStorage.getItem("task")
?JSON.parse(localStorage.getItem("task"))
:[];

showAllData()
function showAllData(){
    data.forEach((value,index) =>{

        const div = document.createElement("div")
        div.setAttribute("class" , "output")

        const p = document.createElement("p")
        p.innerText = value.title
        div.append(p)

        const span = document.createElement("span")
        span.innerText = value.description
        div.append(span)

        const btn = document.createElement("button")
        btn.innerText = "-"
        div.append(btn)

        btn.addEventListener("click", ()=>{
            removeData()
            data.splice(index, 1)
            localStorage.setItem("task", JSON.stringify(data))
            showAllData()
        })
        container.append(div)

    })
}

const removeData = ()=>{
    data.forEach((value) =>{
        const div = document.querySelector(".output")
        div.remove()
    })
}


form.addEventListener("submit", (e)=>{
    e.preventDefault()
    removeData()
    data.push({
        title:title.value,
        description:description.value,
    })
    showAllData()
    localStorage.setItem("task", JSON.stringify(data))
})

console.log(data)
