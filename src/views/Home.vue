<script setup></script>

<template>
  <div class="home">
    <div class="home__section1">
      <div class="wrapper">
        <div class="content-title">
          <p>{{ $t('home.section1.title1') }}</p>
          <p>{{ $t('home.section1.title2') }}</p>
        </div>
      </div>
    </div>
    <div class="home__section2">
      <div class="wrapper">
        <div class="content-title">
          <h3>{{ $t('home.section2.title') }}</h3>
        </div>
        <div class="content-box">
          <div class="box-item">
            <h4>{{ $t('home.section2.box1_title') }}</h4>
            <p>{{ $t('home.section2.box1_desc') }}</p>
          </div>
          <div class="box-item">
            <h4>{{ $t('home.section2.box2_title') }}</h4>
            <p>{{ $t('home.section2.box2_desc') }}</p>
          </div>
          <div class="box-item">
            <h4>{{ $t('home.section2.box3_title') }}</h4>
            <p>{{ $t('home.section2.box3_desc') }}</p>
          </div>
          <div class="box-item">
            <h4>{{ $t('home.section2.box4_title') }}</h4>
            <p>{{ $t('home.section2.box4_desc') }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="home__section3">
      <div class="wrapper">
        <div class="box-item-container">
          <div class="box-item">
            <img class="left-img" src="/public/images/features_1.png" alt="box1" />
            <h2>{{ $t('home.section3.item1_title') }}</h2>
            <p>{{ $t('home.section3.item1_desc') }}</p>
          </div>
          <div class="box-item">
            <img class="right-img" src="/public/images/features_2.png" alt="box1" />
            <h2>{{ $t('home.section3.item2_title') }}</h2>
            <p>{{ $t('home.section3.item2_desc') }}</p>
          </div>
          <div class="box-item">
            <img class="left-img" src="/public/images/features_3.png" alt="box2" />
            <h2>{{ $t('home.section3.item3_title') }}</h2>
            <p>{{ $t('home.section3.item3_desc') }}</p>
          </div>
          <div class="box-item">
            <img class="right-img" src="/public/images/features_4.png" alt="box3" />
            <h2>{{ $t('home.section3.item4_title') }}</h2>
            <p>{{ $t('home.section3.item4_desc') }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="home__section4">
      <div class="wrapper">
        <div class="content-title">
          <h4>{{ $t('home.section4.title') }}</h4>
        </div>
        <div class="content-image">
          <img src="/public/images/main_client.png" alt="main_client" />
        </div>
      </div>
    </div>
    <div class="home__section5">
      <div class="wrapper">
        <div class="content-title">
          <h4>{{ $t('home.section5.title') }}</h4>
        </div>
        <div class="content-image">
          <img src="/public/images/main_partners.png" alt="main_partners" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  &__section1 {
    height: 67.5rem;
    background-image: url('/public/images/main_visual.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    .wrapper {
      .content-title {
        position: absolute;
        top: 28.5rem;
        & > p {
          font-size: 1.5rem;
        }
        & > p:last-child {
          font-size: 3rem;
          height: 35.5rem;
          font-weight: 700;
          display: inline-block;
          margin-top: 1.5rem;
          white-space: pre-line;
        }
      }
    }
  }
  &__section2 {
    height: 67.5rem;
    background-color: rgb(33, 37, 41);
    display: flex;
    justify-content: center;
    align-items: center;
    .wrapper {
      .content-title {
        text-align: center;
        h3 {
          font-size: 2.3rem;
          font-weight: 700;
        }
      }
      .content-box {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 2rem;
        margin-top: 3.7rem;

        .box-item {
          display: flex;
          flex-direction: column;
          padding: 3.75rem;
          text-align: left;
          border-radius: 1.25rem;
          background: rgba(255, 255, 255, 0.1);

          h4 {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            line-height: 1.4;
            white-space: pre-line;
          }

          p {
            font-size: 1rem;
            line-height: 1.6;
            color: #999999;
            white-space: pre-line;
          }
        }
      }
    }
  }
  &__section3 {
    padding: 7.5rem 0 10rem 0;
    background-color: #f1f3f5;
    .wrapper {
      .box-item-container {
        display: flex;
        flex-direction: column;
        gap: 6.3rem;
      }
      .box-item {
        overflow: hidden;

        .left-img {
          float: left;
          margin-right: 5rem;
        }
        .right-img {
          float: right;
        }

        p {
          color: #777;
          font-size: 1.5rem;
          line-height: 2.25rem;
          white-space: pre-line;
        }

        h2 {
          margin-top: 8rem;
          margin-bottom: 1.9rem;
          color: #000;
          font-size: 3.25rem;
          font-weight: 700;
          white-space: pre-line;
        }
      }
    }
  }
  &__section4 {
    height: 38rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .wrapper {
      .content-title {
        margin-top: 7.5rem;
        h4 {
          color: #000;
          font-size: 2.25rem;
          font-weight: 700;
          text-align: center;
        }
      }
      .content-image {
        padding: 1.9rem 0;
        img {
          max-width: 100%;
        }
      }
    }
  }
  &__section5 {
    height: 38rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .wrapper {
      .content-title {
        h4 {
          color: #000;
          font-size: 2.25rem;
          font-weight: 700;
          text-align: center;
        }
      }
      .content-image {
        img {
          max-width: 100%;
        }
      }
    }
  }
}
</style>
