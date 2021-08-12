class calculator {
    constructor(previousElement  , currentElement){
        this.previousElement = previousElement
        this.currentElement = currentElement
        clear()
    }
}


const numberButtons = document.getElementById("number").innerText
const operationButtons = document.getElementById("operation").innerText
const equalButton = document.getElementById("equal").innerText
const DeleteButton = document.getElementById("delete").innerText
const clearButton = document.getElementById("clear").innerText
const previousElement = document.getElementById("previous").innerText
const currentElement = document.getElementById("current").innerText
 
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
    if(this.previousOperand !== ''){
        compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
}

function appendNumber(number){
    if (number ==='.' && currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toLocaleString() + number.toLocaleString()
       
}

function getDisplay (number){
    const numberString = number.toLocaleString()
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
    this.currentElement.textContent = this.getDisplay(this.currentOperand)
    if (this.operation != null){
        this.previousElement.textContent =
          `${this.getDisplay(this.previousOperand)} ${this.operation}`
    }
    else{
        this.previousElement.innerText = ''
    }
}

//////////// Listeners ///////////////
clearButton.addEventListener('click' , button => {
    clear()
    display()
})

DeleteButton.addEventListener('click' , button => {
    Delete()
    display()
})

equalButton.addEventListener('click' , button => {
    compute()
    display()
})

operationButtons.forEach(button => {
    button.addEventListener('click' , () => {
        selectOperation(button.innerText)
        display()
    })
})

numberButtons.forEach(button => {
    button.addEventListener('click' , () => {
        appendNumber(button.innerText)
        display()
    })
})

/*
const arr = ["sal" , "hi"]
console.log(arr.toLocaleString())
help = document.getElementById("previous").innerText
alert(help)*/