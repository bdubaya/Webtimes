//Custom javascript for Bennie.com

//hype-button

(function (ns) {

	ns.HypeButton = function (id) {
		
		var b = $("#" + id);
		
		setInterval(function () {
			$({ xval: -30 }).animate({ xval: 260},
				{
					duration: 2000,
					step: function (now) {
						b.css('background', 'radial-gradient(circle 80px at ' + now + 'px 30px, #ffaaaa, red)')
					}
				})
		}, 8000);
	}
}(window.PS = window.PS || {}));