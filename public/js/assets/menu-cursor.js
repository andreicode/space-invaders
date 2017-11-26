Assets.register({
    name: 'menu-cursor',
    init: function(options) {
        var geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(-200, 0, 0));
        geometry.vertices.push(new THREE.Vector3(0, 10, 0));
        geometry.vertices.push(new THREE.Vector3(10, 0, 0));
        var material = new THREE.LineBasicMaterial({ color: 0x0000ff });
        this.object = new THREE.Line(geometry, material);
    },
    update: function() {

    }
});
// } );
