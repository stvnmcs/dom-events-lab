const display = document.querySelector('.display')

const numbers = document.querySelectorAll('.number')

const operators = document.querySelectorAll('.operator')

const clears = document.querySelector('.clears')

const equals = document.querySelector('.equals')

let equation = ''

function clear() {
  display.innerText = ''
  equation = ''
}

function evaluate(){
  if (display.innerText == ""){return}
  display.innerText = eval(display.innerText)
  equation = display.innerText
}

function append(input){
    equation = equation + input
}

numbers.forEach(number => {
  number.addEventListener("click", (event) => {
    append(event.target.innerText);
    display.innerText = equation
  });
});

operators.forEach(operator => {
  operator.addEventListener("click", (event) => {
    append(event.target.innerText);
    display.innerText = equation
  });
});

clears.addEventListener("click", clear)

equals.addEventListener("click", evaluate);

