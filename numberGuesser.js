let toGuessedNumber = Math.floor(Math.random() * 100);
let guessInput = document.getElementById("guessInput");
let result = document.getElementById("result");
let attemptDisplay = document.getElementById("attempts");
let attemptCount = 0;

function guessNumber() {
    let input = guessInput.value;
    const regex = /^[0-9]+$/;

    if (!regex.test(input)) {
        result.innerHTML = "<b>Nur Zahlen zwischen 0-9 erlaubt!</b>";
        removeOldText();
        return;
    }

    let guess = parseInt(input);

    if (guess < 1 || guess > 100) {
        result.innerHTML = "<b>Bitte eine Zahl zwischen 1 und 100 eingeben!</b>";
        removeOldText();
        return;
    }

    attemptCount++;
    updateAttemptDisplay();

    if (guess < toGuessedNumber) {
        result.innerHTML = "<b>Die gesuchte Nummer ist größer als deine Nummer</b>";
        removeOldText();
    } else if (guess > toGuessedNumber) {
        result.innerHTML = "<b>Die gesuchte Nummer ist kleiner als deine Nummer</b>";
        removeOldText();
    } else {
        result.innerHTML = "<b>Gratuliere, die Nummer " + guess + " war die gesuchte Nummer!</b>";
    }


}

function updateAttemptDisplay() {
    attemptDisplay.innerHTML = "Versuche bis zur Lösung: " + attemptCount;
}

function removeOldText() {
    setTimeout(() => {
        result.innerHTML = "";
    }, 3000);
}
