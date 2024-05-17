const day = document.getElementById('day')
const hours = document.getElementById('hour')
const minutes = document.getElementById('minute')
const second = document.getElementById('second')

const dayInput = document.getElementById('dayInput')
const monthInput = document.getElementById('monthInput')
const yearInput = document.getElementById('yearInput')
const btn = document.getElementById('setDateBtn')

let datePicked

btn.addEventListener('click', ()=> {
   const day = parseInt(dayInput.value);
   const month = parseInt(monthInput.value) - 1; 
   const year = parseInt(yearInput.value)
   datePicked = new Date(year, month, day)
   countdown()

})


function countdown() {
   
   const currentDate = new Date()
   const totalSeconds = (datePicked - currentDate) / 1000
   const days = Math.floor(totalSeconds / 3600 / 24)
   const hour = Math.floor(totalSeconds / 3600) % 24
   const minute = Math.floor(totalSeconds / 60) % 60
   const seconds = Math.floor(totalSeconds) % 60
   

   day.innerHTML = days
   hours.innerHTML = hour
   minutes.innerHTML = minute
   second.innerHTML = seconds
}


setInterval(countdown, 1000)