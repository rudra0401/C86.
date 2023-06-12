var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");

var pic="";


function new_image()
{
	fabric.Image.fromURL('BirthdayImage.jpg', function(Img){
		pic = Img;
		pic.scaleToWidth(700);
		pic.scaleToHeight(510);
		pic.set({
			top:0,
			left:0
		});
		canvas.add(pic);
	});	
}

function playSound(){
	x.play();
}
