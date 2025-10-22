<template>
  <div class="contact">
    <div class="wrapper">
      <div class="content-title">
        <p class="title">{{ $t('contact.home.title') }}</p>
      </div>
      <div class="content-text">
        <p class="content">{{ $t('contact.home.description') }}</p>
      </div>
      <button class="contact-button">{{ $t('contact.buttonText') }}</button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.contact {
  background-image: url('/src/assets/images/contact.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 688px;
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper {
    text-align: center;
    font-size: 36px;
    font-weight: 700;
    .content-title {
      .title {
        display: block;
        white-space: pre-line;
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
      white-space: pre-line;
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
      margin-top: 7rem;
    }
  }
}
</style>
