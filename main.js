//Initialize the count as 0
//Listen for clicks on the increment button
//Increment the count variable when the button is clicked
//Change the count-el in the HTML to reflect the new count

let saveEl = document.getElementById('save-el');
let countEl = document.getElementById('count-el');
let count = 0

const increment = () => {
  count += 1
  // console.log(count)
  countEl.innerHTML = count
}

const save = () => {
  let countStr = count + ' - '
  saveEl.innerHTML += countStr
  countEl.innerHTML = 0
  count = 0
}



