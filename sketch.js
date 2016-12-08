var c = 0
var range = 50
var lastTime= 0
var updateEvery= 200


function setup() {
createCanvas(800,600)
ellipseMode(CENTER)
rectMode(CENTER)
frameRate(30)
}

function draw() {
  
  var currentTime = millis()
  
  if(currentTime-lastTime>updateEvery){
    createTexture()
    lastTime=currentTime
  }
}

function createTexture(){
  stroke(random(256),random(256),random(256))  
  
  for(var x = 30; x<windowWidth-30; x+=30) {
    for (var y= 30; y<windowHeight-30; y+=30){
          
      if(mouseX>x-range && mouseX<x+range && mouseY>y-range && mouseY<y+range){
        if (mouseIsPressed) {
        push()
        noStroke()
          fill(255)
          rect(x,y,30,30)
        pop()
        }
        
        tile(x,y)
        
        
        
      }
      else{
        push()
        noStroke()
          fill(255,50)
          rect(x,y,30,30)
        pop()
      }
      
      if(mouseX-pmouseX<30 && mouseY-pmouseY<30){
          range=range+0.01
        }
      else{
        range=50
      }
      
    }
  }
}

function tile(x,y){
  noFill()
  if(random()<0.5){
  ellipse(x-5,y,random(10))
  }
  if(random()<0.5){
  ellipse(x+5,y,random(10))
  }
  if(random()<0.5){
  ellipse(x,y+5,random(10))
  }
  if(random()<0.5){
  ellipse(x,y-5,random(10))
  }
  if(c<20 && random()<0.5){
  line(x-10,y-10,x+10,y+10)
  }
}
