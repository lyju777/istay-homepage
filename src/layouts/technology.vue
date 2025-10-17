<template>
  <div class="technology">
    <div class="technology__container">
      <div class="technology__container__content">
        <div class="content-title">
          <p class="title1">{{ $t(`technology.${currentSection}.title1`) }}</p>
          <p class="title2">{{ $t(`technology.${currentSection}.title2`) }}</p>
        </div>
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
  &__container {
    width: 100%;
    height: 100%;
    &__content {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .content-title {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        .title1 {
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .title2 {
          font-size: 3rem;
          font-weight: 700;
        }
      }
    }
  }
}
</style>
