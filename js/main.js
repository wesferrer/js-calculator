/*--- variables ---*/

var input, firstNum, op, result;
var displayEl = document.getElementById('display');

/*--- event listeners ---*/





/*--- functions ---*/

function initialize () {
  input = '';
  firstNum = op = result = null;
  updateDisplay();
}

function updateDisplay(){
  var text = result || input || '0.'
  displayEl.textContent = text;
}


initialize();
