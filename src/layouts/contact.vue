<template>
  <div class="contact">
    <div class="contact__container">
      <div class="contact__container__content">
        <div class="content-title">
          <p class="title">커져가는 호텔 시장 속에서</p>
          <p class="title">iSTAY는 성장하고 있습니다.</p>
        </div>
        <div class="content-text">
          <p class="content"></p>
          끊임없이 변화하는 호텔 산업 속에서, iSTAY는 혁신적인 기술과 유연한 서비스로 성장하고 있습니다.

          <p class="content">고객의 경험을 더 가치 있게 만드는 연결,</p>
          <p class="content">iSTAY는 호텔 비즈니스의 효율과 품격을 높이는 디지털 컨시어지 솔루션을 제공합니다.</p>
        </div>
        <button class="contact-button">문의하기</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.contact {
  background-image: url('/public/images/contact.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 688px;
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &__content {
      text-align: center;
      font-size: 36px;
      font-weight: 700;

      .content-title {
        margin-top: 7.5rem;
        .title {
          display: block;
        }
      }

      .content-text {
        margin-top: 1.5rem;
        color: #999;
        text-align: center;
        font-family: Inter;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 500;
        line-height: 2.25rem;
      }

      .contact-button {
        color: #ffffff;
        text-align: center;
        font-size: 1.8rem;
        font-weight: 700;
        width: 34rem;
        padding: 1.9rem 3.8rem;
        border-radius: 1.3rem;
        background: #ff5100;
        cursor: pointer;
        border: none;
        margin-top: 8.38rem;
      }
    }
  }
}
</style>
