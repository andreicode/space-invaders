Scene.register({
    name: 'options',
    init: function () {

        var header = Assets.create('header', {text: 'Options'});
        header.position.x = -60;
        header.position.y = 40;

        var menu = Assets.create('menu-group', {
            labels: [
                {
                    text: 'Sound On',
                    scene: undefined
                },
                {
                    text: 'Keyboard',
                    scene: 'keyboard',
                },
                {
                    text: 'Controller',
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
        console.log('options')
        if (Input.isPressed('ArrowRight')) {
            Scene.load('game');
        }
    }
});
