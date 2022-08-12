import * as THREE from 'three'
// import * as dat from 'lil-gui'
import gsap from 'gsap'

/**
 * Debug
 */
// const gui = new dat.GUI()

const parameters = {
    materialColor: '#a1a29a'
}

// gui
//     .addColor(parameters, 'materialColor')
//     .onChange(() => {
//             material.color.set(parameters.materialColor);
//             particlesMaterial.color.set(parameters.materialColor)
//         }
//     )


/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Test cube
 */

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

const objectsDistance = 4;

// const wireGeo = new THREE.SphereGeometry(1, 2, 32);
// const wireframe = new THREE.WireframeGeometry(wireGeo)
//
// scene.add(wireframe)


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

scene.add(mesh1, mesh2, mesh3, directionalLight);

const sectionMeshes = [mesh1, mesh2, mesh3];

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
        mesh.rotation.x = scrollY / sizes.height * objectsDistance *.5;
        mesh.rotation.y = scrollY / sizes.height * objectsDistance *.5;
    }

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()