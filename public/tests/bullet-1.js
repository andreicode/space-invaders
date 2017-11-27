Scene.register({
    name: 'bullet-1',
    init: function () {
        var normalBullet = Assets.create('bullet-1', {
            center: true,
        });
        this.scene.add(normalBullet);

        normalBullet.position.x += 0;
        normalBullet.position.y += 2;

        var light = new THREE.PointLight( 0xffffff, 1, 100 );
        light.position.set(0, -50, 50);
        this.scene.add(light);

    },
    update: function () {

    }
});
