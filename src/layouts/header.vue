<template>
  <div class="header">
    <div class="header__container">
      <div class="header__container__content">
        <router-link :to="{ path: '/', query: { lang: currentLanguage } }" class="content-logo">
          <img src="/public/images/logo_gnb.png" alt="logo" />
        </router-link>
        <span class="content-menu">
          <div class="content-language">
            <span @click="setLanguage('ko')" :class="{ active: currentLanguage === 'ko' }" class="lang-item">
              한국어
            </span>
            <span @click="setLanguage('en')" :class="{ active: currentLanguage === 'en' }" class="lang-item">
              English
            </span>
          </div>
          <ul>
            <li>
              <router-link :to="{ path: '/comepetitiveness' }">Competitiveness</router-link>
            </li>
            <li>
              <router-link :to="{ path: '/features' }">Features</router-link>
            </li>
            <li>
              <router-link :to="{ path: '/company' }">Company</router-link>
            </li>
            <li>
              <router-link :to="{ path: '/contactus' }">Contact Us</router-link>
            </li>
          </ul>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const currentLanguage = computed(() => route.query.lang || 'ko');

const setLanguage = lang => {
  router.push({ path: route.path, query: { ...route.query, lang } });
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6.25rem;
  background: rgba(30, 30, 30, 0.2);
  &__container {
    margin: 1rem 15rem;
    &__content {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .content-logo {
        text-decoration: none;
        display: inline-block;
        img {
          width: 4rem;
          height: 4.1rem;
        }
      }

      .content-menu {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        .content-language {
          display: flex;
          gap: 1rem;
          margin-bottom: 0.5rem;

          .lang-item {
            cursor: pointer;
            color: #8f8f8f;
            opacity: 0.6;
            line-height: 1;
            margin-bottom: 0.5rem;
            vertical-align: baseline;
            display: inline-block;

            &:hover {
              opacity: 0.8;
            }

            &.active {
              opacity: 1;
              color: #ffffff;
              font-weight: bold;
            }
          }
        }

        ul {
          display: flex;
          flex-direction: row;
          list-style: none;
          gap: 4.5rem;
          li {
            a {
              text-decoration: none;
              color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>
