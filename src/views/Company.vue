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
            <img src="/src/assets/images/company_1.png" alt="company_1" />
            <h4>{{ $t('company.section2.box1_title') }}</h4>
            <p>{{ $t('company.section2.box1_desc') }}</p>
          </div>
          <div class="box-item">
            <img src="/src/assets/images/company_2.png" alt="company_2" />
            <h4>{{ $t('company.section2.box2_title') }}</h4>
            <p>{{ $t('company.section2.box2_desc') }}</p>
          </div>
          <div class="box-item">
            <img src="/src/assets/images/company_3.png" alt="company_3" />
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
            <div class="box-item-title">
              <h4>{{ $t('company.section3.box1_title') }}</h4>
            </div>
            <div class="box-item-circle">
              <svg
                class="circle-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle cx="12" cy="12" r="4" fill="#FF5100" />
                <circle cx="12" cy="12" r="8" stroke="#FF5100" stroke-opacity="0.5" stroke-width="8" />
              </svg>
            </div>
            <div class="box-item-desc">
              <p>{{ $t('company.section3.box1_desc1') }}</p>
              <p>{{ $t('company.section3.box1_desc2') }}</p>
              <p>{{ $t('company.section3.box1_desc3') }}</p>
              <p>{{ $t('company.section3.box1_desc4') }}</p>
            </div>
          </div>
          <div class="box-item">
            <div class="box-item-title">
              <h4>{{ $t('company.section3.box2_title') }}</h4>
            </div>
            <div class="box-item-circle">
              <svg
                class="circle-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle cx="12" cy="12" r="4" fill="#FF5100" />
                <circle cx="12" cy="12" r="8" stroke="#FF5100" stroke-opacity="0.5" stroke-width="8" />
              </svg>
            </div>
            <div class="box-item-desc">
              <p>{{ $t('company.section3.box2_desc1') }}</p>
              <p>{{ $t('company.section3.box2_desc2') }}</p>
              <p>{{ $t('company.section3.box2_desc3') }}</p>
              <p>{{ $t('company.section3.box2_desc4') }}</p>
              <p>{{ $t('company.section3.box2_desc5') }}</p>
            </div>
          </div>
          <div class="box-item">
            <div class="box-item-title">
              <h4>{{ $t('company.section3.box3_title') }}</h4>
            </div>
            <div class="box-item-circle">
              <svg
                class="circle-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle cx="12" cy="12" r="4" fill="#FF5100" />
                <circle cx="12" cy="12" r="8" stroke="#FF5100" stroke-opacity="0.5" stroke-width="8" />
              </svg>
            </div>
            <div class="box-item-desc">
              <p>{{ $t('company.section3.box3_desc1') }}</p>
              <p>{{ $t('company.section3.box3_desc2') }}</p>
              <p>{{ $t('company.section3.box3_desc3') }}</p>
            </div>
          </div>
          <div class="box-item">
            <div class="box-item-title">
              <h4>{{ $t('company.section3.box4_title') }}</h4>
            </div>
            <div class="box-item-circle">
              <svg
                class="circle-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle cx="12" cy="12" r="4" fill="#FF5100" />
                <circle cx="12" cy="12" r="8" stroke="#FF5100" stroke-opacity="0.5" stroke-width="8" />
              </svg>
            </div>
            <div class="box-item-desc">
              <p>{{ $t('company.section3.box4_desc1') }}</p>
              <p>{{ $t('company.section3.box4_desc2') }}</p>
            </div>
          </div>
          <div class="box-item">
            <div class="box-item-title">
              <h4>{{ $t('company.section3.box5_title') }}</h4>
            </div>
            <div class="box-item-circle">
              <svg
                class="circle-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle cx="12" cy="12" r="4" fill="#FF5100" />
                <circle cx="12" cy="12" r="8" stroke="#FF5100" stroke-opacity="0.5" stroke-width="8" />
              </svg>
            </div>
            <div class="box-item-desc">
              <p>{{ $t('company.section3.box5_desc1') }}</p>
              <p>{{ $t('company.section3.box5_desc2') }}</p>
              <p>{{ $t('company.section3.box5_desc3') }}</p>
              <p>{{ $t('company.section3.box5_desc4') }}</p>
            </div>
          </div>
          <div class="box-item">
            <div class="box-item-title">
              <h4>{{ $t('company.section3.box6_title') }}</h4>
            </div>
            <div class="box-item-circle">
              <svg
                class="circle-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle cx="12" cy="12" r="4" fill="#FF5100" />
                <circle cx="12" cy="12" r="8" stroke="#FF5100" stroke-opacity="0.5" stroke-width="8" />
              </svg>
            </div>
            <div class="box-item-desc">
              <p>{{ $t('company.section3.box6_desc1') }}</p>
              <p>{{ $t('company.section3.box6_desc2') }}</p>
              <p>{{ $t('company.section3.box6_desc3') }}</p>
              <p>{{ $t('company.section3.box6_desc4') }}</p>
            </div>
          </div>
          <div class="box-item">
            <div class="box-item-title">
              <h4>{{ $t('company.section3.box7_title') }}</h4>
            </div>
            <div class="box-item-circle">
              <svg
                class="circle-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle cx="12" cy="12" r="4" fill="#FF5100" />
                <circle cx="12" cy="12" r="8" stroke="#FF5100" stroke-opacity="0.5" stroke-width="8" />
              </svg>
            </div>
            <div class="box-item-desc">
              <p>{{ $t('company.section3.box7_desc1') }}</p>
              <p>{{ $t('company.section3.box7_desc2') }}</p>
              <p>{{ $t('company.section3.box7_desc3') }}</p>
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
.company {
  &__section2 {
    height: 40rem;
    padding-top: 7.5rem;

    .wrapper {
      .section-title {
        text-align: center;
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
    height: 158rem;
    padding-top: 7.5rem;
    background-color: #f5f6f7;
    position: relative;

    .wrapper {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        bottom: 8rem;
        left: 38%;
        transform: translateX(-50%);
        width: 3px;
        height: 87.5%;
        background-color: #ff5100;
      }

      .section-title {
        h3 {
          color: #000;
          text-align: center;
          font-size: 2.25rem;
          font-weight: 700;
        }
      }
      .content-box {
        display: flex;
        flex-direction: column;
        gap: 3.7rem;
        .box-item {
          position: relative;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: flex-end;
          margin-top: 6rem;
          padding: 0 2rem;

          .box-item-title {
            position: absolute;
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            width: 34%;
            top: 0;
            left: 0;
            h4 {
              color: #ff5100;
              font-size: 3rem;
              font-weight: 700;
              position: absolute;
              top: 0;
            }
          }

          .box-item-circle {
            position: absolute;
            top: 3%;
            left: 37.2%;
            transform: translate(-50%, 0);
          }

          .box-item-desc {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-start;
            gap: 1.25rem;
            width: 60%;
            max-width: 52rem;

            p {
              color: #000;
              font-size: 1.5rem;
              line-height: 2.2rem;
              text-align: left;
            }
          }
        }
      }
    }
  }
}
</style>
