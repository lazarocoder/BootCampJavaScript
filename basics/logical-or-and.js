let temp = 55

if (temp >= 60 && temp <= 90) {
  console.log('It is pretty nice out')
} else {
  console.log('Oh, what do you want to do ?')
}

let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log('Only offer up vegan dishes')
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log('Make sure to offer up some vegan options') 
} else {
  console.log('Offer up anything on the menu')
}
