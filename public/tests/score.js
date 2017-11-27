Scene.register({
    name: 'score',
    init: function () {
        var score_text = Assets.create('text-label', {
            text: 'Score:',
            color: __CONFIG['color-primary'],
            type: 'normal',
        });

        var score = Assets.create('text-label', {
            text: '0',
            color: __CONFIG['color-primary'],
            type: 'normal',
        });

        score_text.position.x = -150;
        score_text.position.y = 90;

        score.position.x = -90;
        score.position.y = 90;

        this.scene.add(score_text);
        this.scene.add(score);
    },

    update: function () {

    }
});
