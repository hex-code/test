(function(){
	var angle = 0,
	increase = (2 * Math.PI) / 20;

	function rotate () {
	x = 0,
	y = 0;
	for (var i = 0; i < 20; i++) {
		var c = document.getElementById("circle"),
		x = 200 * Math.cos( angle );
		y = 200 * Math.sin( angle );
		angle += increase;
		c.style.left = x + "px";
		c.style.top = y + "px";
		return c
	};
};
	setInterval (rotate, 40);
})();
