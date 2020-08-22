const allClearBtn = document.getElementById('all-clear');
const clearCurrent = document.getElementById('clear')
const prevNum = document.getElementById('prev')
const currentNum = document.getElementById('current')
const point = document.getElementById('.')
const zero = document.getElementById('0');
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const divideBtn = document.getElementById('divide');



allClearBtn.addEventListener('click', function() {
    prevNum.innerHTML = '';
    currentNum.innerHTML = '';
});

clearCurrent.addEventListener('click', function() {
    currentNum.innerHTML = '';
});

point.addEventListener('click', function() {
    if(!currentNum.innerHTML.includes('.')) {
        currentNum.innerHTML += point.innerHTML
    }
})

zero.addEventListener('click', function() {
    currentNum.innerHTML += zero.innerHTML;
})

one.addEventListener('click', function () {
    currentNum.innerHTML += one.innerHTML;
})

two.addEventListener('click', function () {
    currentNum.innerHTML += two.innerHTML;
})

three.addEventListener('click', function () {
    currentNum.innerHTML += three.innerHTML;
})

four.addEventListener('click', function () {
    currentNum.innerHTML += four.innerHTML;
})

five.addEventListener('click', function () {
    currentNum.innerHTML += five.innerHTML;
})

six.addEventListener('click', function () {
    currentNum.innerHTML += six.innerHTML;
})

seven.addEventListener('click', function () {
    currentNum.innerHTML += seven.innerHTML;
})

eight.addEventListener('click', function () {
    currentNum.innerHTML += eight.innerHTML;
})

nine.addEventListener('click', function () {
    currentNum.innerHTML += nine.innerHTML;
})

divideBtn.addEventListener('click', function () {
  if (prevNum.innerHTML === '') {
      prevNum.innerHTML += currentNum.innerHTML
      currentNum.innerHTML = '';
  }
  if (prevNum.innerHTML !== '' && currentNum.innerHTML !== '') {
        currentNum.innerHTML = +prevNum.innerHTML/+currentNum.innerHTML;
        prevNum.innerHTML = '';
  }
});