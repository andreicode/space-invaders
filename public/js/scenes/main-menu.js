Scene.register({
    name: 'main-menu',
    init: function () {
        var header = Assets.create('header', {text: 'Space Invaders'});
        header.position.x = -145;
        header.position.y = 40;


        var menu = Assets.create('menu-group', {
            labels: [
                {
                    text: 'New Game',
                    scene: 'game',
                },
                {
                    text: 'Options',
                    scene: 'options',
                },
                {
                    text: 'High Score',
                    scene: 'high-score',
                },
            ]

        });
        menu.position.x = -50;
        menu.position.y = 0;

        this.scene.add(header);
        this.scene.add(menu);

    },
    update: function () {

    }
});
