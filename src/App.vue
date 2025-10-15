<script setup>
import Footer from './layouts/footer.vue'
</script>

<template>
  <header>
    <div class="header__container">
      <div>
        logo
      </div>
    <nav class="nav">
    <router-link to="/comepetitiveness">Comepetitiveness</router-link>
    <router-link to="/Features">Features</router-link>
    <router-link to="/Company">Company</router-link>
    <router-link to="/ContactUs">ContactUs</router-link>
  </nav>
  </div>
  </header>

    <main>
      
    </main>
    <footer>
      <Footer />
    </footer>
</template>

<style lang="scss" scoped>
.header-container {
  height: 100px;
  border: 1px solid red;
}
</style>
