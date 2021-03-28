var slideIndex = 0;
var timer = 3000;
var i;
var sliding;

makeDots();
showSlides();
testSlides();

document.onkeydown = checkKey;

function toggleDropDown(){
	var nav = document.getElementById("navdiv");
	if (nav.style.display === "block") {
		nav.style.display = "none";
	} else {
		nav.style.display = "block";
	}
}


function makeDots() {
	var slides = document.getElementsByClassName("slide");
	var dotParent = document.getElementById('dots');
	for(var j = 0;j < slides.length;j++){
		dotParent.innerHTML += "<span class='dot' onclick='currentSlide(" + j + ")''></span>";
	}
}


window.onload = function(){
	
}


function checkKey(e) {

	e = e || window.event;

	if (e.keyCode == '37' || e.keyCode == '40') {
		// left arrow
		plusSlides(-1);
	}
	if (e.keyCode == '39' || e.keyCode == '38') {
			// right arrow
		plusSlides(1);
	}

}

function plusSlides(n) {
	
	clearTimeout(sliding);
	
	//console.log("Slide Index: " + slideIndex);
	
	var skip = slideIndex + n - 1;
	
	//console.log("Skip: " + skip);
	
	var slides = document.getElementsByClassName("slide");
	
	if(skip > slides.length){
		showSlides(slideIndex = 0);
	} else if(skip == -1){
		slideIndex = slides.length;
		showSlides(slideIndex = slides.length  - 1);
		console.log("[Decreasing]\nSlide Index: "  + slideIndex);
	} else {
		showSlides(slideIndex = skip);
	}
	
}

function currentSlide(n) {
	clearTimeout(sliding);
	showSlides(slideIndex = n);
}

function showSlides() {
	
	var slides = document.getElementsByClassName("slide");
	var dots = document.getElementsByClassName("dot");
	//console.log("Slide Index: " + slideIndex + "\ni:" + i);
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}    
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " active";
	checkTheme(slides , slideIndex - 1);
	sliding = setTimeout(showSlides, timer); // Change image every 2 seconds
}

function testSlides(){
	var slides = document.getElementsByClassName("slide");
	console.log("Length: " + slides.length);
	for(var t = 0;t < slides.length;t++){
		console.log(slides[t].getAttribute('theme-set'));
	}
}

function checkTheme(slides, num){
	//console.log(slides[num]);
	if(slides[num].getAttribute('theme-set') == 'bright'){
		//console.log("Bright");
		document.documentElement.style.setProperty("--btn-text-color", "black");
		document.documentElement.style.setProperty("--after-color", "white");
		document.documentElement.style.setProperty("--btn-bg-color", "transparent");
	}
	if(slides[num].getAttribute('theme-set') == 'dark'){
		//console.log("Dark");
		document.documentElement.style.setProperty("--btn-text-color", "white");
		document.documentElement.style.setProperty("--after-color", "#000");
		document.documentElement.style.setProperty("--btn-bg-color", "transparent");
	}
	if(slides[num].getAttribute('theme-set') == 'mixed'){
		//console.log("Dark");
		document.documentElement.style.setProperty("--btn-text-color", "white");
		document.documentElement.style.setProperty("--after-color", "white");
		document.documentElement.style.setProperty("--btn-bg-color", "#000");
	}
}

/*var timedisplay = document.getElementById('timestop');
var timertodisplay = timer / 1000;
timedisplay.innerHTML = "Changing image every " + timertodisplay + " seconds:";*/