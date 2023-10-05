import * as Localization from 'expo-localization';
import { I18n } from "i18n-js";
import translations from './localization';

const i18n = new I18n(translations)

// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;

// Enable fallback to another language
i18n.enableFallback = true;

// force the app to use a specific language
// i18n.locale = 'en';
i18n.locale = 'fr';

export default i18n;
