
let secund = +prompt('')

const pack = ( () => { 
    console.log(secund +' секунды');
    secund -= 1
    
 })


setTimeout(pack, 1000)
const interval = setInterval(pack, 1000)
setTimeout(() => {
    clearInterval(interval)
    console.log('отчет завершен!  ');
},secund * 1000)



function calculate(num1, num2, callback) {
    return callback(num1, num2);
  }
  
  function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return "На ноль делить нельзя";
    }
  }
  
  let resultAdd = calculate(5, 3, add); 
  console.log(resultAdd); 
  
  let resultSubtract = calculate(10, 4, subtract); 
  console.log(resultSubtract); 
  
  let resultMultiply = calculate(7, 2, multiply); 
  console.log(resultMultiply); 
  
  let resultDivide = calculate(8, 0, divide); 
  console.log(resultDivide); 
  