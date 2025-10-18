<template>
  <div class="technology">
    <div class="wrapper">
      <div class="content-title">
        <p>{{ $t(`technology.${currentSection}.title1`) }}</p>
        <p>{{ $t(`technology.${currentSection}.title2`) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const currentSection = computed(() => {
  const path = route.path;
  if (path.includes('/comepetitiveness')) return 'competitiveness';
  if (path.includes('/features')) return 'features';
  if (path.includes('/company')) return 'company';
  if (path.includes('/contactus')) return 'contact';
  return 'competitiveness';
});
</script>

<style lang="scss" scoped>
.technology {
  background-image: url('/public/images/sub_top_bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .wrapper {
    .content-title {
      margin-top: 6.3rem;
      text-align: center;
      & > p {
        font-size: 1.5rem;
        margin-bottom: 0.75rem;
      }
      & > p:last-child {
        font-size: 3rem;
        font-weight: 700;
      }
    }
  }
}
</style>
