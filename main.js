
let count;
let counter = document.querySelector("h1")
let input = document.querySelector("input")


document.querySelector("#plus").addEventListener("click", plusOne)
document.querySelector("#minus").addEventListener("click", minusOne)


function init(){
count = 0
render()
}

function render(){
    counter.textContent = count
}


function plusOne(){
    count += parseInt(input.value)
    render()
}

function minusOne(){
    count -= parseInt(input.value)
    render()
}
init()