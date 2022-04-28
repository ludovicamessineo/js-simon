// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// -> Genero 5 numeri random e li metto in un array
// -> Stampo i numeri sulla pagina
// -> Faccio partire un timer di 30 secondi con setInterval
// -> Finiti i 30 secondi creo 5 prompt in cui l'utente deve inserire i numeri che si ricorda
// -> Verifico se i 5 numeri inseriti corrispondono a quelli generati random
// -> Stampo i numeri che sono stati indovinati

// -> Genero 5 numeri random e li metto in un array
const randomNumbers = [];

for (let i = 0; i < 5; i++) {
    const generatedNmb = getRndInteger();
    console.log(generatedNmb);
    randomNumbers.push(generatedNmb);
}

console.log(randomNumbers);

// -> Stampo i numeri sulla pagina
document.getElementById("numbers").innerHTML = `Memorizza questi numeri: ${randomNumbers}`;


// -> Faccio partire un timer di 30 secondi con setInterval
const timerNumbers = document.getElementById("timer-numbers");
let count = parseInt(timerNumbers.textContent);

// TIMING FUNCTION INTERVAL
const timer = setInterval(function() {
    count--;
    timerNumbers.innerHTML = count;
    if (count === 0) {
        clearInterval(timer);
        const hiddenNumbers = document.getElementById("numbers");
        hiddenNumbers.classList.add("hidden")
        const hiddenTimer = document.getElementById("timer-numbers");
        hiddenTimer.classList.add("hidden");
    } 
}, 1000);

// -> Finiti i 30 secondi creo 5 prompt in cui l'utente deve inserire i numeri che si ricorda
// TIMING FUNCTION TIMEOUT
const memoNumbers = [];

setTimeout(() => {
    for (let i = 0; i < 5; i++) {
        const userNumber = parseInt(prompt("Inserisci un numero che ricordi"));
        memoNumbers.push(userNumber);
    }
    console.log(memoNumbers);

    const guessedNumbers = checkCommonItems(randomNumbers, memoNumbers);
    console.log(guessedNumbers);

    showResult(guessedNumbers);
}, 6000);



// FUNCTIONS
function checkCommonItems (originalArray, arrayToCheck) {
    const resultArray = [];
    for (let i = 0; i < arrayToCheck.length; i++) {
        // prelevo un elemento
        const currentElement = arrayToCheck[i];
        // se l'elemento prelevato è incluso nell
        if (originalArray.includes(currentElement)) {
            resultArray.push(currentElement);
        }
    }
    return resultArray;
}

function showResult(guessedNumbersArray) {
    const message = `Ne hai indovinati ${guessedNumbersArray.length}: ${guessedNumbersArray}`;
    document.getElementById("result").innerHTML = message
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * 100) + 1;
  }