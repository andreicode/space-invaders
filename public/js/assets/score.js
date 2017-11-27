Assets.register({
    name: 'score',
    init: function(options) {


        this.object._store = {};
        this.object._store.points = 0;
        this.object._store.score_label = Assets.create('text-label', {
            color: __CONFIG['color-primary'],
            text: 'Score: ',
        });

        this.object._store.score_value = Assets.create('text-label', {
            color: __CONFIG['color-primary'],
            text: '0',
        });

        this.object.add(this.object._store.score_label);
        this.object.add(this.object._store.score_label);
    },
    update: function() {
        
    }
});
