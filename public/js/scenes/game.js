Scene.register({
    name: 'game',
    init: function () {
        var cubeGroup = Assets.create('cube-group', {colors: [0xFF0000, 0xFFF400]});

        // var secondC = Assets.create('cube',
        //     {
        //         color: 0xFFF400,
        //         position: new THREE.Vector3(1,1,1),
        //         size: 0.5,
        //     }
        // );
        // cube.add(secondC);

        console.log(cubeGroup)

        this.scene.add(cubeGroup);
    },
    update: function () {
        if (Input.isPressed('ArrowLeft')) {
            Scene.load('main-menu');
        }
    }
});
