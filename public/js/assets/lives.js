Assets.register({

    name: 'lives',
    init: function (options) {

        posx = 0;

        for(var i = 0; i < 5; i++) {

            var life = Assets.create('life');
            life.position.x = posx + 20;
            posx += 20;
            this.object.add(life);

        }
        
    },
    
    update: function () {

    }
    
});

