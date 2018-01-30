var menu;

Scene.register({
    name: 'keyboard',
    init: function() {
        var header = Assets.create('header', {
            text: 'Keyboard'
        });
        this.scene._store = {};
        this.scene._methods = {};

        header.position.x = -100;
        header.position.y = 50;

        this.scene.add(header);

        this.scene._methods.createMenu = function () {

            this.scene._store.menu = Assets.create('menu-group', {
                labels: [{
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

            this.scene._store.menu.position.x = -50;
            this.scene._store.menu.position.y = 0;
            this.scene.add(this.scene._store.menu);

        }.bind(this);



        this.scene._store.isChanging = false;
        this.scene._store.selection = 0;
        this.scene._store.pause = true;
        this.scene._methods.createMenu();

        setTimeout(function() {
            this.scene._store.pause = false;
        }.bind(this), 400);


    },
    update: function() {
        if (this.scene._store.pause == true) return;

        if (Input.isPressed('ESCAPE')) {
            Scene.load('main-menu');
        }

        if (Input.isPressed('SELECT') && this.scene._store.isChanging === false) {
            this.scene._store.selection = this.scene._store.menu._methods.getCursor();

            if (this.scene._store.selection < 3) {

                this.scene._store.isChanging = true;

                this.scene._store.menu._methods.setChanging(this.scene._store.selection);

                this.scene._store.pause = true;
                setTimeout(function() {
                    this.scene._store.pause = false;
                }.bind(this), 400);

                return;
            }

        }

        if (this.scene._store.isChanging === true && Input.store.length) {
            var newKey = Input.store[0];
            this.scene._store.menu._methods.unsetChanging(this.scene._store.selection);
            Cache.set2(this.scene._store.selection, newKey);
            this.scene._store.isChanging = false;

            setTimeout(function () {

                this.scene.remove(this.scene._store.menu);
                this.scene._methods.createMenu();

            }.bind(this), 100);
        }
    }
});
