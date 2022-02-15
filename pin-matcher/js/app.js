document.getElementById('generate-pin').addEventListener('click', function() {    
    
     
    document.getElementById('pin-input').value = getpin();
    
})

function getpin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';

    if (pinString.length == 4){
        return pin;
    }
    else{
        console.log('got three digit pin', pin);
        return getpin();
    }
}


// calculater //

document.getElementById('keypad').addEventListener('click', function(event){
    const numbers = event.target.innerText;    
    const calcInput = document.getElementById('typed-numbers');

    if (isNaN(numbers)){        
        if( numbers == 'C'){
            calcInput.value = '';
        }
    }
    else {
        const priviouCalcValue = calcInput.value;
        const newCalcValue = priviouCalcValue + numbers;
        calcInput.value = newCalcValue;
    }
})


document.getElementById('submit-btnn').addEventListener('click', function() {

    const pin = document.getElementById('pin-input').value;
    const inputNumbers = document.getElementById('typed-numbers').value;

    const errorMessage = document.getElementById('notify-faild');
    const successMessage = document.getElementById('notify-success');

    if ( pin == inputNumbers ){        
        errorMessage.style.display = 'none';
        successMessage.style.display = 'block';
        
    }
    else{
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
})