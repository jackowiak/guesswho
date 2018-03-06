var typePlayer = document.getElementById("player-guess"); //takes player's name from input
var players = document.getElementsByClassName("players"); //take's every gap ('?' mark);
var playersArray = ["Neymar", "Philippe Coutinho", "Ousmane Dembélé", "Paul Pogba", "Gareth Bale", "Cristiano Ronaldo", "Gonzalo Higuaín", "Romelu Lukaku"]; //contain every mentioned player

var ifStillInGame = true; //checks if giveup button was pushed

function checkWin() {
    var questionmarkCounter = 8;
    
    for (i = 0; i<players.length; i++) {
        if (players[i].textContent != "?") {
            questionmarkCounter--;
        }
    }
    
    if (questionmarkCounter == 0) {
        $("h1").text("Well done!").css("color", "#00b200").addClass("animated jackInTheBox");
    }
}

function checkPlayer() {
            switch(typePlayer.value.toLowerCase()) {
                case "neymar":
                    if (players[0].textContent == "?") {
                        players[0].textContent = playersArray[0];
                        players[0].style.color = "#00b200";
                        typePlayer.value = "";
                        $("img").eq(0).addClass("animated bounce");
                        $("img").eq(0).attr("src", "img/neymar.jpg").attr("title", "Neymar");                        
                    }
                    break;
                case "philippe coutinho":
                case "coutinho":
                    if (players[1].textContent == "?") {
                        players[1].textContent = playersArray[1];
                        players[1].style.color = "#00b200";
                        typePlayer.value = "";
                        $("img").eq(1).addClass("animated bounce");
                        $("img").eq(1).attr("src", "img/coutinho.jpg").attr("title", "Coutinho");                        
                    }
                    break;
                case "ousmane dembélé":
                case "ousmane dembele":
                case "dembele":
                    if (players[2].textContent == "?") {
                        players[2].textContent = playersArray[2];
                        players[2].style.color = "#00b200";
                        typePlayer.value = "";
                        $("img").eq(2).addClass("animated bounce");
                        $("img").eq(2).attr("src", "img/dembele.jpg").attr("title", "Dembele");                        
                    }
                    break;
                case "paul pogba":
                case "pogba":
                    if (players[3].textContent == "?") {
                        players[3].textContent = playersArray[3];
                        players[3].style.color = "#00b200";
                        typePlayer.value = "";
                        $("img").eq(3).addClass("animated bounce");
                        $("img").eq(3).attr("src", "img/pogba.jpg").attr("title", "Pogba");                        
                    }
                    break;
                case "gareth bale":
                case "bale":
                    if (players[4].textContent == "?") {
                        players[4].textContent = playersArray[4];
                        players[4].style.color = "#00b200";
                        typePlayer.value = "";
                        $("img").eq(4).addClass("animated bounce");
                        $("img").eq(4).attr("src", "img/bale.jpg").attr("title", "Bale");                        
                    }
                    break;
                case "cristiano ronaldo":
                case "ronaldo":
                    if (players[5].textContent == "?") {
                        players[5].textContent = playersArray[5];
                        players[5].style.color = "#00b200";
                        typePlayer.value = "";
                        $("img").eq(5).addClass("animated bounce");
                        $("img").eq(5).attr("src", "img/ronaldo.jpg").attr("title", "Ronaldo");                        
                    }
                    break;
                case "gonzalo higuaín":
                case "gonzalo higuain":
                case "higuain":
                    if (players[6].textContent == "?") {
                        players[6].textContent = playersArray[6];
                        players[6].style.color = "#00b200";
                        typePlayer.value = "";
                        $("img").eq(6).addClass("animated bounce");
                        $("img").eq(6).attr("src", "img/higuain.jpg").attr("title", "Higuain");                        
                    }
                    break;
                case "romelu lukaku":
                case "lukaku":
                    if (players[7].textContent == "?") {
                        players[7].textContent = playersArray[7];
                        players[7].style.color = "#00b200";
                        typePlayer.value = "";
                        $("img").eq(7).addClass("animated bounce");
                        $("img").eq(7).attr("src", "img/lukaku.jpg").attr("title", "Lukaku");                        
                    }
                    break;                  
            }
    
    checkWin();
}

function giveUp() {
    ifStillInGame = false;
    
    $("h1").text("Oh, you can't.").css("color", "#ff6666").addClass("animated shake");
    
    for (j = 0; j < players.length; j++) {
        if (players[j].textContent == "?") {
            switch(j) {
                case 0:
                    players[0].textContent = playersArray[0];
                    players[0].style.color = "#ff6666";
                    $("img").eq(0).addClass("animated flash");
                    $("img").eq(0).attr("src", "img/neymar.jpg").attr("title", "Neymar");
                    break;
                case 1:
                    players[1].textContent = playersArray[1];
                    players[1].style.color = "#ff6666";
                    $("img").eq(1).addClass("animated flash");
                    $("img").eq(1).attr("src", "img/coutinho.jpg").attr("title", "Coutinho");
                    break;
                case 2:
                    players[2].textContent = playersArray[2];
                    players[2].style.color = "#ff6666";
                    $("img").eq(2).addClass("animated flash");
                    $("img").eq(2).attr("src", "img/dembele.jpg").attr("title", "Dembele");
                    break;
                case 3:
                    players[3].textContent = playersArray[3];
                    players[3].style.color = "#ff6666";
                    $("img").eq(3).addClass("animated flash");
                    $("img").eq(3).attr("src", "img/pogba.jpg").attr("title", "Pogba");
                    break;
                case 4:
                    players[4].textContent = playersArray[4];
                    players[4].style.color = "#ff6666";
                    $("img").eq(4).addClass("animated flash");
                    $("img").eq(4).attr("src", "img/bale.jpg").attr("title", "Bale");
                    break;
                case 5:
                    players[5].textContent = playersArray[5];
                    players[5].style.color = "#ff6666";
                    $("img").eq(5).addClass("animated flash");
                    $("img").eq(5).attr("src", "img/ronaldo.jpg").attr("title", "Ronaldo");
                    break;
                case 6:
                    players[6].textContent = playersArray[6];
                    players[6].style.color = "#ff6666";
                    $("img").eq(6).addClass("animated flash");
                    $("img").eq(6).attr("src", "img/higuain.jpg").attr("title", "Higuain");
                    break;
                case 7:
                    players[7].textContent = playersArray[7];
                    players[7].style.color = "#ff6666";
                    $("img").eq(7).addClass("animated flash");
                    $("img").eq(7).attr("src", "img/lukaku.jpg").attr("title", "Lukaku");
                    break;                    
            }
        }
    }
}

var btnCheck = document.getElementById("btn-check");
var btnGiveup = document.getElementById("btn-giveup");

btnCheck.addEventListener("click", function() {
    if (ifStillInGame) {
        checkPlayer();
    }
});

btnGiveup.addEventListener("click", giveUp);

typePlayer.addEventListener("keydown", function(e) {
    if (e.keyCode == 13) {
        if (ifStillInGame) {
            checkPlayer();
        }
    } 
})
