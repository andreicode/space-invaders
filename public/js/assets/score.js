Assets.register({
    name: 'score',
    init: function(options) {

        this.object._store = {};
        this.object._store.points = 0;

        this.object._store.labels = [];
        var position = -30;

        for(var i = 0; i < options.labels.length; i++) {
            this.object._store.labels[i] = {
                text: options.labels[i]['text'],
                center: true,
                object: Assets.create('text-label', {
                    text: options.labels[i]['text'],
                    color: __CONFIG['color-primary'],
                }),
            };


            this.object._store.labels[i].object.position.x = position;
            this.object.add(this.object._store.labels[i].object);
            position += 60;
        }
    },
    update: function() {

    }
});
