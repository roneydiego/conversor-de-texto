function convertCase() {
    var convertOption = this.classList[1];
    var userInput = document.querySelector(".user-input").value;
    var convertedText;
    if (convertOption === "uppercase") {
        convertedText = userInput.toUpperCase();
    }
    else if (convertOption === "lowercase") {
        convertedText = userInput.toLowerCase();
    }
    else if (convertOption === "capitalize") {
        var firstLetter = userInput.slice(0, 1);
        firstLetter = firstLetter.toUpperCase();
        convertedText = firstLetter + userInput.slice(1, userInput.lenght);
    }
    else {
        console.log("option not available");
        convertedText = "option not available";
    }

    document.querySelector(".convertedText").textContent = convertedText;
}


function countText() {
    var userInput = document.querySelector(".user-input").value;
    var charCount = userInput.length;
    var wordCount = userInput.split("\n").join(" ");
    wordCount = wordCount.split(" ").length;
    if (charCount === 0) {wordCount = 0;}
    document.querySelector(".word-count").textContent = "Palavras: " + wordCount;
    document.querySelector(".char-count").textContent = "Caracteres: " + charCount;
}


for (var i = 0; i < 3; i++) {
    document.querySelectorAll(".option")[i].addEventListener("click", convertCase);
}

document.querySelector(".user-input").addEventListener("keyup", countText);