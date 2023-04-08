Status = "";
Bottle_image= "";

 function preload() {
    Bottle_image = loadImage("bottle.jpg");
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
    object_detector.detect(Bottle_image,gotResults);
 }

 function gotResults(error,results) {
    if(error) {
        console.error(error);
    }
    console.log(results);
    document.getElementById("hi").innerHTML = "Object = Bottle";
 }

 function draw() {
    image(Bottle_image,0,0,640,350);
 }