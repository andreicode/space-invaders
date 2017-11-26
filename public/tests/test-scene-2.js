Scene.register({
    name: 'test-scene-2',
    init: function () {
        var cube = Assets.create('cube', {color: 0xff0000, rotation: 0.1});
        this.scene.add(cube);
    },
    update: function () {
        if (Input.isPressed('ArrowRight')) {
            Scene.load('game');
        }
    }
});
