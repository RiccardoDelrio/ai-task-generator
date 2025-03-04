const numberEl = document.querySelector(".number")
const addEl = document.querySelector(".add")
const lessEl = document.querySelector(".less")
const resetEl = document.querySelector(".reset")
let theNumber = 0


addEl.addEventListener("click", () => {
    theNumber += 1
    console.log(theNumber);
    numberEl.innerHTML = `${theNumber}`
    if (theNumber > 0) {
        lessEl.classList.remove("disabled")
        resetEl.classList.remove("disabled")
    }
    if (theNumber % 10 === 0) {
        addEl.classList.add("bg-danger")

    } else { addEl.classList.remove("bg-danger") }
})
lessEl.addEventListener("click", () => {

    theNumber -= 1
    console.log(theNumber);
    numberEl.innerHTML = `${theNumber}`
    if (theNumber < 1) {
        lessEl.classList.add("disabled")
        resetEl.classList.add("disabled")
    }
    if (theNumber % 10 === 0) {
        addEl.classList.add("bg-danger")

    } else { addEl.classList.remove("bg-danger") }

})
resetEl.addEventListener("click", () => {
    theNumber = 0
    numberEl.innerHTML = `${theNumber}`
})



