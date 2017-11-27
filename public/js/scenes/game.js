Scene.register({
    name: 'game',
    init: function () {

        this.scene._store = {};

        var group = Assets.create('invader-group');
        group.position.x = -115;
        group.position.y = 30;
        this.scene.add(group);
        this.scene._store.group = group;




        var turret = Assets.create('turret');
        turret.position.x = -7;
        turret.position.y = -85;
        this.scene.add(turret);
        this.scene._store.turret = turret;
        var light = new THREE.PointLight( 0xffffff, 1.2, 200 );
        light.position.set(0, -50, 50);
        // this.scene.add(light);
        this.scene._store.turret.add(light);


        var posy = -60;
        var posx = -100;
        for (var i = 0; i < 4; i++) {
            var building = Assets.create('building');
            building.position.x = posx;
            building.position.y = posy;
            this.scene.add(building);
            posx += 60;
        }

        var score = Assets.create('score');
        score.position.y = 200;
        score.position.x = -220;
        score.scale.set(2,2,2);
        score.rotateX(1);
        this.scene.add(score);


        // this.scene.add(score);
        this.scene.scale.set(0.7,0.7,0.7);





        this.scene._store.time = 0;
        this.scene._store.direction = 0;

        Music.play('spaceinvaders1.mp3');
    },
    update: function () {
        if(Input.isPressed('Escape')) {
            Music.stop('spaceinvaders1.mp3');
            Scene.load('main-menu');
        }

        if(Input.isPressed('ArrowLeft')) {
            if (this.scene._store.turret.position.x > -110) {
                this.scene._store.turret.position.x -= 4;
            }
        }

        if(Input.isPressed('ArrowRight')) {
            if (this.scene._store.turret.position.x < 120) {
                this.scene._store.turret.position.x += 4;
            }
        }

        if (this.scene._store.time === 100) {
            if (this.scene._store.direction === 0) {
                this.scene._store.direction = 1;
            } else {

                this.scene._store.direction = 0;
            }
            this.scene._store.time = 0;
        }

        if (this.scene._store.group.position.x < -180) {
            this.scene._store.direction = 1;
        } else if (this.scene._store.group.position.x > -50) {
            this.scene._store.direction = 0;
        }

        this.scene._store.time += 1;
        if(this.scene._store.time  === 15) {
            this.scene._store.group.position.x += this.scene._store.direction === 0 ? -10 : 10;
            this.scene._store.steps += 1;
            this.scene._store.time = 0;
        }

    }
});
