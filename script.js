var greetingsBtn = document.getElementById("greetingsButton"), //submit button on index.html page
    helloBtn = document.getElementById("helloButton"),      //hello button on index.html page
    howdyBtn = document.getElementById("howdyButton"),      //howdy button on index.html page
    backatyaBtn = document.getElementById("backatyaButton"), //back at ya button on index.html page
    userInputTxt = document.getElementById("userInput"), //textbox to accept user input from index.html page
    resetTxtBox = document.getElementById("startOver"), //clear contents in text box
    displayDiv = document.getElementById("printedText"); //div that will host the display of user input typed into text box

    greetingsBtn.addEventListener("click", function() {
            displayDiv.innerText = greetingsBtn.value + " " + userInputTxt.value;
    });

    helloBtn.addEventListener("click", function() {
            displayDiv.innerText = helloBtn.value + " " + userInputTxt.value;
    });

    howdyBtn.addEventListener("click", function() {
            displayDiv.innerText = howdyBtn.value + " " + userInputTxt.value;
    });

    backatyaBtn.addEventListener("click", function() {
            displayDiv.innerText = backatyaBtn.value + " " + userInputTxt.value;
    });

    resetTxtBox.addEventListener("click", function() {
            displayDiv.innerHTML = " ";
    });