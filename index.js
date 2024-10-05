let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let countHome = 0 
let countGuest = 0

function addOneHome() {
    countHome += 1
    homeScore.innerText = countHome
}

function addTwoHome() {
    countHome += 2
    homeScore.innerText = countHome
}

function addThreeHome() {
    countHome += 3
    homeScore.innerText = countHome
}

function addOneGuest() {
    countGuest += 1
    guestScore.innerText = countGuest
}

function addTwoGuest() {
    countGuest += 2
    guestScore.innerText = countGuest
}

function addThreeGuest() {
    countGuest += 3
    guestScore.innerText = countGuest
}

function resetScore() {
    countHome = 0
    countGuest = 0
    homeScore.innerText = countHome
    guestScore.innerText = countGuest
}
