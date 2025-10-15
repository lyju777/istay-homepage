<script setup>
</script>

<template>
  <nav class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/istay">Istay</router-link>
    <router-link to="/comepetitiveness">Comepetitiveness</router-link>
    <router-link to="/benefits">Benefits</router-link>
    <router-link to="/company">Company</router-link>
    <router-link to="/contactus">ContactUs</router-link>
  </nav>
  <router-view />
</template>

<style scoped>
.nav {
  display: flex;
  gap: 8px;
  padding: 12px 16px;
}
</style>
