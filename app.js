
let scoreElem = document.querySelector('.spanchik');
let score=0;
let warmstop;
let temp;
let squire;
let squireCords;
let boxDelig = document.querySelector('.boxDelig');
let boxCords = boxDelig.getBoundingClientRect();

boxDelig.addEventListener('mouseover',function(event){
  if(event.currentTarget.contains(squire)){return};
  temp = 2;
squire = document.createElement('div');
squire.classList.add('squire');
boxDelig.insertAdjacentElement('beforeend',squire);
squireCords = squire.getBoundingClientRect();
if(temp ==2){
 warmstop = setInterval(()=>{if(temp!=2){clearInterval(warmstop); return};goWarm()},500)
}
});
boxDelig.addEventListener('mouseout',function(event){
  if(event.relatedTarget&&event.relatedTarget.closest('div.boxDelig')){
  return;
  };
  scoreElem.textContent = 0;
  temp = null;
  clearInterval(warmstop)
  squire.remove();
})
boxDelig.addEventListener('mousemove',function(event){
  event.stopPropagation();
  let localSquireCords = {
  left:event.clientX - boxCords.left - (squireCords.width/2),
  top:event.clientY - boxCords.top - (squireCords.height/2)
  };
  squire.style.left = localSquireCords.left + 'px';
  squire.style.top = localSquireCords.top + 'px';
//left Top

let leftTop = document.elementFromPoint(Math.round(event.clientX) -26,Math.round(event.clientY)-26);
//left Bottom
let leftBottom = document.elementFromPoint(Math.round(event.clientX -26),Math.round(event.clientY+26));
//right top
let rightTop = document.elementFromPoint(Math.round(event.clientX +26),Math.round(event.clientY-26));
//right bottom
let rightBottom = document.elementFromPoint(event.clientX +26,event.clientY+26);

let arrCord = [leftTop,leftBottom,rightBottom,rightTop];
for(let prop of arrCord){
  if(prop&&prop.classList.contains('check')){
    alert('проиграли')
    return;
  }
}
 //проверка что квадратик не вышел вправо из поля
  if((localSquireCords.left + squireCords.width)>boxCords.width){
    squire.style.left = boxCords.width - squireCords.width + 'px';
  }
 //проверка что квадратик не вышел слева из поля
 if(localSquireCords.left< boxCords.left){
  squire.style.left = 0 + 'px';
  }

  //проверка что квадратик не вышел снизу поля 
  if((localSquireCords.top + squireCords.height)>boxCords.height){
    squire.style.top = boxCords.height - squireCords.height + 'px';
  }
 //проверка что квадратик не вышел сверху поля
  if(localSquireCords.top < boxCords.top){
    squire.style.top = 0 + 'px';
  }
},{capture:true})
function goWarm() {
  let mine = document.createElement('div');
  mine.classList.add('check');
  mine.style.top = '0px';
  mine.style.left = (Math.random()*530)+'px';
  boxDelig.append(mine);
  let warmTime = setInterval(()=>{
  if(temp ==2){
  mine.style.top = parseInt(mine.style.top)+3+'px';
  if(parseInt(mine.style.top)>=530){clearInterval(warmTime);mine.remove();mine = null;scoreElem.textContent = ++score;return}
  }
  else{if(temp!=2){clearInterval(warmTime);mine.remove(); return}}
  },10)
  }          
  
  








































































