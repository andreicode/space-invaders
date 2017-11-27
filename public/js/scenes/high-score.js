Scene.register({
    name: 'high-score',
    init: function () {

        var header = Assets.create('header', {text: 'High Score'});
        header.position.x = -110;
        header.position.y = 50;

        var menu = Assets.create('menu-group', {
            labels: [
                {
                    text: '1. Karina 100',
                    scene: undefined
                },
                {
                    text: '2. Andrei 90',
                    scene: undefined,
                },
                {
                    text: '3. Petru 80',
                    scene: undefined
                },
                {
                    text: 'Back',
                    scene: 'main-menu'
                }
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
