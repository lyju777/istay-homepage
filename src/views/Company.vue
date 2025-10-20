<template>
  <div class="company">
    <div class="company__section1">
      <Technology />
    </div>
    <div class="company__section2">
      <div class="wrapper">
        <div class="section-title">
          <h3>{{ $t('company.section2.title') }}</h3>
        </div>
        <div class="content-box">
          <div class="box-item">
            <img src="/public/images/company_1.png" alt="company_1" />
            <h4>{{ $t('company.section2.box1_title') }}</h4>
            <p>{{ $t('company.section2.box1_desc') }}</p>
          </div>
          <div class="box-item">
            <img src="/public/images/company_2.png" alt="company_2" />
            <h4>{{ $t('company.section2.box2_title') }}</h4>
            <p>{{ $t('company.section2.box2_desc') }}</p>
          </div>
          <div class="box-item">
            <img src="/public/images/company_3.png" alt="company_3" />
            <h4>{{ $t('company.section2.box3_title') }}</h4>
            <p>{{ $t('company.section2.box3_desc') }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="company__section3">
      <div class="wrapper">
        <div class="section-title">
          <h3>{{ $t('company.section3.title') }}</h3>
        </div>
        <div class="content-box">
          <div class="box-item">
            <span>2025</span>
            <span>태국법인 설립</span>
          </div>
          <div class="box-item">
            <span>{{ $t('company.section3.box1_title') }}</span>
            <span>{{ $t('company.section3.box1_desc') }}</span>
          </div>
          <div class="box-item">
            <span></span>
            <span></span>
          </div>
          <div class="box-item">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Technology from '../layouts/technology.vue';
</script>

<style lang="scss" scoped>
.company {
  &__section2 {
    height: 42rem;

    .wrapper {
      .section-title {
        text-align: center;
        margin-top: 7.5rem;
        margin-bottom: 3.7rem;
        h3 {
          font-size: 2.25rem;
          font-weight: 700;
          color: #000;
        }
      }

      .content-box {
        display: flex;
        flex-direction: row;
        justify-content: center;

        align-items: center;
        gap: 12rem;

        .box-item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 20rem;

          img {
            margin-bottom: 2rem;
          }
          h4 {
            margin-bottom: 0.5rem;
            font-size: 2.25rem;
            font-weight: 700;
            color: #000;
          }
          p {
            text-align: center;
            font-size: 1.5rem;
            line-height: 2.25rem;
            color: #777;
            white-space: pre-line;
          }
        }
      }
    }
  }
  &__section3 {
    height: 119rem;
    background-color: #f5f6f7;
    .wrapper {
      .section-title {
        h3 {
          color: #000;
          text-align: center;
          font-size: 2.25rem;
          font-weight: 700;
        }

        span {
        }
      }
    }
  }
}
</style>
