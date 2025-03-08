const canvas=document.querySelector("#myCanvas");
const ctx=canvas.getContext("2d");
const color=document.getElementById("colorid");
const width=document.getElementById("width");

const bt1=document.querySelector("#btn1");
const bt2=document.querySelector("#btn2");


ctx.strokeStyle=color.value;
ctx.lineJoin='round';
ctx.lineCap='round';
ctx.lineWidth=width.value;

let isDrawing=false;
let X=0;
let Y=0;
let click=false;

let hue=0;

function drawing(e){

    if(!isDrawing){
        return;
    }

    if(click){
        ctx.strokeStyle=`hsl(${hue}, 100%, 50%)`;
        if(hue>=360){
            hue=0;
        }
        hue++;
    }
    else{
        ctx.strokeStyle=color.value;
    }
    ctx.beginPath();
    ctx.moveTo(X,Y);
    ctx.lineTo(e.offsetX,e.offsetY);  
    ctx.stroke();  

    [X,Y]=[e.offsetX,e.offsetY]
}

bt1.addEventListener("click",()=>{
    click=true;
});
bt2.addEventListener("click",()=>{
    click=false;
});

width.addEventListener("input",()=>{
    ctx.lineWidth=width.value;
});

color.addEventListener("input",()=>{
    ctx.strokeStyle=color.value;
});

canvas.addEventListener("mousedown",(e)=>{
    isDrawing = true;
    [X, Y] = [e.offsetX, e.offsetY];
    ctx.beginPath();
    ctx.moveTo(X, Y);
});

canvas.addEventListener("mousemove",drawing);

canvas.addEventListener("mouseup",()=>{
    isDrawing=false;
});

canvas.addEventListener("mouseout",()=>{
    isDrawing=false;
});

