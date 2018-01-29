Scene.register({
    name: 'keyboard',
    init: function () {

        var header = Assets.create('header', {text: 'Keyboard'});
        header.position.x = -100;
        header.position.y = 50;

        var menu = Assets.create('menu-group', {
            labels: [
                {
                    text: 'Left: ' + window.localStorage.getItem('LEFT'), //'Left Arrow',
                    scene: undefined
                },
                {
                    text: 'Right: ' + window.localStorage.getItem('RIGHT'),
                    scene: undefined,
                },
                {
                    text: 'Shoot: ' + window.localStorage.getItem('SHOOT'),
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
        if (Input.isPressed('Escape')) {
            Scene.load('main-menu');
        }
    }
});
