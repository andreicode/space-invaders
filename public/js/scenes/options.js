var menu;
Scene.register({
    name: 'options',
    init: function () {

        var header = Assets.create('header', {text: 'Options'});
        header.position.x = -80;
        header.position.y = 50;

        menu = Assets.create('menu-group', {
            labels: [
                {
                    text: 'Sound: ' + window.localStorage.getItem('SOUND'),
                    scene: undefined
                },
                {
                    text: 'Keyboard',
                    scene: 'keyboard',
                },
                {
                    text: 'Music: ' + window.localStorage.getItem('MUSIC'),
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
    // changeOption: function (id, status) {
    //     if(id == 0) { // SOUND
    //
    //     }
    //     else if(id == 1) {
    //         // window.localStorage.set('MUSIC', status);
    //     }
    // },
    update: function () {
        if(Input.isPressed('SELECT') && menu._methods.getCursor() == 0) {
            //changeOption(0, window.localStorage.getItem('SOUND') === 'NO' ? 'YES' : 'NO');
            Cache.set('SOUND', window.localStorage.getItem('SOUND') === 'ON' ? 'OFF' : 'ON');
        }
        if(Input.isPressed('SELECT') && menu._methods.getCursor() == 2) {
            //changeOption(1, window.localStorage.getItem('MUSIC') === 'NO' ? 'YES' : 'NO');
            Cache.set('MUSIC', window.localStorage.getItem('MUSIC') === 'ON' ? 'OFF' : 'ON');
        }
    }
});
