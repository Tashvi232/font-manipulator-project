leftWristX=0;
rightWristX=0;
distance=0;
function setup() {
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(550,550);
canvas.position(560,150);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);

}

function modelLoaded() {
    console.log("Model is loaded");
}

function draw() {
    background(130, 209, 209);
    textSize(distance);
    fill(20, 61, 89);
    text("Tashvi",560,150)
}

function gotPoses(result) {
    if(result>0) {
        console.log(result);
        leftWristX=result[0].pose.leftWrist.x;
    rightWristX=result[0].pose.rightWrist.x;
    distance=floor(leftWristX-rightWristX);
    console.log("leftWristX= "+leftWristX+" rightWristX= "+rightWristX+" distance= "+distance);
    }
}