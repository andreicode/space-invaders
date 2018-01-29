Scene.register({
    name: 'game',
    init: function () {

        this.scene._store = {};
        this.scene._methods = {};


        this.scene._store.playerCanShoot = true;
        this.scene._store.playerBullets = [];
        this.scene._store.alienBullets = [];


        var group = Assets.create('invader-group');
        group.position.x = -115;
        group.position.y = 30;
        this.scene.add(group);
        this.scene._store.group = group;




        var turret = Assets.create('turret', {
            color: __CONFIG['color-turret'],
        });
        turret.position.x = -7;
        turret.position.y = -85;
        this.scene.add(turret);
        this.scene._store.turret = turret;
        var light = new THREE.PointLight( 0xffffff, 1.2, 200 );
        light.position.set(0, -50, 50);
        this.scene.add(light);
        this.scene._store.turret.add(light);


        this.scene._store.buildings = [];
        var posy = -60;
        var posx = -100;
        for (var i = 0; i < 4; i++) {
            var building = Assets.create('building', {
                color: __CONFIG['color-building'],
            });
            building.position.x = posx;
            building.position.y = posy;
            this.scene.add(building);
            this.scene._store.buildings.push(building);
            posx += 60;
        }

        var score = Assets.create('score');
        score.position.y = 200;
        score.position.x = -220;
        score.scale.set(2,2,2);
        score.rotateX(1);
        this.scene.add(score);
        this.scene._store.score = score;

        var lives = Assets.create('lives');
        lives.position.y = 250;
        lives.position.x = 90;
        lives.scale.set(2,2,2);
        lives.rotateX(1);
        this.scene.add(lives);
        this.scene._store.lives = lives;

        this.scene.scale.set(0.7,0.7,0.7);

        var light2 = new THREE.PointLight( 0xffffff, 1, 100);
        light2.position.set(0, 20, 100);
        this.scene.add(light2);

        var light3 = new THREE.PointLight( 0xffffff, 1, 100 );
        light3.position.set(100, 20, 100);
        this.scene.add(light3);

        var light4 = new THREE.PointLight( 0xffffff, 1, 100 );
        light4.position.set(-100, 20, 100);
        this.scene.add(light4);



        this.scene._store.time = 0;
        this.scene._store.direction = 0;

        Music.play('spaceinvaders1.mp3');


        this.scene._methods.playerShoot = function () {

            if (!this.scene._store.playerCanShoot) {



              return;
            }

            var bullet = Assets.create('bullet-1');
            bullet.position.x = this.scene._store.turret.position.x + 6.5;
            bullet.position.y = this.scene._store.turret.position.y + 10;

            this.scene.add(bullet);
            this.scene._store.playerBullets.push(bullet.id);

            this.scene._store.playerCanShoot = false;
            setTimeout(function () { this.scene._store.playerCanShoot = true;}.bind(this), 1000);
        }.bind(this);

        this.scene._methods.updatePlayerBullets = function () {

          var group = this.scene._store.group.children;

          for(var i = 0; i < this.scene._store.playerBullets.length; i++) {

              var bullet = this.scene.getObjectById(this.scene._store.playerBullets[i]);
              bullet.position.y += 5;

              var coll = false;

              for(var j = 0; j < group.length; j++) {

                  var vector1 = new THREE.Vector3();
                  vector1.setFromMatrixPosition( bullet.matrixWorld );

                  var vector2 = new THREE.Vector3();
                  vector2.setFromMatrixPosition( group[j].matrixWorld );
                  vector2.x +=4.5 ;

                  var distance = vector1.distanceTo(vector2);

                  if (distance < 5) {

                      coll = group[j];
                      break;

                  }
              }

              if (coll) {
                this.scene._store.group.remove(coll);
                console.log(coll._store.score);
                // this.scene._store.score.remove()
                // this.scene._store.score.remove(this.scene._store.score.childern[1]);
              }

              if (bullet.position.y > 290 || coll) {
                this.scene.remove(bullet);
                this.scene._store.playerBullets.splice(i, 1);
                i--;
              }

          }

        }.bind(this);


        this.scene._methods.alienShoot = function () {

          var shooter = this.scene._store.group.children[Math.floor(Math.random() * this.scene._store.group.children.length)];

          var bullet = Assets.create('bullet-1');
          bullet.position.x = shooter.position.x - 110.5;
          bullet.position.y = shooter.position.y + 20;
          bullet._store.removed = 0;


          this.scene.add(bullet);
          this.scene._store.alienBullets.push(bullet.id);

        }.bind(this);

        this.scene._methods.updateAlienBullets = function () {

          for (var  i = 0; i < this.scene._store.alienBullets.length; i++) {


            var bullet = this.scene.getObjectById(this.scene._store.alienBullets[i]);
            bullet.position.y -= 5;


            var coll = false;

            /** COLLISION WITH PLAYER */

            var vector1 = new THREE.Vector3();
            vector1.setFromMatrixPosition( bullet.matrixWorld );

            var vector2 = new THREE.Vector3();
            vector2.setFromMatrixPosition( this.scene._store.turret.matrixWorld );
            vector2.x +=4.5 ;

            var distance = vector1.distanceTo(vector2);

            if (distance < 6) {

              coll = true;
              this.scene._store.lives.remove(this.scene._store.lives.children[this.scene._store.lives.children.length - 1]);

            }

            /** COLLISION WITH SHIELD */



            for (var j = 0 ; j < this.scene._store.buildings.length; j++) {
              var building = this.scene._store.buildings[j];
              for (var k = 0; k < building.children.length; k++) {

                if (bullet._store.removed > 20) {
                  coll = true;
                  break;
                }

                var _vector1 = new THREE.Vector3();
                _vector1.setFromMatrixPosition( bullet.matrixWorld );

                var _vector2 = new THREE.Vector3();
                _vector2.setFromMatrixPosition( building.children[k].matrixWorld );

                var distance = _vector1.distanceTo(_vector2);
                if (distance < 5) {
                  building.remove(building.children[k]);
                  bullet._store.removed++;
                }
              }
            }


            if (bullet.position.y < -100 || coll) {
              this.scene.remove(bullet);
              this.scene._store.alienBullets.splice(i, 1);
              i--;
            }

          }

        }.bind(this);

    },
    update: function () {
        if(Input.isPressed('Escape')) {
            Music.stop('spaceinvaders1.mp3');
            Scene.load('main-menu');
        }

        if(Input.isPressed('ArrowLeft') || Input.isPressed("button-3")) {
            if (this.scene._store.turret.position.x > -110) {
                this.scene._store.turret.position.x -= 6;
            }
        }

        if(Input.isPressed('ArrowRight') || Input.isPressed("button-1")) {
            if (this.scene._store.turret.position.x < 120) {
                this.scene._store.turret.position.x += 6;
            }
        }


        if(Input.isPressed(' ')) {
            this.scene._methods.playerShoot();
        }

        this.scene._methods.updatePlayerBullets();
        this.scene._methods.updateAlienBullets();

        // if (this.scene._store.time === 100) {
        //     if (this.scene._store.direction === 0) {
        //         this.scene._store.direction = 1;
        //     } else {
        //
        //         this.scene._store.direction = 0;
        //     }
        //     this.scene._store.time = 0;
        // }
        //
        // if (this.scene._store.group.position.x < -180) {
        //     this.scene._store.direction = 1;
        //     this.scene._store.group.position.y -= 1;
        // } else if (this.scene._store.group.position.x > -50) {
        //     this.scene._store.direction = 0;
        //     this.scene._store.group.position.y -= 1;
        // }

        this.scene._store.time += 1;
        if(this.scene._store.time  === __CONFIG['speed']) {
            // this.scene._store.group.position.x += this.scene._store.direction === 0 ? -10 : 10;
            this.scene._store.steps += 1;
            this.scene._store.time = 0;

            if (Math.random() < 0.3) {
              this.scene._methods.alienShoot();
            }

        }

        if (this.scene._store.group.position.y < -50) {
          console.log('GAME OVER');
        }

    },
});
