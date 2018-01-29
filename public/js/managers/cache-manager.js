var Cache = {
    init: function () {

        if (!window.localStorage.getItem('LEFT')) {
            window.localStorage.setItem('LEFT', 'ArrowLeft');
        }

        if(!window.localStorage.getItem('RIGHT')) {
            window.localStorage.setItem('RIGHT', 'ArrowRight');
        }

        if(!window.localStorage.getItem('UP')) {
            window.localStorage.setItem('UP', 'ArrowUp');
        }

        if(!window.localStorage.getItem('DOWN')) {
            window.localStorage.setItem('DOWN', 'ArrowDown');
        }

        if(!window.localStorage.getItem('SHOOT')) {
            window.localStorage.setItem('SHOOT', 'Space');
        }

        if (!window.localStorage.getItem('LEFT_CONTROLLER')) {
            window.localStorage.setItem('LEFT_CONTROLLER', 'button-3');
        }

        if(!window.localStorage.getItem('RIGHT_CONTROLLER')) {
            window.localStorage.setItem('RIGHT_CONTROLLER', 'button-1');
        }

        if(!window.localStorage.getItem('SHOOT_CONTROLLER')) {
            window.localStorage.setItem('SHOOW_CONTROLLER', 'button-5');
        }

        if (!window.localStorage.getItem('SELECT')) {
            window.localStorage.setItem('SELECT', 'Enter');
        }
    },
    set: function (key, value) {
        window.localStorage.setItem(key, value);
    },
    get: function (key) {
        return window.localStorage.getItem(key);
    },
}

Cache.init();
