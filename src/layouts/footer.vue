<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__container__content">
        <div class="content-logo">
          <img src="/public/images/logo_footer.png" alt="logo" />
        </div>
        <div class="content-info">
          <p class="company">(주) 티오더스테이</p>
          <br />
          <p class="address">
            주소: 서울특별시 영등포구 여의대로 108, 파크원타워 2, 46층 | 사업자 등록번호: 469-81-00232
          </p>
          <p class="phone">대표번호: 1644-2360 | 대표메일: contactus@torderstay.com</p>
          <p class="copyright">© 2025 torderstay. All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  background-color: black;

  &__container {
    display: flex;
    height: 27rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    &__content {
      margin-left: 15rem;
      .content-logo {
        margin-bottom: 1.9rem;
        img {
          width: 243px;
          height: 40px;
        }
      }

      .content-info {
        color: #999999;
        font-size: 20px;
        font-weight: 500;
        display: flex;
        flex-direction: column;

        .company {
          font-size: 1.25rem;
        }
        .address,
        .phone,
        .copyright {
          font-size: 1rem;
          line-height: 24px;
        }
      }
    }
  }
}
</style>
