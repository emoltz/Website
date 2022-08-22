import * as THREE from 'three'
import * as dat from 'lil-gui'
import gsap from 'gsap'
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {EffectComposer} from "three/examples/jsm/postprocessing/EffectComposer.js";
import {RenderPass} from "three/examples/jsm/postprocessing/RenderPass.js";
import {UnrealBloomPass} from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import {SMAAPass} from "three/examples/jsm/postprocessing/SMAAPass";

/**
 * Debug
 */
// const gui = new dat.GUI()

const parameters = {
    materialColor: '#a1a29a',
    backgroundColor: new THREE.Color(0x212529)
}

const params = {
    exposure: 1.4,
    bloomStrength: 1,
    bloomThreshold: 0.9,
    bloomRadius: .55,
    rValue: 100,
    gValue: 100,
    bValue: 100,
};

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
scene.background = parameters.backgroundColor;

//materials/texture

const textureLoader = new THREE.TextureLoader();
const gradientTexture = textureLoader.load('static/images/3d_assets/textures/gradients/3.jpg');
gradientTexture.magFilter = THREE.NearestFilter;


const material = new THREE.MeshToonMaterial(
    {
        color: parameters.materialColor,
        gradientMap: gradientTexture,
        wireframe: true
    }
)

const backgroundMaterialCover = new THREE.MeshBasicMaterial({
    // color: parameters.backgroundColor
    color: parameters.backgroundColor
})

const objectsDistance = 4;

let computerModel = null;
// let material = null;
let gltfLoader = new GLTFLoader();
gltfLoader.load(
    'static/images/3d_assets/exports/apple1.gltf',
    (gltf) => {
        console.log("Success");
        computerModel = gltf.scene;
        console.log(computerModel)
        scene.add(computerModel);
        computerModel.children[0].children[0].material = backgroundMaterialCover;

        /**
         * REF:
         */

        // let material = computerModel.children[0].children[0].material;
        // computerMaterial = material;
        // //changes color of emission
        // material.emissive.r = params.rValue;
        // material.emissive.g = params.gValue;
        // material.emissive.b = params.bValue;
        // computerModel.children[0].material = material;
        // computerModel.children[0].children[0].material = material;
        // computerModel.children[0].children[1].material = material;
        // computerModel.children[0].children[2].material = material;

        //moves model into position

        computerModel.position.x = 1;
        computerModel.position.z = -1;
        computerModel.rotation.z = -.2;
        computerModel.rotation.x = .3;

        // computerModel.rotation.z = 1.5;

        // computerModel.children[0].children[1].material = backgroundMaterialCover;
    },
    () => {
        console.log("Progress");
    },
    () => {
        console.log("Error with model");
    }
)

let floppyDisk = null;
gltfLoader = new GLTFLoader();
gltfLoader.load(
    'static/images/3d_assets/exports/floppyDisk2.gltf',
    (gltf) => {
        console.log("Floppy Success");
        floppyDisk = gltf.scene;
        console.log(floppyDisk)
        scene.add(floppyDisk);
        floppyDisk.children[0].children[0].material = backgroundMaterialCover;

        floppyDisk.position.y = -objectsDistance;
        floppyDisk.position.x = 1.9;
        floppyDisk.rotation.z = .5;
        floppyDisk.scale.set(.35, .35, .35);

    },
    () => {
        console.log("Floppy Progress");
    },
    () => {
        console.log("Error with model");
    }
)

let pet = null;
gltfLoader = new GLTFLoader();
gltfLoader.load(
    'static/images/3d_assets/exports/pet.gltf',
    (gltf) => {
        console.log("PET Success");
        pet = gltf.scene;
        console.log(pet)
        scene.add(pet);
        pet.children[0].children[0].material = backgroundMaterialCover;

        pet.position.y = -objectsDistance * 2 - 1.5;
        pet.position.x = 1;

    },
    () => {
        console.log("Floppy Progress");
    },
    () => {
        console.log("Error with model");
    }
)

const mesh1 = new THREE.Mesh(
    new THREE.TorusGeometry(1, .4, 16, 32),
    material
)
const mesh2 = new THREE.Mesh(
    new THREE.ConeGeometry(1, 2, 32),
    material
)
const mesh3 = new THREE.Mesh(
    new THREE.TorusKnotGeometry(.8, .35, 100, 16),
    material
)

mesh1.position.y = -0;
mesh2.position.y = -objectsDistance;
mesh3.position.y = -objectsDistance * 2;

mesh1.position.x = 1;
mesh2.position.x = 1.9;
mesh3.position.x = 1;


//LIGHTS


const directionalLight = new THREE.DirectionalLight('#ffffff', 2)
directionalLight.position.set(1, 1, 0);

scene.add(
    // mesh2,
    // mesh3,
    directionalLight);

