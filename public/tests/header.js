Scene.register({
    name: 'header',
    init: function () {
        var header = Assets.create('header', {
            text: 'Space Invaders',
            center: true,
        });

        this.scene.add(header);
    },
    update: function () {

    }
});
