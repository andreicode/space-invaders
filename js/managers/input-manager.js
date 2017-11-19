function InputManager() {

    var _keys = [];



    return {
        isPressed: function(key) {
            for (var i = 0; i < _keys.length; i++) {
                if (key.toLowerCase() === _keys[i].toLowerCase()) {
                    return true;
                }
            }
            return false;
        },
        isPressedRaw: function(key) {
            for (var i = 0; i < _keys.length; i++) {
                if (key === _keys[i]) {
                    return true;
                }
            }
            return false;
        },
    }
}

var Input = {
    store: [],
    init: function () {
        var _this = this;

        document.addEventListener('keydown', function (e) {
            for (var i = 0; i < _this.store.length; i++) {
                if (e.key === _this.store[i]) {
                    return;
                }
            }
            _this.store.push(e.key)
        });

        document.addEventListener('keyup', function (e) {
            for (var i = 0; i < _this.store.length; i++) {
                if (e.key === _this.store[i]) {
                    return _this.store.splice(i, 1);
                }
            }
        });
    },
    isPressed: function (key) {
        for (var i = 0; i < this.store.length; i++) {
            if (key.toLowerCase() === this.store[i].toLowerCase()) {
                return true;
            }
        }
        return false;
    }
}

Input.init();
