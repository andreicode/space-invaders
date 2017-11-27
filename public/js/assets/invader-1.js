Assets.register({
    name: 'invader-1',
    init: function (options) {

        this.object._store = {}

        var arr = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
            [0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0],
            [0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0],
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
        if (this.object._store.time === 50) {

            if (this.object._store.state === 0) {

                this.object._store.arr[10][4].position.y -= 1;
                this.object._store.arr[10][6].position.y -= 1;

                this.object._store.arr[9][0].position.y += 3;
                this.object._store.arr[9][10].position.y += 3;

                this.object._store.arr[8][0].position.y += 3;
                this.object._store.arr[8][10].position.y += 3;

                this.object._store.arr[7][0].position.y += 3;
                this.object._store.arr[7][10].position.y += 3;

                this.object._store.state = 1;
            } else {

                this.object._store.arr[10][4].position.y += 1;
                this.object._store.arr[10][6].position.y += 1;

                this.object._store.arr[9][0].position.y -= 3;
                this.object._store.arr[9][10].position.y -= 3;

                this.object._store.arr[8][0].position.y -= 3;
                this.object._store.arr[8][10].position.y -= 3;

                this.object._store.arr[7][0].position.y -= 3;
                this.object._store.arr[7][10].position.y -= 3;

                this.object._store.state = 0;
            }

            this.object._store.time = 0;
        }
    }
});
