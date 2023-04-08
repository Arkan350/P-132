Status = "";
Fan_image= "";

 function preload() {
    Fan_image = loadImage("Fan.jpg");
 }

 function setup() {
    canvas = createCanvas(350,640);
    canvas.center();
    object_detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting Objects";
 }

 function modelLoaded() {
    console.log("Model loaded");
    Status = true;
    object_detector.detect(Fan_image,gotResults);
 }

 function gotResults(error,results) {
    if(error) {
        console.error(error);
    }
    console.log(results);
    document.getElementById("hi").innerHTML = "Object = Fan";
 }

 function draw() {
    image(Fan_image,0,0,350,640);
 }