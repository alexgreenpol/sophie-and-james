<template>
	<section class="details base-padding">
		<div class="details-headline text-right">
			<h2>{{ t("detailTitle") }}</h2>
		</div>
		<div class="row">
			<div class="col-12 col-md-6 text-right q-mb-xl">
				<div class="details-item q-mb-xl">
					<h4 class="q-mb-lg">{{ t("dresscodeTitle") }}</h4>
					<p>{{ t("dresscodeDescription") }}</p>
				</div>
				<div class="details-item">
					<h4 class="q-mb-lg">{{ t("directionsTitle") }}</h4>
					<p>{{ t("directionsDescription") }}</p>
				</div>
			</div>
			<div class="col-12 col-md-6 text-right">
				<div class="details-item q-mb-xl">
					<h4 class="q-mb-lg">{{ t("childrenTitle") }}</h4>
					<p>{{ t("childrenDescription") }}</p>
				</div>
				<div class="details-item">
					<h4 class="q-mb-lg">{{ t("transportTitle") }}</h4>
					<p>{{ t("transportDescription") }}</p>
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
.details {
	background-color: $light;

	.details-item {
		max-width: 300px;
		margin-left: auto;

		& h4 {
			font-size: 30px;
		}
	}
}
</style>
