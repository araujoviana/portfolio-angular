import { AfterViewInit, Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import  *  as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


// HACK
interface GLTF {
  scene: THREE.Scene;
  scenes: THREE.Scene[];
  animations: THREE.AnimationClip[];
  cameras: THREE.Camera[];
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
  @ViewChild('bg',  {static: false}) canvasRef!: ElementRef<HTMLCanvasElement>;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 3000);
  renderer!: THREE.WebGLRenderer;
  
  mouse = new THREE.Vector2();


  ngAfterViewInit(): void {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvasRef.nativeElement,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    
    this.camera.position.setZ(30);
    this.camera.position.setX(-20)
  
    // Luzes
    // const pointLight = new THREE.PointLight(0xffffff, 100, 50, 2);
    // pointLight.position.set(0,0,0);
    const ambientLight = new THREE.AmbientLight(0xffffff);
    // const axesHelper = new THREE.AxesHelper(50);
    this.scene.add(ambientLight);
  
    // Controles de Câmera
    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.enableDamping = true;

    window.addEventListener('mousemove', (event) => {
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    });
  
    // Modelo do computador
    const loader = new GLTFLoader();
    loader.load(this.computerPath, (gltf: GLTF) => {
      const model = gltf.scene;

  
      // Redimensiona o modelo
      const modelScale = 0.018;
      model.scale.set(modelScale, modelScale, modelScale);

      // Reposiciona o modelo para que o centro fique na origem
      const box = new THREE.Box3().setFromObject(model);
      const center = new THREE.Vector3();
      box.getCenter(center);
      model.position.sub(center);
    
      this.scene.add(gltf.scene);

      console.log("Renderizando computador")
    }, undefined, (error: any) => {
      console.error('Erro ao carregar o modelo:', error);
    });
  
    const animate = () => {
      requestAnimationFrame(animate);
  
      controls.update();
      this.renderer.render(this.scene, this.camera);
    }
  
    animate();
  }
}
