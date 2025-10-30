const words = [
    "apple",
    "banana",
    "orange",
    "watermelon",
    "grape",
    "kiwi",
    "strawberry",
    "mango",
];


let selectedWord = ""; // Define selectedWord outside of DOMContentLoaded scope
let displayWord = ""; // Define displayWord outside of DOMContentLoaded scope

document.addEventListener("DOMContentLoaded", function () {
    resetGame(); // Start the game on page load

    // Attach the guessLetter function to the submit button
    document.getElementById("submit-button").addEventListener("click", guessLetter);

    
});

// Function to reset the game
function resetGame() {
    // Get random word from the list
    let randomIndex = Math.floor(Math.random() * words.length);
    selectedWord = words[randomIndex];

    // Display the partially revealed word
    displayWord = revealLetters(selectedWord);
    document.getElementById("displayWord").textContent = displayWord;

    // Clear the guessed letters
    document.getElementById("guessed-letters").textContent = "";

    // Clear the input field
    document.getElementById("letter-input").value = "";
}

// Function to check Guessed letter
function guessLetter() {
    let inputElement = document.getElementById("letter-input");

    // Get the guessed letter
    let letter = inputElement.value.toLowerCase().trim(); // Trim whitespace from the input

    // Check if the input is empty
    if (!letter) {
        alert("Empty input. Please enter a letter.");
        return;
    }

    // Clear the input field
    inputElement.value = "";

    // Check if the guessed letter is correct
    if (selectedWord.includes(letter)) {
        // Update the display with the correctly guessed letter
        let updatedDisplay = "";
        for (let i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i] === letter || displayWord[i] !== "_") {
                updatedDisplay += selectedWord[i];
            } else {
                updatedDisplay += "_";
            }
        }
        displayWord = updatedDisplay; // Update displayWord to retain revealed letters
        document.getElementById("displayWord").textContent = displayWord; // Update displayed word

        // Check if all letters have been guessed
        if (!updatedDisplay.includes("_")) {
            alert("Congratulations! You guessed the word correctly!");
            resetGame(); // Reset the game after guessing the word correctly
        }
    } else {
        alert("Incorrect guess!");
    }
}

// Function to randomly reveal some letters of the word
function revealLetters(word) {
    let revealedLettersCount = Math.floor(word.length / 3); // Adjust the proportion as needed
    let revealedIndices = [];
    while (revealedIndices.length < revealedLettersCount) {
        let randomIndex = Math.floor(Math.random() * word.length);
        if (!revealedIndices.includes(randomIndex)) {
            revealedIndices.push(randomIndex);
        }
    }
    let revealedWord = "";
    for (let i = 0; i < word.length; i++) {
        if (revealedIndices.includes(i)) {
            revealedWord += word[i];
        } else {
            revealedWord += "_";
        }
    }
    return revealedWord;
}
