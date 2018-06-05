// Kimberly Rose Crevecoeur

const reveal = document.querySelector('#reveal')
const revealMimic = function () {
    const heading = document.querySelector('#mimic')
    heading.textContent = "The mimic has revealed itself!"
}
// adding the eventlistener to the "reveal the mimic!" button
reveal.addEventListener('click', revealMimic)



// function to change the second header based on the input
const submit = function () {
    const heroHeading = document.querySelector('#mimic') // heroname and heroclass are the inputs
    const heroName = document.querySelector('#name').value
    const heroClass = document.querySelector('#class').value

    const heading = document.querySelector('#mimic')

    heroHeading.textContent = heroName + " the " + heroClass + " has slain the Treasure chest mimic!"

}



const submitButton = document.querySelector("#character")

submitButton.addEventListener('click', submit)