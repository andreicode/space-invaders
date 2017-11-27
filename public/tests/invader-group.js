Scene.register({
    name: 'invader-group',
    init: function () {
        var group = Assets.create('invader-group');
        group.position.x = -110;
        group.position.y = -50;
        this.scene.add(group);

        var light = new THREE.PointLight( 0xffffff, 1, 100 );
        light.position.set(-100, -20, 50);
        this.scene.add(light);

        var light2 = new THREE.PointLight( 0xffffff, 1, 200 );
        light2.position.set(0, -20, 50);
        this.scene.add(light2);

        var light3 = new THREE.PointLight( 0xffffff, 1, 100 );
        light3.position.set(100, -20, 50);
        this.scene.add(light3);

    },
    update: function () {

    }
});
