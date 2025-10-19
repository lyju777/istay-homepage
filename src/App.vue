<script setup>
import Header from './layouts/header.vue';
import Footer from './layouts/footer.vue';
import Contact from './layouts/contact.vue';
</script>

<template>
  <div id="app-container">
    <header>
      <Header />
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <Contact />
      <Footer />
    </footer>
  </div>
</template>

<style lang="scss" scoped>
#app-container {
  width: 100%;
  min-height: 100vh;
}
</style>
