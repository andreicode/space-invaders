var menu;

Scene.register({
    name: 'keyboard',
    init: function () {
        var header = Assets.create('header', {text: 'Keyboard'});
        this.scene._store = {};
        header.position.x = -100;
        header.position.y = 50;

        menu = Assets.create('menu-group', {
            labels: [
                {
                    text: 'Left: ' + window.localStorage.getItem('LEFT'),
                    scene: undefined
                },
                {
                    text: 'Right: ' + window.localStorage.getItem('RIGHT'),
                    scene: undefined,
                },
                {
                    text: 'Shoot: ' + window.localStorage.getItem('SHOOT'),
                    scene: undefined
                },
                {
                    text: 'Back',
                    scene: 'main-menu'
                }
            ]

        });
        menu.position.x = -50;
        menu.position.y = 0;

        this.scene.add(header);
        this.scene.add(menu);
        this.scene._store.isChanging = false;
        this.scene._store.pause = false;

    },
    changeKey: function() {


    },

    update: function () {
        if(this.scene._store.pause == true) return;

        if (Input.isPressed('ESCAPE')) {
            Scene.load('main-menu');
        }

        if (Input.isPressed('SELECT') && this.scene._store.isChanging == false) {
            this.scene._store.isChanging = true;
            var selection = menu._methods.getCursor();
            menu._methods.setChanging(selection);

            this.scene._store.pause = true;
                        setTimeout( function () {
                            this.scene._store.pause = false;
                            console.log('timeout');
                        }.bind(this), 1000);


            console.log(selection);
            // return;
        }

        if(this.scene._store.isChanging === true && this.scene._store.pause === true) {
            var id = menu._methods.getCursor();
            newKey = Input.store[0];
            menu._methods.unsetChanging(id);
            Cache.set2(id, newKey);
            this.scene._store.isChanging = false;
            // menu._methods.setChanging(selection); // Schimba ceva prin menu-group. Culoare text + isChanging
        }
    }
});
