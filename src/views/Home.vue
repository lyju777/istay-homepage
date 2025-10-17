<script setup></script>

<template>
  <div class="home">
    <div class="home__section1">
      <div class="home__section1__content">
        <div class="content-title">
          <p class="title1">{{ $t('home.section1.title1') }}</p>
          <span class="title2">{{ $t('home.section1.title2') }} <br />{{ $t('home.section1.title2_1') }}</span>
        </div>
      </div>
    </div>
    <div class="home__section2">
      <div class="home__section2__content">
        <div class="content-title">
          <span class="title">여행자의 모든 여정을 함께 합니다.</span>
        </div>
        <div class="content-box">
          <div class="box-item">
            <span>통합 호텔 게스트 <br />서비스 플랫폼 iSTAY</span>
            <p>iSTAY는 앱 설치 또는 번거로운 가입절차가 없어 <br />호텔 게스트가 편하게 사용할 수 있습니다.</p>
          </div>
          <div class="box-item">
            <span>최고의 호텔들로부터 <br />선택받은 최고의 솔루션</span>
            <p>하이엔드 시장에서 검증된 <br />만족도 높은 솔루션, <br />260개 고객사에 안정적으로 제공되고 있습니다.</p>
          </div>
          <div class="box-item">
            <span
              >수익성 향상의 열쇠<br />
              게스트 서비스의 디지털 전환</span
            >
            <p>
              iSTAY를 통한 추가 매출 극대화, 서비스 오류비용 절감, <br />빅데이터 기반 경영혁신, 세마리의 토끼를 한번에!
            </p>
          </div>
          <div class="box-item">
            <span>
              제17회 대한민국<br />
              인터넷 대상 국무총리상 수상
            </span>
            <p>
              한국을 대표하는 최고의 호텔 게스트 서비스 플랫폼, <br />iSTAY는 글로벌 1위 솔리션으로 힘차게
              나아가겠습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="home__section3">
      <div class="home__section3__content">
        <div class="box-item">
          <img class="left-img" src="/public/images/features_1.png" alt="box1" />
          <p>No Sign-up No <br />App installation</p>
          <span
            >게스트는 더이상 호텔마다 앱을 설치하고 <br />회원가입을 해야하는 불편을 겪지 않아도 됩니다. <br />앱
            설치로부터 자유로운 편리한 사용경험을 제공합니다.</span
          >
        </div>
        <div class="box-item">
          <img class="right-img" src="/public/images/features_2.png" alt="box1" />
          <p>Express Check-in <br />Mobile Check-out</p>
          <span
            >프론트 데스크에서 체크인/체크아웃을 위해 기다릴 필요 없이 <br />사전 체크인/셀프 체크아웃을 이용할 수
            있습니다. <br />프론트 경유 없이 바로 객실로 이동 가능하도록 <br />모바일키가 제공됩니다.</span
          >
        </div>
        <div class="box-item">
          <img class="left-img" src="/public/images/features_3.png" alt="box2" />
          <p>All-in-one <br />Mobile UI/UX</p>
          <span
            >모든 서비스와 정보가 게스트 폰으로, <br />게스트가 필요로 하는 모든 정보와 서비스가 <br />게스트와 가장
            가깝고 친숙한 모바일 기기를 통해 제공됩니다.</span
          >
        </div>
        <div class="box-item">
          <img class="right-img" src="/public/images/features_4.png" alt="box3" />
          <p>
            Smart Room Control<br />
            on Guest Mobile
          </p>
          <span
            >게스트는 모바일 기기를 통해 조명, 온도, TV 등을<br />
            손쉽게 제어할 수 있습니다. <br />스마트 제어 기술을 통해 더울 편리한 객실 경험을 제공합니다.</span
          >
        </div>
      </div>
    </div>
    <div class="home__section4">
      <div class="home__section4__content">
        <div class="content-title">
          <p>고객사</p>
        </div>
        <div class="content-image">
          <img src="/public/images/main_client.png" alt="customer_logo" />
        </div>
      </div>
    </div>
    <div class="home__section5">
      <div class="home__section5__content">
        <div class="content-title">
          <p>파트너사</p>
        </div>
        <div class="content-image">
          <img src="/public/images/main_partners.png" alt="customer_logo" />
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
    &__content {
      .content-title {
        position: absolute;
        margin-top: 28.5rem;
        margin-left: 15rem;
        .title1 {
          font-size: 1.5rem;
        }
        .title2 {
          font-size: 3rem;
          height: 35.5rem;
          font-weight: 700;
          display: inline-block;
          margin-top: 1.5rem;
        }
      }
    }
  }
  &__section2 {
    height: 67.5rem;
    // background: rgba(0, 0, 0, 0.2);
    background-color: rgb(33, 37, 41);
    display: flex;
    justify-content: center;
    &__content {
      .content-title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .title {
          margin-top: 7.5rem;
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
          width: 44rem;
          height: 18.6rem;
          border-radius: 1.25rem;
          background: rgba(255, 255, 255, 0.1);

          span {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            line-height: 1.4;
          }

          p {
            font-size: 1rem;
            line-height: 1.6;
            color: #999999;
          }
        }
      }
    }
  }
  &__section3 {
    height: 166rem;
    background-color: #f1f3f5;
    display: flex;
    justify-content: center;
    padding: 7.5rem 0 10rem 0;
    &__content {
      display: flex;
      flex-direction: column;
      gap: 6.3rem;
      width: 90rem;
      .box-item {
        overflow: hidden;

        .left-img {
          float: left;
          margin-right: 5rem;
        }
        .right-img {
          float: right;
        }

        span {
          color: #777;
          font-size: 1.5rem;
          line-height: 2.25rem;
        }

        p {
          margin-top: 8rem;
          margin-bottom: 1.9rem;
          color: #000;
          font-size: 3.25rem;
          font-weight: 700;
        }
      }
    }
  }
  &__section4 {
    border-bottom: 1px solid #000;
    height: 37.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    &__content {
      .content-title {
        p {
          color: #000;
          font-size: 2.25rem;
          font-weight: 700;
          text-align: center;
        }
      }
      .content-image {
        padding: 1.9rem 8rem;
      }
      img {
        width: 74rem;
        height: 20rem;
      }
    }
  }
  &__section5 {
    border-bottom: 1px solid #000;
    height: 45rem;
    display: flex;
    justify-content: center;
    align-items: center;
    &__content {
      .content-title {
        p {
          color: #000;
          font-size: 2.25rem;
          font-weight: 700;
          text-align: center;
        }
      }
      .content-image {
        img {
          width: 74rem;
          height: 20rem;
        }
      }
    }
  }
}
</style>
