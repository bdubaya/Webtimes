@@ -1,75 +0,0 @@
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
						b.css('background', 'radial-gradient(circle 80px at ' + now + 'px 30px, #F4FFAA, yellow)')
					}
				})
		}, 6000);
		
		b.hover(function () {
            $({
                sc: '1'
            }).animate({
                sc: '1.1'
            }, {
                duration: 1000,
                easing: 'easeOutElastic',
                step: function (now, tween) {
                    b.css('transform', 'scale(' + now + ')');
                    b.children().css('transform', 'scale(' + now * 1.1 + ')');
                }
            });
        },
			
		function () {
			$({
				sc: '1.1'
			}).animate({
				sc: '1'
			}, {
				duration: 1000,
				easing: 'easeOutElastic',
				step: function (now, tween) {
					b.css('transform', 'scale(' + now + ')');
					b.children().css('transform', 'scale(' + now + ')');
				}
			});
			
		});

		b.click(function (){
			b.unbind('mouseenter mouseleave click');
			
			//fade the text
			b.find('#hype').fadeOut(500);
			
			//move the paw
			var middleSlider = b.width() * .5;
			b.find('#hype-icon').animate({ left: b.width() - 20 }, 2000, 'easeOutBounce');
			//b.find('i').animate({ left: '500' }, 2000, 'easeOutBounce');
			
			//tilt the entire button
			$({tilt: 0}).animate({tilt: 20},
				{
					duration: 1000,
					step: function (tilt) {
						b.css('transform', 'rotate(' + tilt + 'deg)');
					},
					easing: 'easeOutBounce'
				});
		});
		
	}
}(window.PS = window.PS || {}));
 No newline at end of file

