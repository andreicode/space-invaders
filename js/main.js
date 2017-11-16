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
var __scene = undefined;
var __renderer = undefined;


/**
 * Objects
 */
var cube = undefined;


/**
* Methods
*/


function createCamera() {
    return new THREE.PerspectiveCamera( 75, WIDTH / HEIGHT, 0.1, 1000 );
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

function createScene() {
    return new THREE.Scene();
}

function init() {
    __scene = createScene();
    __camera = createCamera();
    __renderer = createRenderer();
}

function start() {
    // Aditional Set-up ...
    __camera.position.z = 5;

    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x184fea, wireframe: true } );
    cube = new THREE.Mesh( geometry, material );
    __scene.add( cube );

    game();
}


/**
 * Event Listeners
 */

document.querySelector('.display__open-menu').addEventListener('click', function () {

    var menu = document.querySelector('.display__menu');
    console.log(menu);
    //toggle the class => ".display__menu--is-open" on "menu" element

})


/**
* Main Game Loop
*/


function update() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}

function render() {
    __renderer.render( __scene, __camera );
}

function game() {
    requestAnimationFrame(game);

    update();
    render();
}

init();
start();
