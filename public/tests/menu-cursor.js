Scene.register({
    name: 'menu-cursor',
    init: function () {
    	var TEXT = Assets.create('menu-cursor', {
        	text: '>',
	        color: __CONFIG['color-accent'],
            type: 'normal',
            center: true	
        });

		this.scene.add(TEXT);

    	// setInterval(
    	// 	function() {
    	// 		this.object.material.color.setHex(__CONFIG['color-primary']);
    	// 		console.log("primary");
    	// 	},
    	// 	2000
    	// );
    },
    update: function () {

    }
});
