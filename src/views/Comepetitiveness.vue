<template>
  <div class="comepetitiveness">
    <div class="comepetitiveness__section1">
      <Technology />
    </div>
    <div class="comepetitiveness__section2">
      <div class="wrapper">
        <div class="section-header">
          <h2>{{ $t('competitiveness.section2.title') }}</h2>
          <p>{{ $t('competitiveness.section2.description') }}</p>
        </div>
        <div class="features-overview">
          <img src="/public/images/competit.png" alt="competit" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Technology from '../layouts/technology.vue';
</script>

<style lang="scss" scoped>
.comepetitiveness__section2 {
  padding: 6rem 0;
  color: #333;

  .wrapper {
    .section-header {
      text-align: center;
      margin-bottom: 6rem;

      h2 {
        font-size: 2.3rem;
        font-weight: 700;
        margin-bottom: 1.3rem;
        color: #000;
      }

      p {
        font-size: 1.5rem;
        line-height: 2.3rem;
        white-space: pre-line;
        color: #777;
      }
    }

    .features-overview {
      width: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
