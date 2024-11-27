let boxes=document.querySelectorAll(".boxes");
let para=document.querySelector(".makeit");
let newgame=document.querySelector(".newgame");
let resetbtn=document.querySelector(".reset");
let hide=document.querySelector(".hide");


const patterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
//any one player symbol true x or o
let player0=true;



//making all btn enable and inner text empty
const enable=()=>{
for (let box of boxes){
    box.innerText="";
    box.disabled=false;
    


}
};


//new game btn and reset btn
const regame=()=>{
    hide.classList.remove("removehide");
    hide.classList.add("hide");
    enable();
    player0=true;
   
};


//if game is draw
function draw(){
    para.innerText="Game is DRAw";
    hide.classList.remove("hide");
    hide.classList.add("removehide");
   btndisable();

}


//allowing user to click and alternative and make btn disable
let count=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
if(player0===true){
    box.innerText="O";
    player0=false;
}else{
    box.innerText="X";
    player0=true;
}
box.disabled=true;
count++;
let win=checkwinner();

if(count === 9 && !win){
    draw();
}
    });
   
    
});


//All btn diable
const btndisable=()=>{
    for (let box of boxes){
box.disabled=true;
    }
};

//showing result
const showresult=(winner)=>{
    hide.classList.remove("hide");
    hide.classList.add("removehide");
    para.innerText=`Winner is ${winner}`;
    btndisable();
};


//checkin winner
const checkwinner=()=>{
    for (let pattern of patterns){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;
    
    if (val1 !="" && val2 != "" && val3 != ""){
        if(val1===val2 && val2===val3){
            showresult(val1);
            return true;
        }
    
  
    }
}
};

newgame.addEventListener("click",regame);
resetbtn.addEventListener("click",regame);




