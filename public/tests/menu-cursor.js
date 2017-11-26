Scene.register({
    name: 'menu-cursor',
    init: function () {
        var text = Assets.create('menu-cursor', {
        	text: '>',
            color: __CONFIG['color-primary'],
            type: 'normal',
            center: true	
        });

        this.scene.add(text);
    },
    update: function () {

    }
});
