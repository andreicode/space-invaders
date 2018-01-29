Scene.register({
    name: 'game-over',
    init: function () {
        this.scene._store = {};
        this.scene._methods = {};

        var header = Assets.create('header', {text: 'Game Over'});
        header.position.x = -110;
        header.position.y = 40;

        var score = Assets.create('text-label', {
            text: 'Score: ' + '0',
            color: __CONFIG['color-primary'],
        });

        score.position.x = -35;

        this.scene.add(header);
        this.scene.add(score);

        this.scene._store.letterCount = 0;
        this.scene._store.canGetInput = true;
        this.scene._methods.getInput = function (key) {

        if (!this.scene._store.canGetInput) {
          return;
        }

        var letter = Assets.create('text-label', {
            text: key,
            color: __CONFIG['color-primary'],
        });

        letter.position.y = -30;
        letter.position.x = -35 + 16 * this.scene._store.letterCount;


        this.scene.add(letter);

        this.scene._store.canGetInput = false;
        this.scene._store.letterCount++;
        setTimeout(function () {
            this.scene._store.canGetInput = true;
        }.bind(this), 400);

    }.bind(this);

    },
    update: function () {

        if (Input.isPressed('Enter') && this.scene._store.letterCount > 2) {
            Scene.load('main-menu');
        }

        if (Input.store.length && Input.store[0].length === 1) {
            this.scene._methods.getInput(Input.store[0]);
        }

    }
});
