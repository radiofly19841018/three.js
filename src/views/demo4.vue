<style>
  #demo4{
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }
  #tulip{
    /*opacity: 0;*/
  }
  .myCanvas{
/*    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;*/
  }
</style>
<template>
  <div id="demo4">
    <div id="tulip" @click="makeImg">
      <img src="../assets/logo.png">
      <img src="../assets/logo.png">
      <img src="../assets/logo.png">
      <img src="../assets/logo.png">
      <img src="../assets/logo.png">
      <img src="../assets/logo.png">
    </div>
  </div>
</template>

<script>
  let html2canvas = require('html2canvas');
  console.log(html2canvas);
  export default {
    name: 'demo4',
    data () {
      return {
      };
    },
    methods: {
      makeImg () {
        // 获取内容id 
        let content = document.getElementById("tulip"); 
        // 进行canvas生成 
        // ps 只能截整张图,不能截屏幕外的东西
        html2canvas(content, { 
            onrendered: function(canvas) { 
                canvas.setAttribute('class','myCanvas'); 
                document.getElementById('demo4').innerHTML = ''; 
                document.getElementById('demo4').appendChild(canvas); 
            } 
        }); 
      }
    },
    mounted () {
    }
  };
</script>
