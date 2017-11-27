/**
* Canvas
* @type {DOMElement}
*/
var __canvas = document.querySelector('.display__canvas');


/**
* Parameters
*/
var BACKGROUND_COLOR = 0x404040;
var WIDTH = __canvas.clientWidth;
var HEIGHT = __canvas.clientHeight;


/**
 * Handlers
 */
var __camera = undefined;
var __controls = undefined;
var __renderer = undefined;


/**
* Methods
*/
function createCamera() {
    return new THREE.PerspectiveCamera( 75, WIDTH / HEIGHT, 0.1, 1000 );
}

function createControls(camera) {
    return new THREE.OrbitControls(camera);
}

function createRenderer() {
    var renderer = new THREE.WebGLRenderer(
        {
            canvas: __canvas,
        }
    );

    renderer.setSize(WIDTH, HEIGHT);
    renderer.setClearColor(BACKGROUND_COLOR);

    return renderer;
}

function init() {
    __camera = createCamera();
    __controls = createControls(__camera);
    __renderer = createRenderer();
}

function start() {
    __camera.position.z = 20;
    Scene.load('bullet-1');
    game();
}


/**
* Main Game Loop
*/
function game() {
    requestAnimationFrame(game);
    Scene.active._update();
    TWEEN.update();
    __controls.update();
    __renderer.render(Scene.active.scene, __camera);
}


init();
start();

var testListItems = document.getElementsByClassName('test__item');
for (var i = 0; i < testListItems.length; i++) {
    testListItems[i].addEventListener('click', function(ev){
        Scene.load(ev.target.dataset['scene']);
    });
}
