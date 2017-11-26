Assets.register({
    name: 'invader-component',
    init: function (options) {

        var geometry = new THREE.BoxGeometry( 1, 1, 1);
        var material = new THREE.MeshLambertMaterial( { color: 0xFF0000} );
        var mesh = new THREE.Mesh(geometry, material);

        this.object.add(mesh);
    },
    update: function () {

    }
});
