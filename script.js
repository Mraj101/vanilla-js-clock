let music=new Audio("music.mp3");
let turnaudio=new Audio("ting.mp3");
let gameover=new Audio("gameover.mp3");
let isgameover=false;
let turn = "X"; //we take the first turn for x second one for 0
let win=false;
//we check if the value of turn is already X after clicking
//then after the first click we change it to 0
const changeturn = ()=>{
    if(turn === "X")
        return "0";
    else
        return "X";
}

// music.play();
//check if x or 0 wins
function chackwin()
{
    let boxtext=document.querySelectorAll(".boxtext");
    wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    wins.forEach(e=>{ // the first   'e' in the array wins is [0,1,2] and e[0] is 0 and e[1] is 1
        // so boxtext[e[0]] is equivalent to boxtext[0] which means , if you consider boxtext array there are nine spans in the html so there should be 

        if( (boxtext[e[0]].innerText === boxtext[e[1]].innerText)  &&  (boxtext[e[2]].innerText === boxtext[e[1]].innerText)  &&  (boxtext[e[0]].innerText !== ''))
        {
                document.querySelector('.info').innerText= boxtext[e[0]].innerText +" won";
                // document.querySelector('.img').getElementsByTagName('img')[0].style.visibility="visible";

                document.querySelector('.img').getElementsByTagName('img')[0].style.width="40vh";
                music.play();
                isgameover=true;
                win=true;
        }
        if(isgameover==true &&  win==false){
                document.querySelector('.info').innerHTML='Turn for '+turn;

        }
    });
}




document.querySelector('.info').innerHTML='Turn for '+turn;
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
            chackwin();
            if(!isgameover){
                document.querySelector('.info').innerHTML='Turn for '+turn;
            }

        }
    });
});

let boxtext=document.querySelectorAll(".boxtext");
let reset=document.querySelector('button');
Array.from(boxtext).forEach(element =>{
    reset.addEventListener('click',()=>{
        element.innerText="";
        turn="X";
        document.querySelector('.info').innerHTML='Turn for '+turn;
        music.pause();
        document.querySelector('.img').getElementsByTagName('img')[0].style.width="0";

    });
   

});





// queries
// queries










// queries
// queries

