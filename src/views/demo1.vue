<template>
  <div id="demo1">
  </div>
</template>

<script>
  let THREE = require('three.js');
  export default {
    name: 'demo1',
    mounted () {
      let scene = new THREE.Scene(); // 场景
      let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000); // 相机
      let renderer = new THREE.WebGLRenderer(); // 渲染器
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.getElementById('demo1').appendChild(renderer.domElement);
      let geometry = new THREE.CubeGeometry(1,1,1);
      let material = new THREE.MeshBasicMaterial({color: 0x00ff00});
      let cube = new THREE.Mesh(geometry, material);
      scene.add(cube);
      camera.position.z = 6;
      let render = () => {
          requestAnimationFrame(render);
          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;
          renderer.render(scene, camera);
      };
      render();
    }
  };
</script>
