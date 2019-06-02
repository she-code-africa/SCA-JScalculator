const keys = document.querySelector('.calculator__keys');
const calculator = document.querySelector('.calculator');
const display = document.querySelector('.calculator__display');

const calculate = (a, operator, b) => {
    let result = '';
    if (operator === 'add') {
        result = parseFloat(a) + parseFloat(b);
    } else if (operator === 'subtract') {
        result = parseFloat(a) - parseFloat(b);
    } else if (operator === 'divide') {
        result = parseFloat(a) / parseFloat(b);
    } else if (operator === 'multiply') {
        result = parseFloat(a) * parseFloat(b);
    }

    return result;
}

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const currentDisplay = key.textContent;
        const displayedContent = display.textContent;

        Array.from(key.parentNode.children)
        .forEach(p => p.classList.remove('is-pressed'));

        const previousKey = calculator.dataset.previousKeyType;

        if (!action) {
            console.log('number key');
            if (displayedContent === '0' || previousKey === 'operator') {
                display.textContent = currentDisplay;
                console.log(displayedContent);
                console.log(currentDisplay);
            }
            else {
                display.textContent = displayedContent + currentDisplay;
            }
        }

        if (action === 'decimal') {
            console.log('decimal key');
            display.textContent = displayedContent + '.';
        } 

        if (action === 'add' ||
            action === 'multiply' ||
            action === 'divide' ||
            action === 'subtract') {
            console.log('operator key');
            key.classList.add('is-pressed');

            calculator.dataset.previousKeyType = 'operator';

            calculator.dataset.firstValue = displayedContent;
            calculator.dataset.operator = action;
        }
       

        if (action === 'clear') {
            console.log('clear key');
        }

        if (action === 'calculate') {
            console.log('calculate key');
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedContent;

            display.textContent = calculate(firstValue, operator, secondValue);
        }


        
    }



});