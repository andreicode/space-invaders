Assets.register({
    name: 'invader-2',
    init: function (options) {

        var arr = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0],
            [0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0],
        ];


        for (var i = 0; i < arr.length; i++) {

            for (var j = 0; j < arr[i].length; j++) {
                if (arr[i][j] === 1) {
                    var mesh = Assets.create('invader-component');
                    mesh.position.x = j;
                    mesh.position.y = -i;
                    this.object.add(mesh);
                }
            }
        }

    },
    update: function () {

    }
});
