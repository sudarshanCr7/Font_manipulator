noseX = 0;
noseY = 0;
rightWristX = 0;
leftWristX = 0;
diffrence = 0;

function setup(){
    canvas = createCanvas(550,420);
    canvas.position(650,210);
    video = createCapture(VIDEO);
    video.position(50,210);
    video.size(550,420)
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Posnet is insiated");
}
function gotPoses(results){
if (results.length > 0) {
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    rightWristX = results[0].pose.rightWrist.x;
    leftWristX = results[0].pose.leftWrist.x;
    diffrence = floor(leftWristX - rightWristX);
}
}
function draw(){
background("red");
fill("black");
textSize(diffrence);
text("Sudarshan",noseX,noseY);

}