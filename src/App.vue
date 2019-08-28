<template>
  <div class="app">
    <transition mode="out-in" name="app">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name:'App'
  }
</script>

<style lang="less" scoped>
  // .v-enter{
  //   transform:translateX(100%);
  // }
  // .v-leave-to{
  //   transform:translateX(-100%);
  // }
  // .v-enter-active,.v-leave-active{
  //   transition:.5s all linear;
  // }

    .app-enter{
      transform:translateX(100%);
    }
    .app-leave-to{
      transform:translateX(-100%);
    }
    .app-enter-active,.app-leave-active{
      transition:.5s all ease;
    }
    .app{
      width:100%;
      height:auto;
    }
</style>