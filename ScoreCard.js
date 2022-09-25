let bb = document.getElementById("input1-el")
let HomeEl = document.getElementById("scoreH-el");
let GuestEl = document.getElementById("scoreG-el");

//This code is for home
function addOne1() {
    HomeEl.textContent = +HomeEl.textContent + 1
}

function addTwo1() {
    HomeEl.textContent = +HomeEl.textContent + 2
}

function addThree1() {
    HomeEl.textContent = +HomeEl.textContent + 3
}

//Below code is for Guest 

function addOne2() {
    GuestEl.textContent = +GuestEl.textContent + 1
}

function addTwo2() {
    GuestEl.textContent = +GuestEl.textContent + 2
}

function addThree3() {
    GuestEl.textContent = +GuestEl.textContent + 3
}

function resetScore() {
    HomeEl.textContent=0;
    GuestEl.textContent = 0;
}
