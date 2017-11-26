Scene.register({
    name: 'menu-label',
    init: function () {
        var text = Assets.create('menu-label', {
            text: 'New Game',
            color: __CONFIG['color-primary'],
            type: 'normal',
            center: true,
        });

        this.scene.add(text);
    },
    update: function () {

    }
});
