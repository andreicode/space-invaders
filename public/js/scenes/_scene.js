function CreateScene(options) {
    return {
        name: options.name,
        scene: new THREE.Scene(),
        init: typeof options.init === 'function' ? options.init : function() {},
        update: typeof options.update === 'function' ? options.update : function() {},
        _update: function () {
            if(!this.scene) {
                return;
            }

            this.update();
            for (var i = 0; i < this.scene.children.length; i++) {
                if (typeof this.scene.children[i].update === 'function') {
                    this.scene.children[i].update();
                }
            }
        },
    }
}
