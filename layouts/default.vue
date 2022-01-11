<script>
import TheHeader from "../components/TheHeader";
import TheFooter from "../components/TheFooter";

export default {
  name: "default",
  components: {TheFooter, TheHeader}
}
</script>

<template>
  <the-header/>
  <slot/>
  <the-footer/>
</template>

<style scoped>

</style>