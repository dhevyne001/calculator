class Calculator{
    constructor(prveious,current){
        this.prveious = prveious
        this.current = current
    }
    clear(){
        this.current = ''
        this.prveious = ''
        this.operation = undefined 

    }
    delete(){

    }
    appendNumber(number){
        if (number === '.' && this.current.includes('.')) return
        this.current = this.current.toString() +  number.toString()
    }
    choose(operation){
        if (this.current === '') return
        if (this.prveious !== ''){
            this.compute()
        }
        this.operation = operation
        this.prveious = this.current
        this.current = '.'


    }
    compute(){
        let computation
        const prev = parseFloat(this.prveious)
        const cur = parseFloat(this.current)
        if (isNaN(prev)|| isNaN(cur)) return
        switch(this.operation){
            case '+':
                computation = prev + cur
                break
            case '-':
                computation = prev - cur
                break
            case '+':
                computation = prev + cur
                break
            case '*':
                computation = prev * cur
                break
            case '/':
                computation = prev / cur
                break
            default:
                return
        }
        this.current = computation
        this.operation = undefined
        this.prveious = ''
        
    }
    updateDisplay(){
        this.current.innerText = this.current
        this.prveious.innerText = this.prveious
     }
}




const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const prveious = document.querySelector('[data-previous]')
const current = document.querySelector('[data-current]')


const calculator = new Calculator(prveious,current)
numberButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})


operationButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button =>{
    calculator.compute()
    calculator.updateDisplay
})