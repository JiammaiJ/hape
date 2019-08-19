<template>
  <div>
    <transition mode="out-in">
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
  .v-enter{
    transform:translateX(100%);
  }
  .v-leave-to{
    transform:translateX(-100%);
  }
  .v-enter-active,.v-leave-active{
    transition:.5s all linear;
  }
</style>