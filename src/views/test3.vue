<style>
  #test3{
    width: 100%;
    height: 100%;
  }
</style>
<template>
  <div id="test3">
    <input class="video-box" type="file" capture="camera" @change="checkinfo">
    <!-- <input class="video-box" type="file" accept="video/*" capture="camera" @change="checkinfo"> -->
  </div>
</template>

<script>
  export default {
    name: 'test3',
    data () {
      return {
      };
    },
    methods: {
      checkinfo (e) {
        if (e.target.files.length > 0) {
          let _file = e.target.files[0];
          if (_file.type.split('/')[0] !== 'video') {
            console.log('视频格式不正确');
          } else if (_file.size / 1024 / 1024 > 20) {
            console.log('视频过大,请重新拍摄');
          } else {
            let formData = new FormData();
            formData.append('file', _file);
            console.log(formData);
          }
        } else {
          console.log('空');
        }
      }
    },
    mounted () {
      console.log('start');
    }
  };
</script>
