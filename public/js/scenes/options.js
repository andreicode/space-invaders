Scene.register({
    name: 'options',
    init: function () {

        var header = Assets.create('header', {
            text: 'Options'
        });
        this.scene._store = {};
        this.scene._methods = {};

        header.position.x = -100;
        header.position.y = 50;

        this.scene.add(header);

        this.scene._methods.createMenu = function () {

            this.scene._store.menu = Assets.create('menu-group', {
                labels: [
                    {
                        text: 'Sound: ' + Cache.get('SOUND'),
                        scene: undefined
                    },
                    {
                        text: 'Keyboard',
                        scene: 'keyboard',
                    },
                    {
                        text: 'Music: ' + Cache.get('MUSIC'),
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
        this.scene._store.pause = true;
        this.scene._methods.createMenu();

        setTimeout(function() {
            this.scene._store.pause = false;
        }.bind(this), 400);
    },
    update: function () {
        if (this.scene._store.pause == true) return;

        if(Input.isPressed('SELECT') && this.scene._store.menu._methods.getCursor() == 0) {
            Cache.set('SOUND', Cache.get('SOUND') === 'ON' ? 'OFF' : 'ON');

            this.scene._store.menu._methods.setChanging(0);

            this.scene._store.pause = true;

            setTimeout(function() {
                this.scene.remove(this.scene._store.menu);
                this.scene._methods.createMenu();

                this.scene._store.pause = false;
            }.bind(this), 200);

            return;
        }

        if(Input.isPressed('SELECT') && this.scene._store.menu._methods.getCursor() == 2) {
            Cache.set('MUSIC', Cache.get('MUSIC') === 'ON' ? 'OFF' : 'ON');
            this.scene._store.menu._methods.setChanging(2);

            this.scene._store.pause = true;

            setTimeout(function() {
                this.scene.remove(this.scene._store.menu);
                this.scene._methods.createMenu();

                this.scene._store.menu._methods.moveDown();
                this.scene._store.menu._methods.throttleMove();
                this.scene._store.menu._methods.moveDown();
                this.scene._store.menu._methods.throttleMove();

                this.scene._store.pause = false;
            }.bind(this), 200);

            return;
        }
    }
});
