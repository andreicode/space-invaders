Assets.register({
    name: 'invader-1',
    init: function (options) {



        // this.object.geometry = new THREE.Geometry();
        //
        // var fishShape = new THREE.Shape();
        // fishShape.moveTo( 0, 0 );
        // fishShape.quadraticCurveTo( 50, 80, 100, 50 );
        // // fishShape.quadraticCurveTo( x + 100, y - 10, x + 115, y - 40 );
        // // fishShape.quadraticCurveTo( x + 115, y, x + 115, y + 40 );
        // // fishShape.quadraticCurveTo( x + 100, y + 10, x + 90, y + 10 );
        // // fishShape.quadraticCurveTo( x + 50, y + 80, x, y );
        //
        // var extrudeSettings = { amount: 8, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 1, bevelThickness: 1 };
        //
        // var geometry = new THREE.ExtrudeGeometry( fishShape, extrudeSettings );
        //
        // var mesh = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial({color: 0xFF0000}) );

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


        // if (options.center) {
        //     this.object.geometry.computeBoundingBox();
        //     var width = this.object.boundingBox.max.x - this.object.boundingBox.min.x;
        //     this.object.x = 0 - width / 2;
        // }

        // this.object.add(mesh);
    },
    update: function () {

    }
});
