
const meter = 3.281
const liter = 0.264
const kilogram = 2.204
const feet = 0.305
const gallon = 3.785
const pound = 0.454

const inputEl = document.getElementById("input-el")
const btntEl = document.getElementById("btn-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

btntEl.addEventListener("click" , function() {
    lengthEl.innerHTML = `
    <p id="length-el" class="converted">
    ${inputEl.value} meters = ${(inputEl.value * meter).toFixed(3)} feet | 
    ${inputEl.value} feet = ${(inputEl.value * feet).toFixed(3)} meters
    `
    volumeEl.innerHTML = `
    <p id="volume-el" class="converted">
    ${inputEl.value} liters = ${(inputEl.value * liter).toFixed(3)} gallons | 
    ${inputEl.value} gallons = ${(inputEl.value * gallon).toFixed(3)} liters</p>
    `

    massEl.innerHTML = `
    <p id="mass-el" class="converted">
    ${inputEl.value} kilos = ${(inputEl.value * kilogram).toFixed(3)} pounds | 
    ${inputEl.value} pounds = ${(inputEl.value * pound).toFixed(3)} kilos</p>
    `
   

})
