Assets.register({
    name: 'menu-group',
    init: function(options) {
        this.object = new THREE.Object3D();
        this.object._store = {};
        this.object._methods = {};

        this.object._methods.throttleMove = function () {
            this.object._store.moveTimeOut = true;
            setTimeout(function () {
                this.object._store.moveTimeOut = false;
            }.bind(this), 200);
        }.bind(this);

        this.object._methods.setActive = function (id) {
            this.object._store.labels[id].cursor = true;
            this.object._store.labels[id].object.material.color.setHex(__CONFIG['color-accent']);
        }.bind(this);

        this.object._methods.setInactive = function (id) {
            this.object._store.labels[id].cursor = false;
            this.object._store.labels[id].object.material.color.setHex(__CONFIG['color-primary']);
        }.bind(this);

        this.object._methods.getCursor = function () {
            for (var i = 0; i < this.object._store.labels.length; i++) {
                if (this.object._store.labels[i].cursor === true) {
                    return i;
                }
            }
        }.bind(this);

        this.object._methods.moveUp = function () {
            var cursor = this.object._methods.getCursor();
            if (cursor === 0 || cursor === this.object._store.length - 1) {
                return;
            }

            this.object._methods.setInactive(cursor);
            this.object._methods.setActive(cursor-1);
        }.bind(this);

        this.object._methods.moveDown = function () {
            var cursor = this.object._methods.getCursor();
            if (cursor === this.object._store.labels.length - 1) {
                return;
            }

            this.object._methods.setInactive(cursor);
            this.object._methods.setActive(cursor+1);
        }.bind(this);

        this.object._store.labels = [
            {
                text: 'New Game',
                scene: 'game',
                cursor: true,
            },
            {
                text: 'Options',
                scene: 'options',
                cursor: false,
            },
            {
                text: 'High Score',
                scene: 'high-score',
                cursor: false,
            }
        ];

        var position = 0;

        for (var i = 0; i < this.object._store.labels.length; i++) {
            this.object._store.labels[i].object = Assets.create('text-label', {
                text: this.object._store.labels[i]['text'],
                color: __CONFIG['color-primary'],
            });
            this.object._store.labels[i].object.position.y = position;
            this.object.add(this.object._store.labels[i].object);
            position -= 20;
        }

        this.object._methods.setActive(0);
    },
    update: function() {
        if (Input.isPressed('ArrowUp')) {
            if (!this.object._store.moveTimeOut) {
                this.object._methods.moveUp();
                this.object._methods.throttleMove();
            }
        } else if (Input.isPressed('ArrowDown')) {
            if (!this.object._store.moveTimeOut) {
                this.object._methods.moveDown();
                this.object._methods.throttleMove();
            }
        }
    }
});
// } );
