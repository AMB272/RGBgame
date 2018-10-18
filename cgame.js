var colors = generateColors(6); 
// [
// 	"rgb(255, 0, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 255, 0)",
// 	"rgb(255, 0, 255)",
// 	"rgb(0, 255, 255)"
// ]

var square = document.querySelectorAll(".square");
var piccolor = pickrandom();
var colo = document.querySelector("#colo");
colo.textContent = piccolor;
var msg = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var noofsq = 6;

easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	noofsq = 3;
	colors = generateColors(noofsq);
	piccolor = pickrandom();
	colo.textContent = piccolor;
	msg.textContent = " ";
	h1.style.backgroundColor = 'steelblue';
	for (var i = square.length - 1; i >= 0; i--) {
		if (colors[i]) {
			square[i].style.backgroundColor = colors[i];
		}
		else{
			square[i].style.display = 'none';
		}
		
	}
});
hard.addEventListener("click",function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	noofsq = 6;
	colors = generateColors(noofsq);
	msg.textContent = " ";
	h1.style.backgroundColor = 'steelblue';
	piccolor = pickrandom();
	colo.textContent = piccolor;
	for (var i = square.length - 1; i >= 0; i--) {
		square[i].style.backgroundColor = colors[i];
		square[i].style.display = 'block';
	}
});

reset.addEventListener("click", function(){
	colors = generateColors(noofsq);
	piccolor = pickrandom();
	colo.textContent = piccolor;
	this.textContent = "new colors";
	for (var i = 0; i < square.length; i++){
		square[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = 'steelblue';
	msg.textContent = " ";
});

for (var i = 0; i < square.length; i++){
	//adding color to squares initially
	square[i].style.backgroundColor = colors[i];

	//click listener for the squares
	square[i].addEventListener("click", function(){
		var cliccolor = this.style.backgroundColor;
		if (cliccolor === piccolor) {
			msg.textContent = "Correct!!";
			changeColor(cliccolor);
			h1.style.backgroundColor = cliccolor;
			reset.textContent = "Play Again?";
		}
		else {
			this.style.backgroundColor = '#232323';
			msg.textContent = "Try again";
		}
	});

}

function changeColor(color){
	for (var i = square.length - 1; i >= 0; i--) {
	 square[i].style.backgroundColor = color;
	}
}

function pickrandom(){
	var rand = Math.floor(Math.random() * colors.length);
	return colors[rand];
}

function generateColors(num){
	var l =[];
	for (var i = num - 1; i >= 0; i--) {
		l[i] = "rgb(" + Math.floor(Math.random() * 256) + ", " 
		+ Math.floor(Math.random() * 256) + ", " +
		Math.floor(Math.random() * 256) + ")";
	}
	return l;
}