var c = 0
var s = 0
var range = 50
var colorR = []
var colorG = []
var colorB = []

function setup() {
createCanvas(800,600)
ellipseMode(CENTER)
frameRate(5)
}

function draw() {
  
  colorR.push(random(256))
  colorG.push(random(256))
  colorB.push(random(256))
  
  if (mouseIsPressed) {
    background(255)
  }
  
  for(x = 30; x<windowWidth-30; x+=30) {
    for (y= 30; y<windowHeight-30; y+=30){
      
      if(mouseX-pmouseX<30 && mouseY-pmouseY<30){
        
          range=range+0.01}
          else{
            range=50
          }
      
      if(mouseX>x-range && mouseX<x+range && mouseY>y-range && mouseY<y+range){
        
        stroke(colorR[colorR.length-1],colorG[colorG.length-1],colorB[colorB.length-1])
        tile()
        
        if(random()<0.5){
          noStroke()
          fill(255,50)
          ellipse(x,y,30,30)
        }
      }
      
      else{
        noStroke()
        fill(255,50)
        ellipse(x,y,30,30)
      }
  
    
  }
  }
}

function tile(){
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

function click(){
  
  
}
