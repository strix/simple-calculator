function Calculator () {
  this.total = 0
  this.operand = ''
  this.handleOperand = (operand) => {
    if (this.operand) {
      // call function based on operand
      this.setText(total)
    }
    this.operand = operand
  }
  this.textBox = document.getElementById('textBox')
  this.add = (num) => {
    this.total += num
  }
  this.subtract = (num) => {
    this.total -= num
  }
  this.multiply = (num) => {
    this.total *= num
  }
  this.divide = (num) => {
    this.total /= num
  }
  this.setText = (text) => {
    this.textBox.value = String(text)
  }
  this.clear = () => {
    this.total = 0
    this.setText('')
  }
  this.equals = () => {
    this.setText(total)
  }
}

const calculator = new Calculator()

window.addEventListener('click', e => {
  switch (e.target.className) {
    case 'number':
      console.log('handle number')
      const num = Number(e.target.innerHTML) ? Number(e.target.innerHTML) : e.target.innerHTML
      calculator.setText(num)
      break
    case 'operation':
      console.log('handle operation')
      console.log(e.target.value)
      calculator.handleOperand(e.target.value)
      break
    case 'equal':
      console.log('handle equal')
      console.log(e.target.innerHTML)
      break
    case 'AC':
      console.log('handle AC')
      break
    case 'CE':
      console.log('handle CE')
      break
    default:
      console.log('not recognized')
      break
  }
})

