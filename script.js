// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('three-canvas'),
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add lighting
const light = new THREE.AmbientLight(0x404040, 1); // Soft ambient light
scene.add(light);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 1, 1).normalize();
scene.add(directionalLight);

// Create objects: Cube, Sphere, Torus
const geometryCube = new THREE.BoxGeometry();
const materialCube = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometryCube, materialCube);
cube.position.set(-2, 0, 0);
scene.add(cube);

const geometrySphere = new THREE.SphereGeometry(1, 32, 32);
const materialSphere = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const sphere = new THREE.Mesh(geometrySphere, materialSphere);
sphere.position.set(3, 0, 0);
scene.add(sphere);

const geometryTorus = new THREE.TorusGeometry(2, 0.5, 16, 100);
const materialTorus = new THREE.MeshStandardMaterial({ color: 0x0000ff });
const torus = new THREE.Mesh(geometryTorus, materialTorus);
torus.position.set(0, 3, 0);
scene.add(torus);

// Add OrbitControls for camera interaction
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.screenSpacePanning = false;
controls.maxPolarAngle = Math.PI / 2;

// Position the camera
camera.position.z = 5;

// Resize handler to adjust canvas size
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

// Animate the scene
function animate() {
  requestAnimationFrame(animate);

  // Rotate objects for dynamic effect
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  sphere.rotation.x -= 0.02;
  sphere.rotation.y += 0.02;

  torus.rotation.x += 0.015;
  torus.rotation.y -= 0.015;

  // Update the controls to interact with the scene
  controls.update();
  renderer.render(scene, camera);
}

animate();
