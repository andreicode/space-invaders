Assets.register({
    name: 'cube-group',
    init: function (options) {
        var parent = Assets.create('cube', {color: options.colors[0]});
        this.object = parent;

        var child = Assets.create('cube', {
            color: options.colors[1],
            size: 0.5,
            position: new THREE.Vector3(1,1,1),
            rotation: 0.05,
        });
        this.object.add(child);

    },
    update: function () {
        this.object.rotation.x += 0.02;
        this.object.rotation.y += 0.02;
    }
});
