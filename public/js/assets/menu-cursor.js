Assets.register({
    name: 'menu-cursor',
    init: function(options) {
        // var geometry = new THREE.Geometry();
        // geometry.vertices.push(new THREE.Vector3(-10, 0, 0));
        // geometry.vertices.push(new THREE.Vector3(0, 10, 0));
        // geometry.vertices.push(new THREE.Vector3(10, 0, 0));
        // var material = new THREE.LineBasicMaterial({ color: 0x0000ff });
        // this.object = new THREE.Line(geometry, material);
        var geometry = new THREE.Geometry();
        var material = new THREE.MeshBasicMaterial( { color: options.color } );
        this.object = new THREE.Mesh(geometry, material);

        var loader = new THREE.FontLoader();
        loader.load('../../fonts/Orbitron/Orbitron_Regular.json', function(font) {

            this.object.geometry = new THREE.TextGeometry(options.text, {
                font: font,
                size: options.type === 'header' ? __CONFIG['font-size-header'] :__CONFIG['font-size'],
                height: 1,
                curveSegments: 4,
                material: 0,
                extrudeMaterial: 1
            });
            this.object.geometry.computeFaceNormals();
            this.object.geometry.computeVertexNormals();
            this.object.geometry.normalsNeedUpdate = true;
            this.object.geometry.verticesNeedUpdate = true;
            this.object.geometry.dynamic = true;

            if (options.center) {
                this.object.geometry.computeBoundingBox();
                var width = this.object.geometry.boundingBox.max.x - this.object.geometry.boundingBox.min.x;
                this.object.position.x = 0 - width / 2;
            }

        }.bind(this));
    },
    update: function() {

    }
});
