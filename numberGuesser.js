let toGuessedNumber = Math.floor(Math.random() * 100);
let guessInput = document.getElementById("guessInput");
let result = document.getElementById("result");

function guessNumber() {
    const regex = new RegExp(`/^\d+$/`)
    let guess = parseInt(guessInput.value);
    guess = regex.test(str)
    if (isNaN(guess)) {
        result.innerHTML = "<b> Bitte nummer eingeben, deine Eingabe war keine Nummer"
        removeOldText();
        return;
    }
    if (guess > 100) {
        result.innerHTML = "<b>Deine Eingabe ist über 100, bitte Trage eine Zahl zwischen 1-100 ein"
        removeOldText();
        return;
    }
    if (guess < toGuessedNumber && guess <= 100) {
        result.innerHTML = "<b>Die gesuchte Nummer ist größer als deine Nummer</b>";
        removeOldText();
        return;
    } else if (guess > toGuessedNumber && guess <= 100) {
        result.innerHTML = "<b>Die gesuchte Nummer ist kleiner als deine Nummer</b>";
        removeOldText();
        return;
    }
    else {
        result.innerHTML = "<b>Gratuliere, die Nummer " + guess + "war die gesuchte Nummer </b>";
        removeOldText();
        return;
    }
}
function removeOldText() {
    setTimeout(() => {

        result.innerHTML = "";

    }, 3000);
}