<template>
	<footer class="footer text-center base-padding">
		<p>{{ t("contactUsNote") }}</p>
		<p>{{ t("celebrationNote") }}</p>
		<Sign />
	</footer>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import Sign from "@/components/Sign.vue";

const { t } = useI18n();
</script>

<style lang="scss" scoped>
.footer {
	color: $light;
	background-color: $accent;
}
</style>
