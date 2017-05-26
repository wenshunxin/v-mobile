<template>
  <div id="app">
  <transition name="fade">
    <router-view></router-view>
  </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html{
  font-size: 16px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}

::-webkit-scrollbar {
    width: 2px;
    height: 2px;
}

::-webkit-scrollbar-track {
    background: transparent;
}

::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,.1);
}
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s
    }
    .fade-enter, .fade-leave-active {
    opacity: 0
    }
</style>
