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
            window.localStorage.setItem('SHOOT', ' ');
        }

        if (!window.localStorage.getItem('LEFT_CONTROLLER')) {
            window.localStorage.setItem('LEFT_CONTROLLER', 'button-3');
        }

        if(!window.localStorage.getItem('RIGHT_CONTROLLER')) {
            window.localStorage.setItem('RIGHT_CONTROLLER', 'button-1');
        }

        if(!window.localStorage.getItem('SHOOT_CONTROLLER')) {
            window.localStorage.setItem('SHOOT_CONTROLLER', 'button-5');
        }

        if (!window.localStorage.getItem('SELECT')) {
            window.localStorage.setItem('SELECT', 'Enter');
        }

        if(!window.localStorage.getItem('ESCAPE')) {
            window.localStorage.setItem('ESCAPE', 'Escape');
        }
    },
    set: function (key, value) {
        window.localStorage.setItem(key, value);
    },
    get: function (key) {
        return window.localStorage.getItem(key);
    },
    set2: function(id, value) {
        switch(id) {
            case 0:
                window.localStorage.setItem('LEFT', value);
                break;
            case 1:
                window.localStorage.setItem('RIGHT', value);
                break;
            case 3:
                window.localStorage.setItem('SHOOT', value);
                break;
        }
    }
}

Cache.init();