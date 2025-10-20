<template>
  <div class="comepetitiveness">
    <div class="comepetitiveness__section1">
      <Technology />
    </div>
    <div class="comepetitiveness__section2">
      <div class="wrapper">
        <div class="section-title">
          <h2>{{ $t('competitiveness.section2.title') }}</h2>
          <p>{{ $t('competitiveness.section2.description') }}</p>
        </div>
        <div class="features-overview">
          <img src="/public/images/competit.png" alt="competit" />
        </div>
        <div class="content-box">
          <div class="box-item">
            <img src="/public/images/competit_1.png" alt="competit_1" />
            <h4>{{ $t('competitiveness.section2.box1_title') }}</h4>
            <p>{{ $t('competitiveness.section2.box1_desc') }}</p>
          </div>
          <div class="box-item">
            <img src="/public/images/competit_2.png" alt="competit_2" />
            <h4>{{ $t('competitiveness.section2.box2_title') }}</h4>
            <p>{{ $t('competitiveness.section2.box2_desc') }}</p>
          </div>
          <div class="box-item">
            <img src="/public/images/competit_3.png" alt="competit_3" />
            <h4>{{ $t('competitiveness.section2.box3_title') }}</h4>
            <p>{{ $t('competitiveness.section2.box3_desc') }}</p>
          </div>
          <div class="box-item">
            <img src="/public/images/competit_4.png" alt="competit_4" />
            <h4>{{ $t('competitiveness.section2.box4_title') }}</h4>
            <p>{{ $t('competitiveness.section2.box4_desc') }}</p>
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
.comepetitiveness {
  &__section2 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6rem 0;
    color: #333;

    .wrapper {
      .section-title {
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

      .content-box {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 1.3rem;
        margin-top: 9.94rem;

        .box-item {
          display: flex;
          flex-direction: column;
          height: 27rem;
          border-radius: 0.75rem;
          background: #edf1f5;
          // border: 1px solid #e0e0e0;
          // border-radius: 0.75rem;

          img {
            width: 5rem;
            margin-bottom: 0.6rem;
            margin-top: 1.87rem;
            margin-left: 1.87rem;
          }

          h4 {
            font-size: 2.25rem;
            font-weight: 700;
            margin-bottom: 1.94rem;
            margin-left: 1.87rem;
          }

          p {
            margin-left: 1.87rem;
            font-size: 1.5rem;
            line-height: 2.25rem;
            color: #777777;
            white-space: pre-line;
          }
        }
      }
    }
  }
}
</style>
