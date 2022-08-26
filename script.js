//event listeners

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }
    runGame("addition");
});
/** 
* The main game loop
* generates two random numbers between 1-25 for math problems
*/
function runGame(gameType){
    
    let num1 = Math.floor(Math.random()*25 + 1);
    let num2 = Math.floor(Math.random()*25 + 1);

    if(gameType === 'addition'){
        displayAdditionQuestion(num1,num2);
    }
    else{
        alert(`Uknown gametype ${gameType}`);
        throw `Unknown gametype ${gameType}. Aborting`;
    }
};
/**
 * gets the operands and operators from the DOM and calculates the answer
 * returns the correct answer
 */
function checkAnswer(){
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = calculatedAnswer[0] === userAnswer;

    if (isCorrect){
        alert('You got it right! :)')
        incrementScore();
    } else {
        alert(`oh dear, you got it wrong :(. The correct answer was ${calculatedAnswer[0]}`)
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);

}
function calculateCorrectAnswer(){
        let operand1 = parseInt(document.getElementById('operand1').innerText);
        let operand2 = parseInt(document.getElementById('operand2').innerText);
        let operator = document.getElementById('operator').innerText;
    
        if( operator === '+'){
            return [operand1 + operand2, 'addition']
        }
        else{
            alert(`unimplemented game ${operator}`)
            throw`unimplemented game ${operator}. Aborting`;
        }
}
function incrementScore(){
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
}
function incrementWrongAnswer(){
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;
}
/**
 * changes the operater to +, adds two operands for the game mechanism
 */
function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
};

function displaySubtractionQuestion(operand1,operand2){
    document.getElementById('operand1').textContent = 'operand1';
    document.getElementById('operand2').textContent = 'operand2';
    document.getElementById('operator').textContent = '-';
}
function displayMultiplicationQuestion(operand1,operand2){
    document.getElementById('operand1').textContent = 'operand1';
    document.getElementById('operand2').textContent = 'operand2';
    document.getElementById('operator').textContent = 'x';
}
function displayDivisionQuestion(operand1,operand2){
    document.getElementById('operand1').textContent = 'operand1';
    document.getElementById('operand2').textContent = 'operand2';
    document.getElementById('operator').textContent = '/';
}
