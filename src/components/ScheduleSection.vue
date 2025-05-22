<template>
	<section class="schedule base-padding">
		<div class="schedule-headline text-center q-mb-xl">
			<h2 class="q-mb-lg">{{ t("scheduleTitle") }}</h2>
			<p class="q-mb-xl">{{ t("scheduleDescription") }}</p>
		</div>

		<div class="schedule-content row">
			<div class="col-12 col-md-6 col-lg-3 text-center q-mb-lg">
				<div class="schedule-image flex items-center justify-center q-mb-lg overflow-hidden">
					<img src="@/assets/images/ceremony-icon.png" alt="Ceremony" />
				</div>
				<h4>{{ t("time1") }}</h4>
				<p>{{ t("ceremony") }}</p>
			</div>

			<div class="col-12 col-md-6 col-lg-3 text-center q-mb-lg">
				<div class="schedule-image flex items-center justify-center q-mb-lg overflow-hidden">
					<img src="@/assets/images/dinner-icon.png" alt="Dinner" />
				</div>
				<h4>{{ t("time2") }}</h4>
				<p>{{ t("dinner") }}</p>
			</div>

			<div class="col-12 col-md-6 col-lg-3 text-center q-mb-lg">
				<div class="schedule-image flex items-center justify-center q-mb-lg overflow-hidden">
					<img src="@/assets/images/party-icon.png" alt="Party" />
				</div>
				<h4>{{ t("time3") }}</h4>
				<p>{{ t("party") }}</p>
			</div>

			<div class="col-12 col-md-6 col-lg-3 text-center q-mb-lg">
				<div class="schedule-image flex items-center justify-center q-mb-lg overflow-hidden">
					<img src="@/assets/images/end-icon.png" alt="End" />
				</div>
				<h4>{{ t("time4") }}</h4>
				<p>{{ t("end") }}</p>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style lang="scss" scoped>
.schedule {
	background-color: $light;

	.schedule-image {
		width: 140px;
		height: 140px;
		background-color: $white;
		border-radius: 50%;
		margin-left: auto;
		margin-right: auto;

		img {
			max-height: 110px;
		}
	}

	h2 {
		color: $secondary;
	}
}
</style>
