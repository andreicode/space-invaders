function InputManager() {

    var _keys = [];



    return {
        isPressed: function(key) {
            for (var i = 0; i < _keys.length; i++) {
                if (key === _keys[i]) {
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
        var listenGamepads = setInterval(pollGamepads, 100);

        function pollGamepads() {
            // console.log(_this.store);
            var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);

            for (var i = 0; i < gamepads.length; i++) {
                var gamepad = gamepads[i];
                if (gamepad) {
                    for(var idx = 1; idx < 6; idx += 2) {
                        var button = gamepad.buttons[idx];

                        if(button.pressed) {
                            for (var j = 0; j < _this.store.length; j++) {
                                if (("button-" + idx) === _this.store[j]) {
                                    return;
                                }
                            }
                            _this.store.push(("button-" + idx));
                        }
                        else {
                            for (var j = 0; j < _this.store.length; j++) {
                                if (("button-" + idx) === _this.store[j]) {
                                    return _this.store.splice(j, 1);
                                }
                            }
                        }
                    }
                    //clearInterval(listenGamepads);
                }
            }
        }

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
            if (key === this.store[i]) {
                return true;
            }
        }
        return false;
    }
}

Input.init();
