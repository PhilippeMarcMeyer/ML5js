 
var mobilenet;
var label;
var probability;
var video;

function modelReady(){
	console.log('Model is ready !!!');
	mobilenet.predict(gotResults);
}



function gotResults(error,results){
	if(error){
		console.error(error);
	}else{
		label = results[0].className;
		probability = results[0].probability;
		mobilenet.predict(gotResults);
		//createP("Guess : "+ label);
		//createP("Chance : " + parseFloat(probability*100).toFixed(2)+" %");
		//mobilenet.predict(gotResults);
	}
}

 function setup(){
	createCanvas(640,480);
	background(0); 
	video = createCapture(VIDEO);
	video.hide();

	mobilenet = ml5.imageClassifier('MobileNet',video,modelReady);
 }
 
 function draw(){
	 background(0); 
	 var message = " at "+parseFloat(probability*100).toFixed(2)+" %"
	 image(video,0,0);
	 	fill(0);
		textSize(24);
		text("Guess : "+ label ,20,40);
			text(message,20,80);
 }