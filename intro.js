const text='NHỮNG ƯỚC MƠ CỦA TÔI';
const number_of_layers=50;
const parallax_val=20;
const parallax_increment=0.5;
const introSection=document.querySelector('.intro');

let showing_content=false;

for(let i=0;i<number_of_layers;i++){
    let layer=document.createElement('div');
    layer.textContent=text;
    layer.classList.add('intro-layer');
    layer.style.color=`rgba(${255*i/number_of_layers},${255*i/number_of_layers},${255*i/number_of_layers},1)`;
    layer.id=parallax_val+i*parallax_increment;
    introSection.appendChild(layer);
}
const layers=document.querySelectorAll('.intro-layer');
window.onmousemove=e=>{
    if(!showing_content){
    layers.forEach(layer=>{let movement_scale=JSON.parse(layer.id);
        let rect=layer.getBoundingClientRect();
        layer.style.transform=`translateX(${((e.clientX-0.5*window.screen.width)*movement_scale/100)-(0.5*rect.width)}px) translateY(${((e.clientY-rect.top)*movement_scale/100)-(0.5*rect.height)}px)`;
    });
}
};
const starAmount=10;
const star_timeout=500;
const appear_delay=star_timeout/starAmount;
const randomStars=setInterval(
()=>{
    generateStars(starAmount);
},star_timeout
);
function generateStars(starAmount){
    for(let i=0;i<starAmount;i++){
        setTimeout(()=>{
    starPos={x:Math.floor(Math.random()*window.innerWidth),y:Math.floor(Math.random()*window.innerHeight)};
    let star=document.createElement('div');
    star.classList.add('intro-star');
    star.style.top=starPos.y+'px';
    star.style.left=starPos.x+'px';
    document.documentElem
    
    
    star.style.setProperty('--startimeout',star_timeout+'ms');
    introSection.appendChild(star);
    setTimeout(()=>{introSection.removeChild(star)},star_timeout);
        },appear_delay*i);
    
    }
}
const introSlider=document.querySelector('.intro-slider');
function showContent(){
    introSlider.style.transform='translateY(-100%)';
    showing_content=true;
}