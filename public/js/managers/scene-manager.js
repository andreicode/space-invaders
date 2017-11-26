var Scene = {
    active: undefined,
    store: [],
    load: function (name) {
        for (var i = 0; i < this.store.length; i++) {
            if (name === this.store[i].name) {
                this.active = CreateScene(this.store[i]);
                this.active.init();
                return;
            }
        }
    },
    register: function (scene) {
        this.store.push(scene);
    },
}
