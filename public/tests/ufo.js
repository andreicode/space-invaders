Scene.register({
    name: 'ufo',
    init: function () {
        var invader = Assets.create('ufo', {
            center: true,
        });
        this.scene.add(invader);
        invader.position.x = invader.position.x - 5;
        invader.position.y = invader.position.y + 6;

        var light = new THREE.PointLight( 0xffffff, 1, 100 );
        light.position.set(0, -50, 50);
        this.scene.add(light);

    },
    update: function () {

    }
});
