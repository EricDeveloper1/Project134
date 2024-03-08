alarm = "";
status = "";
objects = [];

function preload() {
    alarm = loadSound("alarm.mp3");
}

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.position(480, 380);
    video.hide();
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
}

function draw() {
    image(video, 0, 0, 480, 380);

    for (i = 0; i < objects.length; i++) {
        if (objects[i].label == "person") {
            document.getElementById("status").innerHTML = "Status : Baby detected";
            alarm.play();
        }
    }
}