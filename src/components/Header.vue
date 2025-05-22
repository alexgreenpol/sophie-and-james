<template>
	<header class="header text-right q-pa-md cursor-pointer">
		<button class="lang-btn" @click="switchToEnglish" v-if="locale === Locales.uk_UA">EN</button>
		<button class="lang-btn" @click="switchToUkrainian" v-if="locale === Locales.en_US">UA</button>
	</header>
</template>

<script lang="ts" setup>
import { Locales } from "@/enums/Locales";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const switchToEnglish = (): void => {
	locale.value = Locales.en_US;
};

const switchToUkrainian = (): void => {
	locale.value = Locales.uk_UA;
};
</script>

<style lang="scss" scoped>
.lang-btn {
	font-size: 20px;
	border-radius: 4px;
	border: 0;
}
</style>
