// calculator 객체 만들기.
const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
}

updateDisplay();
// EventListener 등록 https://developer.mozilla.org/ko/docs/Web/API/EventListener
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    // 클릭할 시 event객체가 매개변수로 넘어옴
    const {
        target
    } = event; // Object destructuring https://poiemaweb.com/es6-destructuring 참고
    console.log(event)
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        console.log('operator', target.value);
        return;
    }

    if (target.classList.contains('decimal')) {
        console.log('decimal', target.value);
        return;
    }

    if (target.classList.contains('all-clear')) {
        console.log('clear', target.value);
        return;
    }

    console.log('digit', target.value);
});