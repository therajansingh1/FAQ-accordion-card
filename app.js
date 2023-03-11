
let spanOne = document.getElementById("q-1")
let spanTwo = document.getElementById("q-2")
let spanThree = document.getElementById("q-3")
let spanFour = document.getElementById("q-4")
let spanFive = document.getElementById("q-5")

let paraOne = document.getElementById("ans1")
let paraTwo = document.getElementById("ans2")
let paraThree = document.getElementById("ans3")
let paraFour = document.getElementById("ans4")
let paraFive = document.getElementById("ans5")

let arrow = document.getElementById("arrow1")
let arrowTwo = document.getElementById("arrow2")
let arrowThree = document.getElementById("arrow3")
let arrowFour = document.getElementById("arrow4")
let arrowFive = document.getElementById("arrow5")

spanOne.addEventListener("click", function() {
    paraOne.classList.toggle("ans")
    spanOne.classList.toggle("text")
    arrow.classList.toggle("up-arrow")
})

spanTwo.addEventListener("click", function() {
    paraTwo.classList.toggle("ans")
    spanTwo.classList.toggle("text")
    arrowTwo.classList.toggle("up-arrow")
})

spanThree.addEventListener("click", function() {
    paraThree.classList.toggle("ans")
    spanThree.classList.toggle("text")
    arrowThree.classList.toggle("up-arrow")
})

spanFour.addEventListener("click", function() {
    paraFour.classList.toggle("ans")
    spanFour.classList.toggle("text")
    arrowFour.classList.toggle("up-arrow")
})

spanFive.addEventListener("click", function() {
    paraFive.classList.toggle("ans")
    spanFive.classList.toggle("text")
    arrowFive.classList.toggle("up-arrow")
})