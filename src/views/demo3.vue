<style>
  #demo3{
    width: 100%;
    height: 100%;
  }
</style>
<template>
  <div id="demo3">
  </div>
</template>

<script>
  let THREE = require('three.js');
  export default {
    name: 'demo1',
    data () {
      return {
        width: null,
        height: null,
        renderer: null,
        camera: null,
        scene: null,
        light: null,
        cube: null
      };
    },
    methods: {
      initThree () {
        this.width = document.getElementById('demo3').clientWidth;
        this.height = document.getElementById('demo3').clientHeight;
        this.renderer = new THREE.WebGLRenderer({
            antialias : true
        });
        this.renderer.setSize(this.width, this.height);
        document.getElementById('demo3').appendChild(this.renderer.domElement);
        this.renderer.setClearColor(0xFFFFFF, 1.0);
      },
      initCamera() {
        this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 10000);
        this.camera.position.x = 0;
        this.camera.position.y = 1000;
        this.camera.position.z = 0;
        this.camera.up.x = 0;
        this.camera.up.y = 0;
        this.camera.up.z = 1;
        this.camera.lookAt({
            x : 0,
            y : 0,
            z : 0
        });
      },
      initScene() {
        this.scene = new THREE.Scene();
      },
      initLight() {
          this.light = new THREE.DirectionalLight(0xFF0000, 1.0, 0);
          this.light.position.set(100, 100, 200);
          this.scene.add(this.light);
      },
      initObject() {
        let geometry = new THREE.Geometry();
        let material = new THREE.LineBasicMaterial( { vertexColors: THREE.VertexColors} );
        let color1 = new THREE.Color( 0x444444 ), color2 = new THREE.Color( 0xFF0000 );

        // 线的材质可以由2点的颜色决定
        let p1 = new THREE.Vector3( -100, 0, 100 );
        let p2 = new THREE.Vector3(  100, 0, -100 );
        geometry.vertices.push(p1);
        geometry.vertices.push(p2);
        geometry.colors.push( color1, color2 );

        let line = new THREE.Line( geometry, material, THREE.LinePieces );
        this.scene.add(line);
      },
      render() {
        this.renderer.clear();
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.render);
      },
      threeStart() {
        this.initThree();
        this.initCamera();
        this.initScene();
        this.initLight();
        this.initObject();
        this.render();
      }
    },
    mounted () {
      this.threeStart();
      console.log('start');
    }
  };
</script>
