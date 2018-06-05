const form = document.querySelector('form')

const changeHeading = function (ev) {
  ev.preventDefault()

  //
  const f = ev.target
  const spellName = f.spellName.value
  const spellsDiv = document.querySelector('#spells')

  // changes the color
  var textColor = document.getElementById('spellColor').value;

  spellsDiv.innerHTML += `<font color= ${textColor} >${spellName}</font><li></li>`

  f.reset()
}

const changeColor = function () {}

form.addEventListener('submit', changeHeading)