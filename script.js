let lengthEl = document.getElementById("length-el")
let labelEl = document.getElementById("label-el")
let lengthPassword = lengthEl.value
let buttonEl = document.getElementsByClassName("btn-el")

lengthEl.addEventListener("change", () =>{
  lengthPassword = lengthEl.value
  labelEl.textContent = "length = " + lengthPassword
  showPassword()
})

// get a number bettwen [33 - 125] ascii characters 
// that includes number, symbols, letters
function getRandomArbitrary() {
  return Math.floor(Math.random() * (126 - 33) + 33);
}

function getStringPassword() {
  let stringPassword = ""
for (let i = 0; i < lengthPassword; i++) stringPassword +=(String.fromCharCode(getRandomArbitrary()))
  return stringPassword
}

function showPassword() {
  for (let i=0; i<buttonEl.length ; i++) {
    buttonEl[i].textContent=getStringPassword()
  }
}

function selfCopy(e) {
   const elem = document.createElement('textarea');
   elem.value = e;
   document.body.appendChild(elem);
   elem.select();
   document.execCommand('copy');
   document.body.removeChild(elem);
  alert(e + " copied to clipboard")
}