const sectionMeshes = [mesh1, mesh2, mesh3];
const sectionMeshesNew = [computerModel];

//PARTICLES!

const particlesCount = 200;
const positions = new Float32Array(particlesCount * 3); // 3 because of x, y, z axis


for (let i = 0; i < particlesCount; i++) {
    positions[i * 3] = (Math.random() - .5) * 10; //x
    positions[i * 3 + 1] = objectsDistance * .5 - Math.random() * objectsDistance * sectionMeshes.length; //y
    positions[i * 3 + 2] = (Math.random() - .5) * 10; //z
}
const particlesGeometry = new THREE.BufferGeometry();
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
//martial
const particlesMaterial = new THREE.PointsMaterial({
    color: parameters.materialColor,
    sizeAttenuation: true,
    size: 0.03
});

//points
const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles)


/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */

const cameraGroup = new THREE.Group();
scene.add(cameraGroup);

// Base camera
const camera = new THREE.PerspectiveCamera(40, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 6
cameraGroup.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

//scroll

let scrollY = window.scrollY;
let currentSection = 0;

window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
    const newSection = Math.round(scrollY / sizes.height);

    if (newSection !== currentSection) {
        currentSection = newSection;

        gsap.to(
            sectionMeshes[currentSection].rotation,
            {
                duration: 1.5,
                ease: 'power2.inOut',
                x: '+=6',
                // y: '+=6',
            }
        )
    }


})

//cursor

const cursor = {};
cursor.x = 0;
cursor.y = 0;

window.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX / sizes.width - .5; //makes it from zero to 1, instead of pixel values. The -.5 makes the center 0
    cursor.y = event.clientY / sizes.height - .5;

})

/**
 * Bloom Pass
 */

const renderTarget = new THREE.WebGLRenderTarget(
    800,
    600, {
        samples: 6
        // samples:
    }
)

const smaaPass = new SMAAPass();


const effectComposer = new EffectComposer(renderer, renderTarget);
effectComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
const renderPass = new RenderPass(scene, camera);

const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    1.5,
    .4,
    .85
);
bloomPass.threshold = params.bloomThreshold;
bloomPass.strength = params.bloomStrength;
bloomPass.radius = params.bloomRadius;

effectComposer.addPass(renderPass);
effectComposer.addPass(bloomPass);
// effectComposer.addPass(smaaPass);


// gui.add( params, 'bloomThreshold', 0.0, 1.0 ).onChange( function ( value ) {
//
//     bloomPass.threshold = Number( value );
//
// } );
// gui.add( params, 'bloomStrength', 0.0, 3.0 ).onChange( function ( value ) {
//
//     bloomPass.strength = Number( value );
//
// } );
//
// gui.add( params, 'bloomRadius', 0.0, 1.0 ).step( 0.01 ).onChange( function ( value ) {
//
//     bloomPass.radius = Number( value );
//
// } );
//
// gui.add( params, 'rValue', 0.0, 1.0 ).step( 0.01 ).onChange( function ( value ) {
//
//     computerMaterial.emissive.r = Number(value);
//
// } );
//
// gui.add( params, 'gValue', 0.0, 1.0 ).step( 0.01 ).onChange( function ( value ) {
//
//     computerMaterial.emissive.g = Number(value);
//
// } );
//
// gui.add( params, 'bValue', 0.0, 1.0 ).step( 0.01 ).onChange( function ( value ) {
//
//     computerMaterial.emissive.b = Number(value);
//
// } );


/**
 * Animate
 */
const clock = new THREE.Clock()
let previousTime = 0;

const tick = () => {
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime;
    previousTime = elapsedTime;


    //animate camera
    camera.position.y = -scrollY / sizes.height * objectsDistance;

    const parallaxX = cursor.x * .5;
    const parallaxY = -cursor.y * .5;
    cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * deltaTime; //easing!
    cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * deltaTime;

    //animate meshes


    // for (const mesh of sectionMeshes) {
    //     mesh.rotation.x += deltaTime * .15;
    //     mesh.rotation.y += deltaTime * .15;
    // }

    for (const mesh of sectionMeshes) {
        mesh.rotation.x = scrollY / sizes.height * objectsDistance * .5;
        mesh.rotation.y = scrollY / sizes.height * objectsDistance * .5;
    }

    if (computerModel && floppyDisk && pet) {
        // computerModel.rotation.x = scrollY / sizes.height * objectsDistance * .2;
        computerModel.rotation.y = -scrollY / sizes.height * objectsDistance * .7;
        floppyDisk.rotation.y = -scrollY / sizes.height * objectsDistance * .3;
        pet.rotation.y = -scrollY / sizes.height * objectsDistance;
    }

    // Render
    // renderer.render(scene, camera);
    effectComposer.render();
    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()