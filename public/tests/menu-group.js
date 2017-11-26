Scene.register({
    name: 'menu-group',
    init: function () {

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
        menu.position.x = -40;
        this.scene.add(menu);

    },
    update: function () {
        
    }
});
