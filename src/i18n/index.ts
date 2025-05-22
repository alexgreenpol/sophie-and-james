import { createI18n } from "vue-i18n";
import enUS from "./en-US";
import ukUA from "./uk-UA";
import { Locales } from "@/enums/Locales";

const messages = {
	[Locales.en_US]: enUS,
	[Locales.uk_UA]: ukUA,
};

const i18n = createI18n({
	locale: Locales.uk_UA,
	legacy: false,
	messages,
});

export default i18n;
