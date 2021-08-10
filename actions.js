class calculator {
    constructor(previousElement  , currentElement){
        this.previousElement = previousElement
        this.currentElement = currentElement
        this.clear()
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equal]')
const DeleteButton = document.querySelector('[data-delete]')
const clearButton = document.querySelector('[data-clear]')
const previousElement = document.querySelector('[data-previous]')
const currentElement = document.querySelector('[data-current]')
 
const Calculator = new calculator(previousElement , currentElement)


//////////////// methods ///////////////
function clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
}

function Delete(){
    this.currentOperand = this.currentOperand.toSring().slice(0.-1)
}

function compute(){

    let result
    const prev = parseFloat(this.previousOperand)
    const cur = parseFloat(this.currentOperand)
    if( isNaN(prev) || isNaN(cur)) return
    switch(this.operation){
        case '+' :
            return result = prev + cur
            break
        case '-' :
            return result = prev - cur
            break
        case 'x' :
            return result = prev * cur
            break
        case '/' :
            return result = prev / cur
            break
        default:
            return
            {
                this.currentOperand = result
                this.operation = undefined
                this.previousOperand = ''
            }
        }
    }

function selectOperation(operation){
    if( this.currentOperand === '') return
    if(this.currentOperand !== ''){
        this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
}
 console.log('helllooo')
function appendNumber(number){
    if (number ==='.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toSring() + number.toSring()
       
}

function getDisplay(number){
    const numberString = number.toSring()
    const integerDigits = parseFloat(numberString.split('.')[0])
    const decimalDigits = numberString.split('.')[1]
    let integerDisplay
    if(isNaN(integerDigits)) {
        integerDisplay =  ''
    }
    else{
        integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}` ////////
    } 
    else{
        return integerDisplay
    }
}

function display() {
    this.currentElement.innerText = 
        this.getDisplay(this.currentOperand)
    if (this.operation != null){
        this.previousElement.innerText =
          `${this.getDisplay(this.previousOperand)} ${this.operation}`
    }
    else{
        this.previousElement.innerText = ''
    }
}

//////////// Listeners ///////////////
clearButton.addEventListener('click' , button => {
    Calculator.clear()
    Calculator.display()
})

DeleteButton.addEventListener('click' , button => {
    Calculator.Delete()
    Calculator.display()
})

equalButton.addEventListener('click' , button => {
    Calculator.compute()
    Calculator.display()
})

operationButtons.forEach(button => {
    button.addEventListener('click' , () => {
        Calculator.selectOperation(button.innerText)
        Calculator.display()
    })
})

numberButtons.forEach(button => {
    button.addEventListener('click' , () => {
        Calculator.appendNumber(button.innerText)
        Calculator.display()
    })
})