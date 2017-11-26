Assets.register({
    name: 'header',
    init: function(options) {

        this.object = new THREE.Object3D();
        this.object._store = {};

        this.object._store['text'] = Assets.create('text-label', {
            text: '< ' + options.text + ' />',
            color: __CONFIG['color-primary'],
            type: 'header',
            center: options.center,
        });


        this.object.add(this.object._store['text']);
        

        // var tween = new TWEEN.Tween(this.object._store['text'].position)
        // .to({ x: 100, y: 100, z: 0 }, 1000)
        // .onUpdate(function (q) {
        //     console.log(q)
        // })
        // .start();


    },
    update: function() {
        // this.object._store['text'].rotation.x += 0.01;
    }
});
