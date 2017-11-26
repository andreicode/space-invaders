Scene.register({
    name: 'test-scene-1',
    init: function () {
        var cube = Assets.create('cube', {color: 0x0f23fd, rotation: 0.05});
        this.scene.add(cube);
    },
    update: function () {
        if (Input.isPressed('ArrowRight')) {
            Scene.load('game');
        }
    }
});
