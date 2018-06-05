const reveal = document.querySelector('#reveal')
const revealMimic = function () {
    const heading = document.querySelector('#mimic')
    heading.textContent = "I am the mimic!"
}

reveal.addEventListener('click', revealMimic)


const submit = function () {
    const heroHeading = document.querySelector('#mimic')
    const heroName = document.querySelector('#name').value
    const heroClass = document.querySelector('#class').value

    const heading = document.querySelector('#mimic')

    heroHeading.textContent = heroName + " the " + heroClass + " has slain the Treasure chest mimic!"

}



const submitButton = document.querySelector("#character")

submitButton.addEventListener('click', submit)