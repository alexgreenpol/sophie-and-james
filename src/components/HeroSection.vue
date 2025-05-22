<template>
	<section class="hero flex justify-center items-center base-padding">
		<div class="hero-content text-center">
			<h1 class="headline q-my-none">
				{{ t("shesName") }}
				<span class="q-ml-md q-mr-md">{{ t("and") }}</span>
				{{ t("hisName") }}
			</h1>
			<h2 class="description q-mb-none">{{ t("heroDescription") }}</h2>
		</div>
	</section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style lang="scss" scoped>
.hero {
	position: relative;
	height: 100vh;
	background: url("@/assets/images/hero-bg.jpg") no-repeat center center;
	background-size: cover;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: $accent;
		opacity: 0.65;
	}

	.hero-content {
		position: relative;
		z-index: 1;
	}

	.headline,
	.description {
		font-size: 60px;
		line-height: 1.5;
		color: $white;

		@media (min-width: $breakpoint-sm-min) {
			font-size: 80px;
		}

		@media (min-width: $breakpoint-md-min) {
			font-size: 100px;
		}

		@media (min-width: $breakpoint-lg-min) {
			font-size: 150px;
		}
	}
}
</style>
