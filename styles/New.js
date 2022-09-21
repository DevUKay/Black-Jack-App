
// let age = 100;

// if (age < 100) {
//   console.log('Not Eligible')
// } else if ( age === 100) {
//   console.log ('Here is your birthday card from the king')
// } else {
//   console.log('Not elebible, you have already gotten one')
// }

///////////////////////////


let  cards = [ ]
let  sum = 0
let  hasBlackJack = false;
let  isAlive = false;
let  message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")


function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 14)
    if (randomNumber < 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "

for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
}

    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = 'Do you want to draw a new card? '
    } else if (sum === 21) {
        message = "You've got Blackjack! "
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
}


function newCard() {

    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
    

}

/////////////////////////

// let cardCount = [7, 3, 9]

// for (let i = 0; i < cardCount.length ; i += 1) {
//     console.log(cardCount[i])
// }

////////////////////////////////

// let sentence = [ "Hello","my", "name" , "is" , "kingsley" ]
// let greetingEl = document.getElementById("greeting-el")

// for (let i = 0; i < sentence.length; i++) {
//     greetingEl.textContent += sentence[i] + " "
// }

//////////////////////////////////////////////

// let player1Time = 102
// let player2Time = 107

// function getFastestRaceTime() {
//     if (player1Time < player2Time) {
//         return player1Time
//     } else if (player2Time < player1Time) {
//         return player2Time
//     } else {
//         return player1Time
//     }
// }



// function totalRaceTime() {
//     return player1Time + player2Time
// }

// let totalTime = totalRaceTime()

// console.log(totalTime)

///////////////////////////////////////////////


// function rollDice() {
//     let randomNumber = Math.floor( Math.random() * 6 ) + 1
//     return randomNumber
// }

// console.log( rollDice() )


// let flooredNumber = Math.floor(5.45632)

// console.log(flooredNumber)

////////////////////////////////////////



let listings = {
    roomType: "private",
    price: 190,
    Available: true,
    specs: [ 'big', 'castle', 'grey', 'landlocked','natural']
}

console.log('listings.price')
