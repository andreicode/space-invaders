Assets.register({
    name: 'score',
    init: function(options) {


        this.object._store = {};
        this.object._store.points = 0;
        this.object._store.score = Assets.create('text-label', {
            color: __CONFIG['color-primary'],
            text: options.text,
            type: 'normal',
        });

        this.object.add(this.object._store.score);
    },
    update: function() {

    }
});
