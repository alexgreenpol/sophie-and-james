<template>
	<section class="hotels base-padding">
		<div class="hotels-headline text-center q-mb-xl">
			<h2>{{ t("hotelsTitle") }}</h2>
		</div>
		<div class="hotels-content row justify-center">
			<div class="col-12 col-md-4 q-pa-md">
				<div class="hotels-item text-center q-pa-lg column justify-center">
					<h4 class="q-mb-lg">{{ t("hotelOneTitle") }}</h4>
					<p class="q-mb-lg">{{ t("hotelOneAddress") }}</p>
					<p>{{ t("hotelOnePhone") }}</p>
				</div>
			</div>
			<div class="col-12 col-md-4 q-pa-md">
				<div class="hotels-item text-center q-pa-lg column justify-center">
					<h4 class="q-mb-lg">{{ t("hotelTwoTitle") }}</h4>
					<p class="q-mb-lg">{{ t("hotelTwoAddress") }}</p>
					<p>{{ t("hotelTwoPhone") }}</p>
				</div>
			</div>
			<div class="col-12 col-md-4 q-pa-md" startup>
				<div class="hotels-item text-center q-pa-lg column justify-center">
					<h4 class="q-mb-lg">{{ t("hotelThreeTitle") }}</h4>
					<p class="q-mb-lg">{{ t("hotelThreeAddress") }}</p>
					<p>{{ t("hotelThreePhone") }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style lang="scss" scoped>
.hotels {
	position: relative;
	background: url("@/assets/images/hotels-bg.jpg") no-repeat center 40%;
	background-size: cover;
	color: $light;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: $accent;
		opacity: 0.7;
	}

	.hotels-content,
	.hotels-headline {
		position: relative;
		z-index: 1;
	}

	.hotels-item {
		background-color: rgba(66, 84, 64, 0.8);
		max-width: 300px;
		min-height: 300px;
		margin: 0 auto;
	}
}
</style>
