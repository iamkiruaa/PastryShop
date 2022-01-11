<script>
import TheHeader from "../components/TheHeader";
import TheFooter from "../components/TheFooter";

export default {
  name: "default",
  components: {TheFooter, TheHeader}
}
</script>

<template>
  <div>
    <the-header/>
    <NuxtPage/>
    <the-footer/>
  </div>
</template>

<style scoped>

</style>