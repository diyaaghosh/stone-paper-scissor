let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara=document.querySelector("#update1")
const compscorepara=document.querySelector("#update2")
const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawgame = () => {
    console.log("game was draw");
    msg.innerText = "Draw... Play Again!";
    msg.style.backgroundColor = "blue";
};

const showwinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        console.log("You win!");
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText = `You win! Your ${userchoice} beats Computer's ${compchoice};`
        msg.style.backgroundColor = "green";
    } else {
        console.log("You lose!");
        msg.innerText = `You lose! Computer's ${compchoice} beats Your ${userchoice};`
        msg.style.backgroundColor = "red";
        compscore++;
        compscorepara.innerText=compscore;
    }
};

const playgame = (userchoice) => {
    console.log("user choice =", userchoice);
    const compchoice = genCompChoice();
    console.log("computer choice =", compchoice);

    if (userchoice === compchoice) {
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            if (compchoice === "paper") {
                userwin = false;
            }
        } else if (userchoice === "paper") {
            if (compchoice === "rock") {
                userwin = true;
            } else {
                userwin = false;
            }
        } else {
            if (compchoice === "paper") {
                userwin = true;
            } else {
                userwin = false;
            }
        }

        showwinner(userwin, userchoice, compchoice);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("choice is selected", choice);
        playgame(userchoice);
    });
});
