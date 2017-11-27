Scene.register({
    name: 'score',
    init: function () {
        var score = Assets.create('score', {
            labels: [
                {
                    text: 'Score: ',
                },
                {
                    text: '0',
                },
            ]
        });


        this.scene.add(score);

        var light = new THREE.PointLight( 0xffffff, 1, 200 );
        light.position.set(0, -50, 50);
        this.scene.add(light);
    },

    update: function () {

    }
});
