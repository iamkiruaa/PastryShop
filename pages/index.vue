<script>
import MainCarousel from "../components/MainCarousel";

export default {
  name: "index",
  components: {MainCarousel},
  layout: "default",
}
</script>


<template>
  <main class="site-main page-spacing">
    <main-carousel/>
    <welcome-section/>
    <festival-section/>
    <div class="section-padding"></div>
    <menu-section/>
    <team-section/>
  </main>
</template>

<style scoped>

</style>