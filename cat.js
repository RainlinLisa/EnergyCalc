	window.onload = function() {
		var cat = document.createElement("div");
		document.body.appendChild(cat);
		cat.style.backgroundImage = "url(cat.png)";
		cat.style.height = "30px";
		cat.style.width = "30px";
		cat.style.backgroundSize = "contain";
		cat.style.position = "fixed";
		cat.setAttribute("y", 0);
		
		var catRunTimer = setInterval(function() {
			var left = cat.offsetLeft + 3;
			cat.style.left = left + "px";
			cat.setAttribute("y", Number(cat.getAttribute("y")) + 0.2);
			cat.style.top = 20 * Math.sin(Number(cat.getAttribute("y"))) + 20 + 'px';
		}, 20);
		
	}
