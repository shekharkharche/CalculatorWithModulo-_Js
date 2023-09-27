function addToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    let result = document.getElementById('result').value;
    try {
        if (result.includes('%')) {
            let parts = result.split('%');
            let num = parseFloat(parts[0]);
            let percentage = parseFloat(parts[1]);
            result = (num * (percentage / 100)).toFixed(2);
        } else {
            result = eval(result).toFixed(2);
        }
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function deleteLastDigit() {
    let display = document.getElementById('result').value; 

    if (display.length > 1) {
        display = display.slice(0, -1);
        document.getElementById('result').value = display;
    } else {
        document.getElementById('result').value = '0'; 
    }
}
