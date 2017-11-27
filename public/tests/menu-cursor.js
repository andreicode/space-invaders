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

    },
    update: function () {

    }
});
