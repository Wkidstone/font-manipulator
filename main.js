
difference=0;
rWristX=0;
lWristX=0;
function setup()
{
  video = createCapture(VIDEO);
  video.size(550, 500);
  canvas=createCanvas(750,750);
  canvas.position(760,150);
  poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);  
} 
function modelLoaded(){
  console.log('Posenet is initialized');
}
function draw(){
  background("#00ffff")
  document.getElementById("text").innerHTML = "Size of text = " + difference + "px";
  stroke('#a103fc')
  text("Angad",50,400);
textSize(difference)
}
function gotPoses(results){
  if(results.length > 0){
    console.log(results);
    lWristX = results[0].pose.leftWrist.x;
    rWristX = results[0].pose.rightWrist.x;
    difference=floor(lWristX - rWristX);
    console.log("leftWristX = " + lWristX + "rightWristX = " + rWristX + "difference = " + difference);
  }
}