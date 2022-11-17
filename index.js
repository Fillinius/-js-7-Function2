const getSumOfNumbers = function (number, type = 'odd') {
  if (!number || typeof number != 'number') {
    return NaN
  }

  let sum = 0
  for (let i = 0; i <= number; i++) {
    if (type === '') {
      sum += i
    } else if (type === 'even') {
      if (i % 2 === 0) {
        sum = +i
      }
    } else if (type === 'odd') {
      if (i % 2 != 0) {
        sum = +i
      }
    }
  }
  return sum
}
console.log(getSumOfNumbers('4', 'odd'))
console.log(getSumOfNumbers(10, 'odd'))
console.log(getSumOfNumbers(10, 'even'))
console.log(getSumOfNumbers(10, ''))
