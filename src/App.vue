<script setup>
import Header from './layouts/header.vue';
import Footer from './layouts/footer.vue';
import Contact from './layouts/contact.vue';
</script>

<template>
  <div id="app-wrapper">
    <header>
      <Header />
    </header>
    <main class="main-content">
      <router-view />
    </main>
    <footer>
      <Contact />
      <Footer />
    </footer>
  </div>
</template>

<style lang="scss" scoped>
#app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

.main-content {
  flex: 1;
}
</style>
