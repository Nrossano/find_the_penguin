function newGame() {
	var ranNum = Math.floor(Math.random() * 9);
	var sound = document.getElementById("scream") 
	document.getElementsByTagName("div")[ranNum].setAttribute("id", "yeti")
	document.getElementById("yeti").addEventListener("click", function() {
		window.alert("ROWR! I'm the Yeti! You lose!");
		sound.play();
	});
}