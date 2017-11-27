Assets.register({
    name: 'invader-3',
    init: function (options) {

        this.object._store = {};
        var arr = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ];

        this.object._store.arr = [];
        this.object._store.time = 0;
        this.object._store.state = 0;


        for (var i = 0; i < arr.length; i++) {

            this.object._store.arr[i] = [];

            for (var j = 0; j < arr[i].length; j++) {
                if (arr[i][j] === 1) {
                    var mesh = Assets.create('block-component', {
                        color: options ? options.color: undefined,
                    });
                    mesh.position.x = j;
                    mesh.position.y = -i;
                    this.object.add(mesh);
                    this.object._store.arr[i][j] = mesh;
                }
            }
        }

    },
    update: function () {
        this.object._store.time += 1;
        if (this.object._store.time === __CONFIG['speed']) {

            if (this.object._store.state === 0) {

                this.object._store.arr[9][0].position.x += 3;
                this.object._store.arr[9][1].position.x += 3;
                this.object._store.arr[9][11].position.x -= 3;
                this.object._store.arr[9][10].position.x -= 3;





                this.object._store.state = 1;
            } else {

                this.object._store.arr[9][0].position.x -= 3;
                this.object._store.arr[9][1].position.x -= 3;
                this.object._store.arr[9][11].position.x += 3;
                this.object._store.arr[9][10].position.x += 3;



                this.object._store.state = 0;
            }

            this.object._store.time = 0;
        }
    }
});
