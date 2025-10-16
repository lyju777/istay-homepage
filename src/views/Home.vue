<script setup>
import Contact from '../layouts/contact.vue';
</script>

<template>
  <div class="home">
    <div class="home__section1"></div>
    <div class="home__section2"></div>
    <div class="home__section3"></div>
    <div class="home__section4"></div>
    <div class="home__section5"></div>
    <div class="home__section6"></div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  &__section1 {
    height: 1079px;
    background-image: url('/public/images/main_visual.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  &__section2 {
    height: 1079px;
    background: rgba(0, 0, 0, 0.2);
  }
  &__section3 {
    height: 2380px;
    background-color: yellow;
  }
  &__section4 {
    height: 604px;
    background-color: purple;
  }
  &__section5 {
    height: 724px;
    background-color: orange;
  }
  &__section6 {
    height: 668px;
    background-color: brown;
  }
}
</style>
