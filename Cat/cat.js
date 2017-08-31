window.onload = init;

	function init() {
		var cat = document.createElement("div");
		document.body.appendChild(cat);
		cat.style.backgroundImage = "url(cat.png)";
		cat.style.height = "30px";
		cat.style.width = "30px";
		cat.style.backgroundSize = "contain";
		cat.style.position = "fixed";
		cat.setAttribute("y", 0);
		cat.setAttribute("id", "cat");
	}
	
	addEventListener("keydown", handleKeyPress);
	
	function handleKeyPress(e) {
		e = e || window.event;
		console.log(e.keyCode);
		switch(e.keyCode){
        	
		case 37: 
			console.log("Myau!");
			goCatLeft();
			return false;
				
		case 38:
			goCatUp();
			return false;
			 
        case 39:
			goCatRight();
			return false;
			
		case 40: 
			console.log("Mya!");
			goCatDown();
			return false;
		}
	}
	
	function goCatRight() {
		var cat = document.getElementById("cat");
		var left = cat.offsetLeft;
		if (left < document.documentElement.clientWidth - 100) {
			left = cat.offsetLeft + 3;
			cat.style.left = left + "px";
			cat.setAttribute("y", Number(cat.getAttribute("y")) + 0.2);
			cat.style.top = 20 * Math.sin(Number(cat.getAttribute("y"))) + 20 + 'px';
		}
	};
	
	function goCatLeft() {
		var cat = document.getElementById("cat");
		var left = cat.offsetLeft;
		if (left > 10) {
			left = cat.offsetLeft - 3;
			cat.style.left = left + "px";
			cat.setAttribute("y", Number(cat.getAttribute("y")) + 0.2);
			cat.style.top = 20 * Math.sin(Number(cat.getAttribute("y"))) + 20 + 'px';
		}
	};
	
	function goCatDown() {
		var cat = document.getElementById("cat");
		var topcat = cat.offsetTop;
		if (topcat < document.documentElement.clientHeight - 100) {
			topcat = cat.offsetTop + 3;
			cat.style.top = topcat + "px";
		}
	};
	
	function goCatUp() {
		var cat = document.getElementById("cat");
		var upcat = cat.offsetTop;
		if (upcat > 50) {
			upcat = cat.offsetTop - 3;
			cat.style.top = upcat + "px";
		}
	};
