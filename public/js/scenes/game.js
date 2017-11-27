Scene.register({
    name: 'game',
    init: function () {
        var group = Assets.create('invader-group');
        group.position.x = -115;
        group.position.y = 20;
        this.scene.add(group);


        var turret = Assets.create('turret');
        turret.position.y = -100;


        for (var i = 0; i < 4; i+) {
            var building = Assets.create('building');


            this.scene.add(building);
        }

        // var score = Assets.create('score');



        this.scene.add(turret);
        // this.scene.add(score);
        this.scene.scale.set(0.6,0.6,0.6);
    },
    update: function () {

    }
});
