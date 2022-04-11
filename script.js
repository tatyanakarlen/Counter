
const plusBtn = document.getElementById("plus")
plusBtn.addEventListener('click', calculate)

const minusBtn = document.getElementById("minus")
minusBtn.addEventListener('click', calculate)

const input = document.getElementById("input")

let H1 = document.getElementById("H1")

let displayedNumber = parseInt(H1.innerHTML)

let sum = 0

let parsedInput = parseInt(input.value)






function render() {
    if (sum < 0) {
        H1.style.color = 'red'
    } else {
        H1.style.color = 'black'
    }
}

function calculate(e) {
    if (e.target.id === "plus") {
        sum += parseInt(input.value) + displayedNumber
        H1.innerHTML = sum
        render()
    } else if (e.target.id === "minus") {
        sum -= parseInt(input.value) - displayedNumber
        H1.innerHTML = sum
        render()
    }
}

   










