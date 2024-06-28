function comparetext() {
    const input1Element = document.getElementById("input1");
    const input2Element = document.getElementById("input2");
    const resultElement = document.getElementById("match-result-text");
    const btn = document.getElementById("button");


    if (input1Element.value.length == " ") {
        resultElement.innerText = "Please enter at least 1 words in both text areas.";
        resultElement.style.color = "black";
    }
    else if (input1Element.value == input2Element.value) {
        resultElement.innerText = "Matched...";
        resultElement.style.color = "green";
    }
    else {
        resultElement.innerText = "Not Matched...";
        resultElement.style.color = "red";
    }
}

