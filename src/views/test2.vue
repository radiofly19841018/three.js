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
        cube: null,
        time: 0,
        order: true,
        all: 0
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
        this.camera.position.y = 1;
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
        this.geometry = new THREE.Geometry();
        // B begin
        this.geometry.vertices.push( new THREE.Vector3( - 500, 0, 0 ) );
        this.geometry.vertices.push( new THREE.Vector3( 500, 0, 0 ) );
        // B end

        for ( var i = 0; i <= 100; i ++ ) {
          var line = new THREE.Line( this.geometry, new THREE.LineBasicMaterial( { color: 0x000000, opacity: 0.2 } ) );
          line.position.z = ( i * 50 ) - 2500;
          this.scene.add( line );

          var line = new THREE.Line( this.geometry, new THREE.LineBasicMaterial( { color: 0x000000, opacity: 0.2 } ) );
          line.position.x = ( i * 50 ) - 2500;
          line.rotation.y = 90 * Math.PI / 180;
          this.scene.add( line );
        }
      },
      render() {
        this.all ++;
        console.log(this.all);
        if (this.order) {
          this.camera.position.y += 10;
          this.time ++;
          if (this.time < 400) {
            this.order = true;
          } else {
            this.order = false;
          }
        } else {
          this.camera.position.y -= 10;
          this.time --;
          if (this.time > 0) {
            this.order = false;
          } else {
            this.order = true;
          }
        }
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
