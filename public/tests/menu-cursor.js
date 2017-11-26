Scene.register({
    name: 'menu-cursor',
    init: function () {
        var text = Assets.create('menu-cursor', {
            color: __CONFIG['color-accent'],
        });
        this.scene.add(text);
    },
    update: function () {

    }
});
