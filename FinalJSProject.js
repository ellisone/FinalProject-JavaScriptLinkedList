
var LSList;
function setup(){
  //createCanvas(900,600);
  createCanvas(windowWidth, windowHeight);
  LSList=new LinkedScriptList(0);
  for(let i=1;i<10;i++){
    LSList.addVal(i);
  }
  LSList.resetNew();
}

var timer = 0;
var removed=null;
var removedPos=null;
function draw(){
  background(0);
  textSize(40);
  text("JavaScript Linked List",230,150);
  if(timer==100){
    addRemoveRandom(Math.round(random(0,9)),Math.round(random(0,LSList.size)));
    timer=0;
  }else{
    if(timer<50&&removed!=null){
      visNode(20+(60*removedPos),210,null,true);
    }
    timer++;
    visList(0,LSList.size);
  }
}

function addRemoveRandom(value,pos){
  let addOrRemove=Math.round(random(0,1));
  LSList.resetNew();
  if((addOrRemove==0||LSList.size==0)&&LSList.size<=9){
    removed=null;
    removedPos=null;
    LSList.insert(value,pos);
  }else{
    removed=LSList.getVal(pos);
    removedPos=pos;
    LSList.removeVal(pos);
  }
}

function visList(start,end){
  for(let i=start;i<end;i++){
    visNode(20+(60*i),275,i,false);
    if(i<(LSList.size-1)){
      stroke(0,160,255);
      strokeWeight(2);
      fill(255);
      line(60+(60*i),290,80+(60*i),290);
      line(75+(60*i),285,80+(60*i),290);
      line(75+(60*i),295,80+(60*i),290);
    }
  }
  
}

function visNode(xPos,yPos,lPos,red){
  strokeWeight(1);
  if(LSList.checkNew(lPos)==true){
    stroke(0,255,0);
  }else if(red==true){
    stroke(255,0,0);
  }else{
    stroke(255);
  }
  line(xPos,yPos,xPos+40,yPos);
  line(xPos,yPos,xPos,yPos+30);
  line(xPos,yPos+30,xPos+40,yPos+30);
  line(xPos+40,yPos,xPos+40,yPos+30);
  stroke(255);
  fill(255);
  textSize(20);
  if(red==false){
    text(""+LSList.getVal(lPos),xPos+15,yPos+22);
  }else{
    text(""+removed,xPos+15,yPos+22);
    stroke(255,0,0);
    strokeWeight(2);
    line(xPos+20,yPos+30,xPos+20,yPos+45);
    line(xPos+20,yPos+30,xPos+15,yPos+35);
    line(xPos+20,yPos+30,xPos+25,yPos+35);
  }
}
