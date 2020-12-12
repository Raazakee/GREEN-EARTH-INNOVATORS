// variables / queryselectors
var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");
// clear scores event listeners 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// local stroage and loop
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);
if (allScores !== null) {
    for (var i = 0; i < allScores.length; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);
    }
}
// index page event listener
goBack.addEventListener("click", function () {
    window.location.replace("./fungame.html");
});