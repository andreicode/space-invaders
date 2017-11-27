Scene.register({
    name: 'turret',
    init: function () {
        var invader = Assets.create('turret', {
            center: true,
        });
        this.scene.add(invader);
        invader.position.x = invader.position.x - 5;
        invader.position.y = invader.position.y + 6;

        var light = new THREE.PointLight( 0xffffff, 1, 200 );
        light.position.set(0, -50, 50);
        this.scene.add(light);

    },
    update: function () {

    }
});
