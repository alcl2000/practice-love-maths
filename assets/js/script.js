//event listeners
console.log('hello');
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
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

    if(gameType == 'addition'){
        displayAdditionQuestion(num1,num2);
    }
    else{
        alert(`Uknown gametype ${gameType}`);
        throw `Unknown gametype ${gameType}. Aborting`;
    }
};

 function checkAnswer(){

}
function calculate()
function incrementScore()
function incrementWrongAnswer()
/**
 * changes the operater to +, adds two operands for the game mechanism
 * @param {num1} operand1 
 * @param {num2} operand2 
 */
function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = 'operand1';
    document.getElementById('operand2').textContent = 'operand2';
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
