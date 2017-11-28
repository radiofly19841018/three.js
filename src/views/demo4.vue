<style>
  #demo4{
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }
  #tulip{
    /*opacity: 0;*/
    width: 100%;
    height: 50%;
  }
  .myCanvas{
/*    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;*/
    width: 100%;
    height: 50%;
  }
</style>
<template>
  <div id="demo4">
    <div id="tulip" @click="makeImg">
      asdlk;afdsljkafdsljk;
      <p>safdljpppppppp</p>
      <div>2222</div>
      <h3>33333</h3>
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
        html2canvas(content, { 
            onrendered: function(canvas) { 
                //添加属性 
                canvas.setAttribute('class','myCanvas'); 
                //读取属性值 
                // var value= canvas.getAttribute('id'); 
                // document.getElementById('demo4').innerHTML = ''; 
                document.getElementById('demo4').appendChild(canvas); 
            } 
        }); 
      }
    },
    mounted () {
    }
  };
</script>
