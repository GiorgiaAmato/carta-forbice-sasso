//Oggetto = descrizione di un elemento
var score = {
    userScore: 0,
    cpuScore: 0
}
var userPick;
var cpuPick;

//Array dell'oggetto
var allOptions = [
    {
        name: "carta",
        img: "img/carta.png"
    },
    {
        name: "forbice",
        img: "img/forbice.png"
    },
    {
        name: "sasso",
        img: "img/sasso.png"
    }
]


//////////////////// Value userPick /////////////////////
var possibleUserPick = document.getElementsByClassName("user-chioce");

//Ciclo For, seleziona ogni elemento dell'oggetto possibleUserPick e al click esegue la function OnUserPick
for (let i = 0; i < possibleUserPick.length; i++) {
    possibleUserPick[i].addEventListener('click', onUserPick) 
}

function onUserPick() {
    //this si riferisce all'elemento cliccato, mentre dataset.name è ricavabile dall'oggetto img.user-chioce
    userPick = this.dataset.name;
    generateCpuPick();

    //Memorizza i valori name e immagine e li inserisce nella pagina
    var cpuPickImg = "<img src='" + cpuPick.img + "'/>"
    var cpuPickText = "<h3>Computer:</h3>"
    document.getElementById("computer-choice").innerHTML = cpuPickText + cpuPickImg;
    //Visualizza risultato partita
    document.getElementById("result").innerHTML = checkWhoWon();
        //Aggiunge alla pagina il valore dello score per user e pc
    document.getElementById("player-score").innerHTML = score.userScore;
    document.getElementById("cpu-score").innerHTML = score.cpuScore;
}


//////////////////// Value cpuPick /////////////////////

function generateCpuPick() {
    cpuPick = allOptions[Math.floor(Math.random() * allOptions.length)];
}

//Verifica il risultato della partita e aggiorna il punteggio dell''oggetto score
function checkWhoWon () {
    if(userPick == cpuPick.name) {
    return "Hai pareggiato";
} else {
        if(userPick == "sasso") {
            if(cpuPick.name == "forbice") {
                score.userScore++;
                return "Hai vinto";
            } else {
                score.cpuScore++;
                return "Hai perso";
            } 
        } 
        
        if (userPick == "carta") {
            if (cpuPick.name == "sasso") {
                score.userScore++;
                return "Hai vinto";
            } else {
                score.cpuScore++;
                return "Hai perso";
            } 
        } 
        
        if (userPick == "forbice") {
            if (cpuPick.name == "carta") {
                score.userScore++;
                return "Hai vinto";
            } else {
                score.cpuScore++;
                return "Hai perso";
            }
        }
    }
    document.getElementsByClassName("result-container").style.backgroundColor = "red"
}

    
