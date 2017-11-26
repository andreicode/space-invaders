function CreateAsset(options) {
    return {
        name: options.name,
        object: new THREE.Object3D,
        init: typeof options.init === 'function' ? options.init : function() {},
        update: typeof options.update === 'function' ? options.update : function() {},
        _init: function (options) {
            this.init(options);
            var _this = this;
            this.object.update = function() {
                _this.update();
                for (var i = 0; i < _this.object.children.length; i++) {
                    if (typeof _this.object.children[i].update === 'function') {
                        _this.object.children[i].update();
                    }
                }
            }
        }
    }
}
