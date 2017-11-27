Scene.register({
    name: 'score',
    init: function () {
        var score_text = Assets.create('score', {
            text: 'Score:',
        });

        var score = Assets.create('score', {
            text: '0',
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
