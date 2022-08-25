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

function runGame()
function checkAnswer()
function calculate()
function incrementScore()
function incrementWrongAnswer()
function displayAdditionQuestion()
function displaySubtractionQuestion()
function displayMultiplicationQuestion()
function displayDivisionQuestion()