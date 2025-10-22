<template>
  <div class="features">
    <div class="features__section1">
      <Technology />
    </div>
    <div class="features__section2">
      <div class="wrapper">
        <div class="section-title">
          <h3>{{ $t('features.section2.title') }}</h3>
        </div>
        <div class="content-box">
          <div class="box-item">
            <img src="/src/assets/images/main_service_1.png" alt="main_service_1" />
            <h3>{{ $t('features.section2.box1_title') }}</h3>
            <p>{{ $t('features.section2.box1_desc') }}</p>
            <div class="box-item-content">
              <div>{{ $t('features.section2.box1_content1') }}</div>
              <div>{{ $t('features.section2.box1_content2') }}</div>
              <div>{{ $t('features.section2.box1_content3') }}</div>
              <div>{{ $t('features.section2.box1_content4') }}</div>
            </div>
          </div>

          <div class="box-item">
            <img src="/src/assets/images/main_service_2.png" alt="main_service_2" />
            <h3>{{ $t('features.section2.box2_title') }}</h3>
            <p>{{ $t('features.section2.box2_desc') }}</p>
            <div class="box-item-content">
              <div>{{ $t('features.section2.box2_content1') }}</div>
              <div>{{ $t('features.section2.box2_content2') }}</div>
              <div>{{ $t('features.section2.box2_content3') }}</div>
              <div>{{ $t('features.section2.box2_content4') }}</div>
            </div>
          </div>

          <div class="box-item">
            <img src="/src/assets/images/main_service_3.png" alt="main_service_3" />
            <h3>{{ $t('features.section2.box3_title') }}</h3>
            <p>{{ $t('features.section2.box3_desc') }}</p>
            <div class="box-item-content">
              <div>{{ $t('features.section2.box3_content1') }}</div>
              <div>{{ $t('features.section2.box3_content2') }}</div>
              <div>{{ $t('features.section2.box3_content3') }}</div>
              <div>{{ $t('features.section2.box3_content4') }}</div>
            </div>
          </div>

          <div class="box-item">
            <img src="/src/assets/images/main_service_4.png" alt="main_service_4" />
            <h3>{{ $t('features.section2.box4_title') }}</h3>
            <p>{{ $t('features.section2.box4_desc') }}</p>
            <div class="box-item-content">
              <div>{{ $t('features.section2.box4_content1') }}</div>
              <div>{{ $t('features.section2.box4_content2') }}</div>
              <div>{{ $t('features.section2.box4_content3') }}</div>
              <div>{{ $t('features.section2.box4_content4') }}</div>
            </div>
          </div>

          <div class="box-item">
            <img src="/src/assets/images/main_service_5.png" alt="main_service_4" />
            <h3>{{ $t('features.section2.box5_title') }}</h3>
            <p>{{ $t('features.section2.box5_desc') }}</p>
            <div class="box-item-content">
              <div>{{ $t('features.section2.box5_content1') }}</div>
              <div>{{ $t('features.section2.box5_content2') }}</div>
              <div>{{ $t('features.section2.box5_content3') }}</div>
              <div>{{ $t('features.section2.box5_content4') }}</div>
            </div>
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
.features {
  &__section2 {
    height: 200rem;
    padding-top: 7.5rem;
  }

  .wrapper {
    .section-title {
      text-align: center;
      margin-bottom: 6.3rem;
      h3 {
        font-size: 2.3rem;
        font-weight: 700;

        color: #000;
      }
    }

    .content-box {
      .box-item {
        position: relative;
        height: 27rem;
        margin-bottom: 10rem;

        img {
          float: left;
          height: 26.8rem;
          margin-right: 3rem;
        }
        h3 {
          color: #000;
          font-size: 3.25rem;
          font-weight: 700;
          margin-bottom: 0.8rem;
        }
        p {
          color: #777;
          font-size: 1.5rem;
          line-height: 2.25rem;
          margin-bottom: 5rem;
          white-space: pre-line;
        }

        .box-item-content {
          position: absolute;
          bottom: 0;
          left: 36.5rem;
          display: flex;
          flex-direction: row;
          color: #4b4b4b;
          white-space: pre-line;
          gap: 2rem;

          div {
            min-width: 10rem;
            min-height: 10rem;
            border-radius: 50%;
            background: #edf1f5;
            text-align: center;
            font-size: 1.25rem;
            line-height: 1.8rem;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
}
</style>
