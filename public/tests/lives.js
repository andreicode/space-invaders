Scene.register({
    name: 'lives',
    init: function () {
        var lives = Assets.create('lives', {
            center: true,
        });
        this.scene.add(lives);
        lives.position.x = lives.position.x - 70;
        lives.position.y = lives.position.y + 10;

        var light = new THREE.PointLight( 0xffffff, 1, 200 );
        light.position.set(0, -50, 50);
        this.scene.add(light);

    },
    update: function () {

    }
});
