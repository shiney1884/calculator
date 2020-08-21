const allClearBtn = document.getElementById('all-clear');
const clearCurrent = document.getElementById('clear')
const prevNum = document.getElementById('prev')
const currentNum = document.getElementById('current')
const number = document.getElementsByClassName('number');

allClearBtn.addEventListener('click', function() {
    prevNum.innerHTML = '';
    currentNum.innerHTML = '';
});

clearCurrent.addEventListener('click', function() {
    currentNum.innerHTML = '';
});


number.addEventListener('click', function() {
    console.log(number.innerHTML)
})

