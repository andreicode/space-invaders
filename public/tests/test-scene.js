Scene.register({
    name: 'test-scene',
    init: function () {
        var cube = Assets.create('cube', {color: 0x184fea, rotation: 0.01});
        this.scene.add(cube);
    },
    update: function () {
        if (Input.isPressed('ArrowRight')) {
            Scene.load('game');
        }
    }
});
