//Selectors
const carolButton = document.querySelector("#carol-button");

//Event Listeners
carolButton.addEventListener("click", playCarol);


const audio1 = new Audio("./sound/carol_of_the_bells.mp3");

//Actions
function playCarol() {
    if (carolButton.innerHTML === "Carol of Bells")
    {
        audio1.play();
        carolButton.innerHTML = "Stop Playing"
    }
    else {
        audio1.pause();
        audio1.currentTime = 0;
        carolButton.innerHTML = "Carol of Bells"
    
    }
}