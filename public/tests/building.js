Scene.register({
    name: 'building',
    init: function () {
        var building = Assets.create('building', {
            center: true,
            color: __CONFIG['color-building'],
        });
        this.scene.add(building);
        building.position.x = building.position.x - 10;
        building.position.y = building.position.y + 10;

        var light = new THREE.PointLight( 0xffffff, 1, 200 );
        light.position.set(0, -50, 50);
        this.scene.add(light);

    },
    update: function () {

    }
});
