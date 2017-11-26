Scene.register({
    name: 'menu-label',
    init: function () {
        var text = Assets.create('menu-label', {
            text: 'New Game',
            color: __CONFIG['color-primary'],
        });
        this.scene.add(text);
    },
    update: function () {

    }
});
