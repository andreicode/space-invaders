Scene.register({
    name: 'high-score',
    init: function () {

        var header = Assets.create('header', {text: 'High Score'});
        header.position.x = -110;
        header.position.y = 50;

        var highScore = HighScore.get();
        var labels = [];

        for (var i = 0; i < highScore.length; i++) {

            labels.push({
                text: '' + (i+1) + '. ' + highScore[i].name + ' ' + highScore[i].score,
                scene: undefined,
            });

        };

        labels.push({
                text: 'Back',
                scene: 'main-menu'
        });

        var menu = Assets.create('menu-group', {
            labels: labels,
        });
        menu.position.x = -50;
        menu.position.y = 0;

        this.scene.add(header);
        this.scene.add(menu);

    },
    update: function () {

    }
});
