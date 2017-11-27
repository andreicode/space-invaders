var Scene = {
    active: undefined,
    store: [],
    load: function (name) {
        for (var i = 0; i < this.store.length; i++) {
            if (name === this.store[i].name) {
                this.active = CreateScene(this.store[i]);
                this.active.init();
                var light = new THREE.AmbientLight( 0x404040 );
                this.active.scene.add( light );
                return;
            }
        }
    },
    register: function (scene) {
        this.store.push(scene);
    },
}
