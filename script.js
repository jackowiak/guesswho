var playButton = document.getElementById("btn-play");
var againButton = document.getElementById("btn-again");
var giveupButton = document.getElementById("btn-giveup");
var typePlayer = document.getElementById("player-guess");
var players = document.getElementsByClassName("player");
var playerz = ["Neymar", "Philippe Coutinho", "Ousmane Dembélé", "Paul Pogba", "Gareth Bale", "Cristiano Ronaldo", "Gonzalo Higuaín", "Romelu Lukaku", "Virgil van Dijk", "Luis Suárez"];
var totalScore = document.getElementById("total-score");
var finalScore = document.getElementsByClassName("final-score")[0];
var timer = document.getElementsByClassName("time-display")[0];
var startGameButton = document.getElementById("btn-start-game");
var mainPage = document.getElementsByClassName("container")[0]
var startPage = document.getElementsByClassName("container-2")[0];


var startCounting;

startGameButton.addEventListener("click", function() {
    startPage.style.display = "none";
    mainPage.style.display = "block";
})

playButton.addEventListener("click", function() {
    playButton.style.display = "none";
    typePlayer.style.display = "inline-block";
    timer.style.color = "#000";
    giveupButton.style.display = "inline-block";
    
    startCounting = setInterval(timeCounter, 1000);
});

againButton.addEventListener("click", function() {
    totalScore.textContent = "0";
    timer.style.color = "#000";
    timer.textContent = "02:00";
    
    totalSeconds = 120;
    startCounting = setInterval(timeCounter, 1000);
    
    for (var j = 0; j < players.length; j++) {
        players[j].textContent = "";
        players[j].parentNode.style.opacity = "0.5";
        players[j].style.color = "#000";
        players[j].style.backgroundColor = "#EEE";
    }
    
    document.getElementsByClassName("result-display")[0].style.display = "none";
})

function checkPlayer() {
            switch(typePlayer.value.toLowerCase()) {
                case "neymar":
                    if (players[0].textContent == "") {
                        players[0].textContent = playerz[0];
                        totalScore.textContent++;
                        players[0].parentNode.style.opacity = "0.75";
                    }
                    break;
                case "philippe coutinho":
                case "coutinho":
                    if (players[1].textContent == "") {
                        players[1].textContent = playerz[1];
                        totalScore.textContent++;
                        players[1].parentNode.style.opacity = "0.75";
                    }
                    break;
                case "ousmane dembélé":
                case "ousmane dembele":
                case "dembele":
                    if (players[2].textContent == "") {
                        players[2].textContent = playerz[2];
                        totalScore.textContent++;
                        players[2].parentNode.style.opacity = "0.75";
                    }
                    break;
                case "paul pogba":
                case "pogba":
                    if (players[3].textContent == "") {
                        players[3].textContent = playerz[3];
                        totalScore.textContent++;
                        players[3].parentNode.style.opacity = "0.75";
                    }
                    break;
                case "gareth bale":
                case "bale":
                    if (players[4].textContent == "") {
                        players[4].textContent = playerz[4];
                        totalScore.textContent++;
                        players[4].parentNode.style.opacity = "0.75";
                    }
                    break;
                case "cristiano ronaldo":
                case "ronaldo":
                    if (players[5].textContent == "") {
                        players[5].textContent = playerz[5];
                        totalScore.textContent++;
                        players[5].parentNode.style.opacity = "0.75";
                    }
                    break;
                case "gonzalo higuaín":
                case "gonzalo higuain":
                case "higuain":
                    if (players[6].textContent == "") {
                        players[6].textContent = playerz[6];
                        totalScore.textContent++;
                        players[6].parentNode.style.opacity = "0.75";
                    }
                    break;
                case "romelu lukaku":
                case "lukaku":
                    if (players[7].textContent == "") {
                        players[7].textContent = playerz[7];
                        totalScore.textContent++;
                        players[7].parentNode.style.opacity = "0.75";
                    }
                    break;
                case "virgil van dijk":
                case "van dijk":
                    if (players[8].textContent == "") {
                        players[8].textContent = playerz[8];
                        totalScore.textContent++;
                        players[8].parentNode.style.opacity = "0.75";
                    }
                    break;
                case "luis suárez":
                case "luis suarez":
                case "suarez":
                    if (players[9].textContent == "") {
                        players[9].textContent = playerz[9];
                        totalScore.textContent++;
                        players[9].parentNode.style.opacity = "0.75";
                    }
                    break;                    
            }
}

function checkResult() {
    function showFinalDisplay() {
        if (totalScore.textContent == "10" || totalSeconds == 0) {
            
            finalScore.textContent = totalScore.textContent;
            document.getElementsByClassName("result-display")[0].style.display = "inline-block";
            timer.style.color = "##CC3700";
            
            for (var z=0; z<players.length; z++) {
                if (players[z].textContent == "") {
                    players[z].textContent = playerz[z];
                    players[z].style.backgroundColor = "#FF3232";
                    players[z].parentNode.style.opacity = "0.75";
                    players[z].style.color = "#fff";
                } else {
                    players[z].style.backgroundColor = "#49A34B";
                    players[z].style.color = "#fff";
                }
            }
        }        
    }
    
    setTimeout(showFinalDisplay, 200);
}

typePlayer.addEventListener("keydown", function(e) {
    if (e.keyCode == "13") {
        checkPlayer();
        checkResult();
        typePlayer.value = "";
    }
})

var totalSeconds = 2 * 60;

function timeCounter() {
    
        var minutes = Math.floor(totalSeconds / 60);
        var seconds = totalSeconds - minutes * 60;
        
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        timer.textContent = minutes + ":" + seconds;
    
        if (totalScore.textContent == "10" || totalSeconds == 0) {
            clearInterval(startCounting);
            checkResult();
        }
    
        
        if (totalSeconds > 0) {
            totalSeconds--;
        }
}

giveupButton.addEventListener("click", function() {
    totalSeconds = 0;
    clearInterval(startCounting);
    
    checkResult();
})