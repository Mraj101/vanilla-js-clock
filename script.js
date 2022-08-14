let music=new Audio("music.mp3");
let turnaudio=new Audio("ting.mp3");
let gameover=new Audio("gameover.mp3");

let turn = "X";
const changeturn = ()=>{
    if(turn === "X")
        return "0";
    else
        return "X";
}

function chackwin()
{
    wins=[
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [1,5,9],
        [3,5,7]
    ];
    wins.forEach(e=>{
        if(e[0])
    })
}

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText=turn;
            turnaudio.play();
            turn=changeturn();
            checkwin();
            document.querySelector('.info').innerHTML='Turn for '+turn;

        }
    });
});
