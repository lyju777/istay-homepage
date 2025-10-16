import { createI18n } from 'vue-i18n';
import ko from './locales/ko';
import en from './locales/en';

const i18n = createI18n({
  locale: 'ko', // 기본 언어
  fallbackLocale: 'en', // 기본 언어 실패시 보여줄 언어
  messages: {
    ko,
    en,
  },
});

export default i18n;
