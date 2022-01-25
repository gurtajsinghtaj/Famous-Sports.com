// console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("click.wav")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;
var Playera = document.getElementById('Playera').value
var Playerb = document.getElementById('Playerb').value
var playerValue = true

//Player info logic to show game

function submit() {

    var Playera = document.getElementById('Playera').value
    var Playerb = document.getElementById('Playerb').value
    var p1 = document.getElementById('p1')
    var p2 = document.getElementById('p2')
    p1.innerHTML = "Player 1 :" + Playera + " (X)"
    p2.innerHTML = "Player 2 :" + Playerb + " (0)"

    if (Playera === "" || Playerb === "") {
        var PlayerINFOH1 = document.getElementById('PlayerINFOH1');
        PlayerINFOH1.innerHTML = "Please Enter Both Players names"
        PlayerINFOH1.style.color = 'red';
        gameover.play();
    }
    else {
        var addClass = document.getElementById("game");
        addClass.classList.remove('AdditionDisplayNoneClass')
        addClass.classList.add('AdditionDisplayBlockClass')
        var addClassToDisplayNone = document.getElementById('PlayerINFO')
        addClassToDisplayNone.classList.remove('AdditionDisplayBlockClass')
        addClassToDisplayNone.classList.add('AdditionDisplayNoneClass')
        var chatbox = document.getElementById("chatbox")
        chatbox.classList.add('displayBockFlexANDDirection')
        chatbox.classList.remove('AdditionDisplayNoneClass')

        gameover.play();
    }
}





// Function to change the turn
const changeTurn = () => {

    return turn === "X" ? "0" : "X"
}

// Function to check for a win
const checkWin = (turn) => {
    var Playera = document.getElementById('Playera').value
    var Playerb = document.getElementById('Playerb').value
    var t = turn

    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {

            if (t === 'X') {
                document.querySelector('.info').innerText = " You Won " + Playerb
                isgameover = true
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
                document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
                document.querySelector(".line").style.width = "20vw";
                music.play()

            }
            else {
                document.querySelector('.info').innerText = "You Won " + Playera
                isgameover = true
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
                document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
                document.querySelector(".line").style.width = "20vw";
                music.play()

            }



        }
    })
}

// Game Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        checkWin();
        if (boxtext.innerText === '' && isgameover === false) {
            boxtext.innerText = turn;
            checkWin(turn);
            turn = changeTurn();
            audioTurn.play();
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            checkWin(turn);
        }
        else {

            let boxes = document.getElementsByClassName("box");
            Array.from(boxes).forEach(element => {
                let boxtext = element.querySelector('.boxtext');
                element.addEventListener('click', () => {
                    if (boxtext.innerText === '') {
                        audioTurn.play();
                        document.getElementsByClassName("info")[0].innerText = "Please Reset to play again ";
                    }

                })
            })
        }
    })
})

// Add onclick listener to reset button
function reset() {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false
    gameover.play();
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
    music.pause();
}

// change player function 

function changePlayer() {
    var addClass = document.getElementById("game");
    addClass.classList.remove('AdditionDisplayBlockClass')
    addClass.classList.add('AdditionDisplayNoneClass')
    var addClassToDisplayNone = document.getElementById('PlayerINFO')
    addClassToDisplayNone.classList.remove('AdditionDisplayNoneClass')
    addClassToDisplayNone.classList.add('AdditionDisplayBlockClass')
    document.getElementById("Playerb").value = ""
    document.getElementById("Playera").value = ""
    reset();
}


// chatbox Code 
function SendMessage() {
    var Playera = document.getElementById('Playera').value
    var Playerb = document.getElementById('Playerb').value
    var ChatInput = document.getElementById('ChatInput')
    var ChatInput = document.getElementById('ChatInput').value

    ChatInput.innerHTML = Playera + ":"
    if (playerValue === true) {
        var chatBody = document.getElementById("chatBody")
        tag = document.createElement("p");
        var text = document.createTextNode(Playera + ": " + ChatInput)
        tag.appendChild(text);
        chatBody.appendChild(tag);
        playerValue = false;
        document.getElementById('ChatInput').value = ": "
    }
    else {
        var chatBody = document.getElementById("chatBody")
        tag = document.createElement("p");
        var text = document.createTextNode(Playerb + " : " + ChatInput)
        tag.appendChild(text);
        playerValue = true;
        chatBody.appendChild(tag);
        document.getElementById('ChatInput').value = ": "

    }

}
