Scene.register({
    name: 'score',
    init: function () {

<<<<<<< HEAD

=======
        var score = Assets.create('score');
>>>>>>> ad66e278b904122c79f4cee4999c24b28974a825
        this.scene.add(score);

        var light = new THREE.PointLight( 0xffffff, 1, 200 );
        light.position.set(0, -50, 50);
        this.scene.add(light);
    },

    update: function () {

    }
});
