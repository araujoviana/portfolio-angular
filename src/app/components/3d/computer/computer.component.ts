import { AfterViewInit, Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Vector2 } from 'three';

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

  @ViewChild('bg', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, 1, 0.1, 3000);
  renderer!: THREE.WebGLRenderer;

  mouse = new Vector2();
  model!: THREE.Object3D;
  hoverOffset = 0;

  ngAfterViewInit(): void {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvasRef.nativeElement,
      alpha: true,
      antialias: true,
    });
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.updateSize();

    this.camera.position.setZ(20);
    this.camera.position.setX(-15);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
    hemiLight.position.set(0, 50, 0);
    this.scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.color.setHSL(0.1, 1, 0.95);
    dirLight.position.set(-1, 1.75, 1);
    dirLight.position.multiplyScalar(30);

    dirLight.castShadow = true;

    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;

    const shadowCamSize = 50;
    dirLight.shadow.camera.left = - shadowCamSize;
    dirLight.shadow.camera.right = shadowCamSize;
    dirLight.shadow.camera.top = shadowCamSize;
    dirLight.shadow.camera.bottom = - shadowCamSize;
    dirLight.shadow.camera.far = 100;

    this.scene.add(dirLight);

    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.minPolarAngle = Math.PI / 4;
    controls.maxPolarAngle = Math.PI * 3 / 4;


    window.addEventListener('mousemove', (event) => {
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    });

    const loader = new GLTFLoader();
    loader.load(this.computerPath, (gltf: GLTF) => {
      this.model = gltf.scene;

      const modelScale = 0.03;
      this.model.scale.set(modelScale, modelScale, modelScale);

      const box = new THREE.Box3().setFromObject(this.model);
      const center = new THREE.Vector3();
      box.getCenter(center);
      this.model.position.sub(center);
      this.model.position.y -= 1.5

      this.model.traverse((child: any) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      this.scene.add(this.model);
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

  @HostListener('window:resize')
  updateSize(): void {
    if (!this.canvasRef || !this.renderer) return;

    const container = this.canvasRef.nativeElement.parentElement;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight || 400;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }
}
