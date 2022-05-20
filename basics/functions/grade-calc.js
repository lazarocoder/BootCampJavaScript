/*let testCalc = function (score, totalScore) {
  let percent = (score / totalScore) * 100

  if (percent >= 90) {
    return `your score is the letter A:${percent}`
  } else if (percent >= 80) {
    return `your score is the letter B: ${percent}`
  } else if (percent >= 70) {
    return `your score is the letter C: ${percent}`
  } else if (percent >= 60) {
    return `your score is the letter D: ${percent}`
  } else {
    return `your score is the letter F: ${percent}`
  }

}
let scores = testCalc(10, 20)
console.log(scores)*/

let testCalc = function (score, totalScore) {
  let percent = (score / totalScore) * 100
  let gradeCal = ''
  if (percent >= 90) {
    return gradeCal = 'A'
  } else if (percent >= 80) {
    return gradeCal = 'B'
  } else if (percent >= 70) {
    return gradeCal = 'C'
  } else if (percent >= 60) {
    return gradeCal = 'D'
  } else {
    return gradeCal = 'F'
  }

}
let scores = testCalc(19, 20)
console.log(`your score is: ${scores}`)
