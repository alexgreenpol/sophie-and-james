<template>
	<p class="sign q-mt-xl q-mb-none">{{ t("shesName") }} {{ t("and") }} {{ t("hisName") }}</p>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style lang="scss" scoped>
.sign {
	font-family: "Cezanne";
	font-size: 30px;

    @media (min-width: $breakpoint-md-min) {
		font-size: 40px;
	}
}
</style>
