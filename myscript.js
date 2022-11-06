
function changeImage() {
var image=document.getElementById("img1");
if(image.src.match("img1.png")){
    image.src="img2.jpg";
}
else if(image.src.match("img2.jpg")){
    image.src="img3.png";
}
else if(image.src.match("img3.png")){
    image.src="img1.png"
}

}

function change1(){
    var image=document.getElementById("img1");
    image.src="img1.png"
}

function change2(){
    var image=document.getElementById("img1");
    image.src="img2.jpg"
}

function change3(){
    var image=document.getElementById("img1");
    image.src="img3.png"

    var button=document.getElementById("button3")
   

}

function RickRoll(){
    
    location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
}