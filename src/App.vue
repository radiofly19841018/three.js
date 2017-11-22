<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style>
*{
  box-sizing: border-box;
}
html,body{
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  font-size: 10px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
#app{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
