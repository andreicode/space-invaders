Assets.register({
    name: 'cube',
    init: function (options) {
        var geometry = new THREE.BoxGeometry( options.size || 1, options.size || 1, options.size || 1);
        var material = new THREE.MeshBasicMaterial( { color: options.color, wireframe: true } );
        this.object = new THREE.Mesh( geometry, material );
        this.object._store = {};

        if (options.position) {
            this.object.position.set(options.position.x, options.position.y, options.position.z);
        }

        if (options.rotation) {
            this.object._store.rotation = options.rotation;
        } else {
            this.object._store.rotation = 0;
        }
    },
    update: function () {
        this.object.rotation.x += this.object._store.rotation;
        this.object.rotation.y += this.object._store.rotation;
    }
});
