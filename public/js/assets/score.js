Assets.register({
    name: 'score',
    init: function(options) {

        this.object._store = {};
        this.object._store.points = options.score;
        this.object._store.score_text;
        this.object._store.score_value;

        score_text = Assets.create('text-label', {
            text: 'Score: ',
            color: __CONFIG['color-primary'],
        });

        score_value = Assets.create('text-label', {
            text: options.score,
            color: __CONFIG['color-primary'],
        });

        var position = -30;

        score_text.position.x = position;
        score_value.position.x = position + 60;

        this.object.add(score_text);
        this.object.add(score_value);


        // for(var i = 0; i < options.labels.length; i++) {
        //     this.object._store.labels[i] = {
        //         text: options.labels[i]['text'],
        //         center: true,
        //         object: Assets.create('text-label', {
        //             text: options.labels[i]['text'],
        //             color: __CONFIG['color-primary'],
        //         }),
        //     };


        //     this.object._store.labels[i].object.position.x = position;
        //     this.object.add(this.object._store.labels[i].object);
        //     position += 60;
        // }
    },
    update: function() {

    }
});
