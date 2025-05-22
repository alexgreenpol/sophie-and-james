<template>
	<section class="special-day flex justify-center items-center base-padding">
		<div class="special-day-content text-center">
			<h2 class="q-ma-none">{{ t("specialDayTitle") }}</h2>
			<p class="q-mt-xl">{{ t("specialDayDescription") }}</p>
			<Sign />
		</div>
	</section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import Sign from "@/components/Sign.vue";

const { t } = useI18n();
</script>

<style lang="scss" scoped>
.special-day {
	position: relative;
	background: url("@/assets/images/marry.jpeg") no-repeat center 40%;
	color: $light;
	min-height: 80vh;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: $accent;
		opacity: 0.55;
	}

	.special-day-content {
		position: relative;
		z-index: 1;
		background-color: rgba(66, 84, 64, 0.7);
		max-width: 1000px;
		padding: 60px;
	}
}
</style>
