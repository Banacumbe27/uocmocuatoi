const text='NHỮNG ƯỚC MƠ CỦA TÔI';
const number_of_layers=20;
const parallax_val=20*window.screen.width/1080;
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
        layer.style.transform=`translateX(${((e.clientX-0.5*window.innerWidth)*movement_scale/100)-(0.5*rect.width)}px) translateY(${((e.clientY-rect.top)*movement_scale/100)-(0.5*rect.height)}px)`;
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
    
    star.style.setProperty('--startimeout',star_timeout+'ms');
    introSection.appendChild(star);
    setTimeout(()=>{introSection.removeChild(star)},star_timeout);
        },appear_delay*i);
    
    }
}
const dreams=document.querySelector('.dreams');
function showContent(){
    dreams.style.display='inline';
    clearInterval(randomStars);
   setTimeout( ()=>{dreams.style.opacity='1';},20)
    showing_content=true;
}

let unblur=new IntersectionObserver(
(entries,observer)=>{
    entries.forEach(entry=>
{
    if(entry.isIntersecting){
        entry.target.classList.add('unblur');
    }
}
    );
}
);
let floatin= new IntersectionObserver(
(entries,observer)=>{
    entries.forEach(
        entry=>{
            if(entry.isIntersecting){
                entry.target.style.animation='2s floatin forwards';
            }
        }
        )
}

);
let sectionObserver= new IntersectionObserver(
    (entries,observer)=>{
        entries.forEach(
            entry=>{
                if(entry.isIntersecting){
                    sectionSwitch(entry.target.id);
                }
            }

        );
    }
  
);
document.querySelectorAll('.sectionLandmark').forEach(ele=>{sectionObserver.observe(ele)});
document.querySelectorAll('.setFloatin').forEach(ele=>{floatin.observe(ele);});
document.querySelectorAll('.setUnblur').forEach(ele=>{unblur.observe(ele);});

function sectionSwitch(id){//dreams is the parent background element
    switch (id){
        case '1':
            setBG('white');
            break;
        case '2':
            setBG('black');
            break;
        case '3':
            setBG('url(sky.jpg)');
            break;
        case '4':
            setBG('#a8d5ba');
            break;
        case '5':
            setBG('black');


    }
}
const dreamsBG=document.querySelector('.dreamsBG');
function setBG(BG){
    if(BG.includes('url')){
        dreamsBG.style.opacity='0';
        dreamsBG.style.opacity='1';
        dreamsBG.style.background=BG;
    }
    else{
    dreams.style.background=BG;
    dreamsBG.style.opacity='0';
}

}

function generateShootingStars(amount=20){
    for(let i=0;i<amount;i++){
        document.querySelector('.space').appendChild(document.createElement('span'));
    }
}
generateShootingStars();
