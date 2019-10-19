const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting =true;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath(); //움직이는 곳마다 선이 그어지는 행위(보이진 않음)
        ctx.moveTo(x, y); //path의 이동
    } else {
        ctx.lineTo(x,y); //라인의 이동(이전 위치와 연계됨)
        ctx.stroke();  //시각적인 획 긋기
    }
}

function onMouseDown(event){
    painting = true;
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}