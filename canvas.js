
const canvas=document.querySelector('.art-canvas');
canvas.width=0.6*window.innerWidth;
canvas.height=0.8*window.innerHeight;
const context=canvas.getContext('2d');
canvas.addEventListener('mousedown',startDrawing);
canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mouseup',stopDrawing);
let brushColor={r:0,g:0,b:0};
let isDrawing=false;
let strokeWidth=1;
function startDrawing(event){
    const rect=canvas.getBoundingClientRect();
    let x=event.clientX-rect.left;
    let y=event.clientY-rect.top;
    context.beginPath();
    context.strokeStyle=`rgba(${brushColor.r},${brushColor.g},${brushColor.b},1)`;
    if(!isDrawing){
    isDrawing=true;
}
    draw(event);
}
function draw(event){
    if(!isDrawing)return;
    const rect=canvas.getBoundingClientRect();
    let x=event.clientX-rect.left;
    let y=event.clientY-rect.top;

    context.lineCap='round';
    context.lineWidth=strokeWidth;
    context.lineTo(x,y);
    context.stroke();
    context.moveTo(x,y);
}
function stopDrawing(event){
isDrawing=false;
}

function clearCanvas(){
context.clearRect(0,0,canvas.width,canvas.height);

}
const art_controls=document.querySelector('.art-controls');
function setRGB(e){
    let label=document.querySelector(`#${e.target.id}-label`);
    label.textContent=`${e.target.id}:${e.target.value}`;
  
    brushColor[e.target.id]=e.target.value;
    art_controls.style.background=`rgba(${brushColor.r},${brushColor.g},${brushColor.b},1)`;


}
function setStrokeWidth(e){
    let label=document.querySelector(`#${e.target.id}-label`);
    label.textContent=`Nét:${e.target.value}px`;
    strokeWidth=e.target.value;
}
