let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
// const options = document.querySelectorAll(".choice");
const userscorepara = document.querySelector("#user");
const compscorepara = document.querySelector("#computer");
const harish = document.querySelector("#rock");
const userchoice1 = document.querySelector("#user1");
const compchoice1 = document.querySelector("#computer1");


//  const img1 = document.querySelector("#rockimg");

const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
   const rdmidx = Math.floor(Math.random() * 3);
    return options[rdmidx];
};
const GameDraw = (userchoice, compchoice) => {
   compchoice1.innerText = `computer's Choice is ${compchoice} `
        userchoice1.innerText = `your choice is ${userchoice}`
msg.innerHTML = "Game was Draw. Try again";
msg.style.backgroundColor = "#081b31";
}
const showWinner = (userwin , userchoice , compchoice) => {
    if(userwin) {
        console.log("shahanwaj")
        userscore++;
        compchoice1.innerText = `computer's Choice is ${compchoice} `
        userchoice1.innerText = `Your choice is ${userchoice}`
        userscorepara.innerHTML = userscore;
        // msg.innerHTML = "You win! your" ${userchoice} "beats" {$compchoice};
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        console.log("computer win");
        compscore++;
        compscorepara.innerHTML=compscore;
        msg.innerText = `You lose! computer's ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
        
    }
}
const playgame = (userchoice) => {
    console.log("user choice =", userchoice);
    const compchoice = gencompchoice();
    console.log("comp choice =", compchoice);
    if (userchoice === compchoice) {
        GameDraw(userchoice, compchoice);
    } else {
        let userwin = true;
        if (userchoice ==="rock") {
 userwin = compchoice ==="paper" ? false : true;
  } else if (userchoice === "paper") {
    userwin = compchoice === "scissors" ? false : true;
  } if (userchoice === "scissors") {
    userwin = compchoice === "rock" ? false : true;
  }
  showWinner(userwin , userchoice , compchoice);
    }
    // showWinner(user)
}



  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playgame(userChoice);
    });
  });
