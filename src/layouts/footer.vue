<template>
  <div class="footer">
    <div class="wrapper">
      <div class="content-logo">
        <img src="/src/assets/images/logo_footer.png" alt="logo" />
      </div>
      <div class="content-info">
        <p class="company">{{ $t('footer.company') }}</p>
        <br />
        <p class="address">{{ $t('footer.address') }} | {{ $t('footer.businessNumber') }}</p>
        <p class="phone">{{ $t('footer.contact') }} | {{ $t('footer.email') }}</p>
        <p class="copyright">{{ $t('footer.copyright') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  background-color: black;
  display: flex;
  align-items: center;
  height: 27rem;

  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

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
</style>
