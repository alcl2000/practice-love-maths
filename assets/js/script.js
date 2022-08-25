//event listeners
console.log('hello');
document.addEventListener('DOMContentLoaded', 'function()');{
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons){
        button.addEventListener('click','function()');{
            if (this.getAttribute('data-type')==='submit'){
                alert = ('You Clicked Submit');
            }
            else{
                let gameType = this.getAttribute('data-type');
                alert = (`You Clicked ${gameType}`);
            }
        }
    }
}

/* 
* The main game loop
* generates two random numbers between 1-25 for math problems
*/
function runGame(){
    
    let num1 = Math.floor(Math.random()*25 + 1);
    let num2 = Math.floor(Math.random()*25 + 1);
}

runGame()
function checkAnswer()
function calculate()
function incrementScore()
function incrementWrongAnswer()
function displayAdditionQuestion()
function displaySubtractionQuestion()
function displayMultiplicationQuestion()
function displayDivisionQuestion()