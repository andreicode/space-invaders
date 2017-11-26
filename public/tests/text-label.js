Scene.register({
    name: 'text-label',
    init: function () {
        var text = Assets.create('text-label', {
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
