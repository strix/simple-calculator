window.addEventListener('click', e => {
  switch (e.target.className) {
    case 'number':
      console.log('handle number')
      console.log(Number(e.target.innerHTML) ? Number(e.target.innerHTML) : e.target.innerHTML)
      break
    case 'operation':
      console.log('handle operation')
      console.log(e.target.value)
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

const calculator = () => {

}
