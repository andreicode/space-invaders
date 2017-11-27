Assets.register({
    name: 'invader-group',
    init: function (options) {

        this.object._store = {};
        var arr = [
            [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
            [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ];

        this.object._store.invaders = [];

        var posy = 0;
        for (var i = 0; i < arr.length; i++) {
            this.object._store.invaders[i] = [];
            var posx = 0;
            for (var j = 0; j < arr[i].length; j++) {

                if (arr[i][j] === 1) {
                    this.object._store.invaders[i][j] = Assets.create('invader-2', {
                        color: __CONFIG['color-invader2'],
                    });

                } else if (arr[i][j] === 2) {

                    this.object._store.invaders[i][j] = Assets.create('invader-1', {
                        color: __CONFIG['color-invader1'],
                    });

                } else if (arr[i][j] === 3) {

                    this.object._store.invaders[i][j] = Assets.create('invader-3', {
                        color: __CONFIG['color-invader3'],
                    });
                }

                this.object._store.invaders[i][j].position.x = posx;
                this.object._store.invaders[i][j].position.y = posy;

                this.object.add(this.object._store.invaders[i][j]);
                posx += 20;
            }
            posy += 20;
        }

    },
    update: function () {

    }
});
