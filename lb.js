Status = "";
LB_image= "";

 function preload() {
    LB_image = loadImage("lb1.jpg");
 }

 function setup() {
    canvas = createCanvas(640,350);
    canvas.center();
    object_detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting Objects";
 }

 function modelLoaded() {
    console.log("Model loaded");
    Status = true;
    object_detector.detect(LB_image,gotResults);
 }

 function gotResults(error,results) {
    if(error) {
        console.error(error);
    }
    console.log(results);
    document.getElementById("hi").innerHTML = "Object = Light Bulb";
 }

 function draw() {
    image(LB_image,0,0,640,350);
 }