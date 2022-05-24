var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modes = document.querySelectorAll(".mode");

initialize();

function initialize(){
	setupModes();
	setupSquares();
	reset();
}

function setupModes(){
	for(var i = 0; i < modes.length; i++){
		modes[i].addEventListener("click", function(){
			modes[0].classList.remove("selected");
			modes[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares =6;
			reset();
		})
	}
}

function reset(){
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	colors = generateColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
		squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i]; 
		}
		else{
			squares[i].style.display = "none";
		}
	}
}

resetButton.addEventListener("click" , function(){
	reset();
})

function setupSquares(){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];

		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "CORRECT!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again!";
			}
			else {
				messageDisplay.textContent = "TRY AGAIN!";
				this.style.backgroundColor = "#232323";
			}
		})
	}
}

function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function generateColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		arr.push("rgb(" + r + ", " + g + ", " + b + ")");
	}
	return arr;
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}