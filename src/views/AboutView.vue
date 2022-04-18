<template>
  <div class="about">
    <AboutComp />
  </div>
</template>

<script>
import AboutComp from "../components/AboutComp.vue";

export default {
  components: {
    AboutComp
  }
}

</script>

<style scoped lang="less">
.about {
  min-height: 100vh;
  align-items: center;
}
</style>
