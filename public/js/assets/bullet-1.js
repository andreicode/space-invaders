Assets.register({
    name: 'bullet-1',
    init: function (options) {

        this.object._store = {};

        var arr = [
            [1, 1],
            [1, 1],
            [1, 1],
            [1, 1],
            [1, 1],
            [1, 1],
        ];

        this.object._store.arr = [];


        for (var i = 0; i < arr.length; i++) {

            this.object._store.arr[i] = [];

            for (var j = 0; j < arr[i].length; j++) {
                if (arr[i][j] === 1) {
                    var mesh = Assets.create('block-component', options);
                    mesh.position.x = j;
                    mesh.position.y = -i;
                    this.object.add(mesh);
                    this.object._store.arr[i][j] = mesh;
                }
            }
        }

    },
    update: function () {

    }
});
