function setup() {
video=createCapture(VIDEO);
size(300,300);
canvas=createCanvas();
posenet=ml5.posenet(video,modelLoaded);
pose.on();

}

function modelLoaded() {
    console.log("Model is loaded");
}

function draw() {

}

function gotPoses(result) {
    if(result>0) {
        console.log(result);
    }
}