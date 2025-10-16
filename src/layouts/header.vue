<template>
  <div class="header">
    <div class="header__container">
      <div class="header__container__content">
        <span class="content-logo">
          <img src="/public/images/logo_gnb.png" alt="logo" />
        </span>
        <span class="content-menu">
          <div class="content-lng">
            <span>한국어</span>
            <span>English</span>
          </div>
          <ul>
            <li>
              <router-link to="/comepetitiveness">Competitiveness</router-link>
            </li>
            <li>
              <router-link to="/features">Features</router-link>
            </li>
            <li>
              <router-link to="/company">Company</router-link>
            </li>
            <li>
              <router-link to="/contactus">Contact Us</router-link>
            </li>
          </ul>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6.25rem;
  background: rgba(30, 30, 30, 0.2);
  &__container {
    &__content {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .content-logo {
        img {
          width: 4rem;
          height: 4.1rem;
        }
      }

      .content-menu {
        .content-lng {
        }

        ul {
          display: flex;
          flex-direction: row;
          list-style: none;
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
