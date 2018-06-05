const form = document.querySelector('form')

const changeHeading = function (ev) {
  ev.preventDefault()

  //
  const f = ev.target
  const spellName = f.spellName.value
  const spellsDiv = document.querySelector('#spells')

  // changes the color
  var textColor = document.getElementById('spellColor').value;

  // spellsDiv.innerHTML += `<li><font color= ${textColor} >${spellName}</font></li>`
  var x = document.createElement("LI");
  var t = document.createTextNode(spellName);
  t.se
  x.appendChild(t);
  x.style.color = textColor;
  document.getElementById("spells").appendChild(x);

  f.reset()
}






const changeColor = function () {}

form.addEventListener('submit', changeHeading)