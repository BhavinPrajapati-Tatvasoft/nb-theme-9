<template>
  <div class="wrapper">
    <router-view />
  </div>
</template>
<script setup lang="ts">
import AOS from "aos";
AOS.init({
  easing: "ease-in-out",
  once: true,
});
</script>
