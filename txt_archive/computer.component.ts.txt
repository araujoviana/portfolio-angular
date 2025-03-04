import { AfterViewInit, Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Vector2 } from 'three';

// HACK
interface GLTF {
  scene: THREE.Scene;
  cameras: THREE.Camera[];
  scenes: THREE.Scene[];
  animations: THREE.AnimationClip[];
  asset: any;
}

@Component({
  selector: 'app-computer',
  imports: [],
  templateUrl: './computer.component.html',
  styleUrl: './computer.component.scss'
})
export class ComputerComponent implements AfterViewInit {

  computerPath = "3d/Computer.glb";

  // Captura o canvas para renderizar a cena
  @ViewChild('bg', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, 1, 0.1, 3000);
  renderer!: THREE.WebGLRenderer;

  mouse = new Vector2();
  model!: THREE.Object3D;
  hoverOffset = 0;

  ngAfterViewInit(): void {
    // Inicializa o renderizador
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvasRef.nativeElement,
      alpha: true,  // Torna o fundo transparente
      antialias: true, // Smooth edges for better visual quality
    });
    this.renderer.shadowMap.enabled = true; // Enable shadow mapping for realistic shadows
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Use a softer shadow type

    // Ajusta o tamanho para o elemento pai
    this.updateSize();

    // Adjusted camera position (closer)
    this.camera.position.setZ(20); // Change the value to be closer
    this.camera.position.setX(-15);

    // ===== LIGHTING =====

    // 1. Hemisphere Light - Simulates sky and ground lighting, softer ambient feel
    const hemiLight = new THREE.HemisphereLight(
      0xffffff, // skyColor: light blue-ish color, like the sky
      0x444444, // groundColor: dark gray, like ground or shadowed areas
      0.6,    // intensity - how bright the light is.  Tweak this!
    );
    hemiLight.position.set(0, 50, 0); // Position from above
    this.scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(
      0xffffff, // color: white light, like the sun
      0.8,    // intensity - how bright the light is. Tweak this!
    );
    dirLight.color.setHSL(0.1, 1, 0.95); // Slightly warmer tone, like sunlight
    dirLight.position.set(-1, 1.75, 1); // Direction of the light. Tweak this! (x, y, z)
    dirLight.position.multiplyScalar(30); // Move it further away to act more like sun

    dirLight.castShadow = true; // Enable shadow casting for this light

    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;

    const shadowCamSize = 50; // Adjust this to fit your model and scene
    dirLight.shadow.camera.left = - shadowCamSize;
    dirLight.shadow.camera.right = shadowCamSize;
    dirLight.shadow.camera.top = shadowCamSize;
    dirLight.shadow.camera.bottom = - shadowCamSize;
    dirLight.shadow.camera.far = 100; // How far shadows are rendered

    this.scene.add(dirLight);


    // Controles de Câmera
    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.enableDamping = true;

    window.addEventListener('mousemove', (event) => {
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    });

    console.log("Carregando computador...");
    // Modelo do computador
    const loader = new GLTFLoader();
    loader.load(this.computerPath, (gltf: GLTF) => {
      this.model = gltf.scene;

      // Redimensiona o modelo
      const modelScale = 0.03;
      this.model.scale.set(modelScale, modelScale, modelScale);

      // Reposiciona o modelo para que o centro fique na origem
      const box = new THREE.Box3().setFromObject(this.model);
      const center = new THREE.Vector3();
      box.getCenter(center);
      this.model.position.sub(center);

      // Adjusted model position (lower)
      this.model.position.y -= 1.5 // Change the value to be lower

      // Enable shadow casting and receiving for the model (and its children)
      this.model.traverse((child: any) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      this.scene.add(this.model);

      console.log("Renderizando computador")
    }, undefined, (error: any) => {
      console.error('Erro ao carregar o modelo:', error);
    });

    const animate = () => {
      requestAnimationFrame(animate);

      controls.update();

      if (this.model) {
        this.hoverOffset += 0.05
        this.model.position.y = this.model.position.y + Math.sin(this.hoverOffset) * 0.02;
      }

      this.renderer.render(this.scene, this.camera);
    }

    animate();
  }

  // Atualiza o tamanho quando a janela é redimensionada
  @HostListener('window:resize')
  updateSize(): void {
    if (!this.canvasRef || !this.renderer) return;

    const container = this.canvasRef.nativeElement.parentElement;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight || 400; // altura mínima

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }
}