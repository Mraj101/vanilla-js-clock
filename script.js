let music=new Audio("music.mp3");
let turnaudio=new Audio("ting.mp3");
let gameover=new Audio("gameover.mp3");
let isgameover=false;
let turn = "X"; //we take the first turn for x second one for 0

//we check if the value of turn is already X after clicking
//then after the first click we change it to 0
const changeturn = ()=>{
    if(turn === "X")
        return "0";
    else
        return "X";
}


//check if x or 0 wins
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
        let boxtext=element.querySelector(".boxtext");
        if((boxtext.e[0]===boxtext.e[1])  &&  (boxtext.e[2]===boxtext.e[1])  &&  (boxtext.e[0]!==' '))
        {
                isgameover=true;
                document.querySelector('.info').innerText=boxtext.e[0]+"won";
        }
    });
}


let boxes=document.getElementsByClassName("box");//all the box classes are selected

//turning all of them into array and accessing them with for each loop
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector(".boxtext");
    //as array elements are inside the elements of for each 
    //we add eventListener to the element(1st box then 2nd box and so on)
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){//if the span inside the box is empty
            boxtext.innerText=turn;//default turn is X
            turnaudio.play();//this sound will play
            turn=changeturn();//after putting X turn will change to 0
            // checkwin();

            if(!isgameover){
                document.querySelector('.info').innerHTML='Turn for '+turn;
            }

        }
    });
});
