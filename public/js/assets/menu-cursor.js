Assets.register({
    name: 'menu-cursor',
    init: function(options) {

        this.object._store = {};
        this.object._store.time = 0;
        this.object._store.blink = false;
        this.object._store.cursor = Assets.create('text-label', {
            color: __CONFIG['color-primary'],
            text: '>'
        });

        this.object.add(this.object._store.cursor);

    },
    update: function() {
        this.object._store.time += 1;
        if (this.object._store.time === 20) {

            if (this.object._store.blink) {
                this.object._store.cursor.material.color.setHex(__CONFIG['color-primary']);
                this.object._store.blink = false;
            } else {
                this.object._store.cursor.material.color.setHex(__CONFIG['color-accent']);
                this.object._store.blink = true;
            }

            this.object._store.time = 0;
        }
    }
});