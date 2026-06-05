let userscore=0;
let compscore=0;

const choices= document.querySelectorAll(".choice");
const gencomchoice = () =>{
    const options = ["rock","paper","scissor"];
    let idx = Math.floor(Math.random()*3);
    return options[idx];
}

const playGame = (userchoice) => {
    console.log(`use choice ${userchoice}`);
    const compchoice = gencomchoice();
    console.log(`computer choice ${compchoice}`);

if (compchoice===userchoice){
    const text = document.querySelector("#msg");
    text.innerText = `Match Draw, both select ${userchoice}`;
    return;
}

let usercase= false;

if(
    (userchoice=== "paper" && compchoice === "rock") || 
    (userchoice=== "scissor" && compchoice === "paper") ||
    (userchoice=== "rock" && compchoice === "scissor")
){
    usercase = true;
}

if( usercase === true){
    userscore++;
    const text = document.querySelector("#user-score");
    text.innerText =  userscore;
    document.querySelector("#msg").innerText = `You Win`;
}

else {
    compscore++ ;
    const text = document.querySelector("#comp-score");
    text.innerText =  compscore;
    document.querySelector("#msg").innerText = `Computer Win`;

}


}

choices.forEach((choice) => {
    choice.addEventListener("click", ()=> {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);

    });
});





