Scene.register({
    name: 'bullet-2',
    init: function () {
        var UFO_bullet = Assets.create('bullet-2', {
            center: true,
        });
        this.scene.add(UFO_bullet);

        UFO_bullet.position.x += 0;
        UFO_bullet.position.y += 2;

        var light = new THREE.PointLight( 0xffffff, 1, 100 );
        light.position.set(0, -50, 50);
        this.scene.add(light);

    },
    update: function () {

    }
});
