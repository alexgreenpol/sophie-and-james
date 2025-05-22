<template>
	<section class="date base-padding">
		<div class="row">
			<div class="col-12 col-md-6 flex justify-center">
				<div class="date-photo q-pa-md">
					<img class="lovestory-img" src="@/assets/images/us.jpeg" alt="Lovestory photo" />
				</div>
			</div>
			<div class="date-info col-12 col-md-6 flex items-center q-pa-xl">
				<div class="date-info-content">
					<h2 class="q-my-none">{{ t("dateTime") }}</h2>
					<p class="q-mt-lg">{{ t("dateTimeDescription") }}</p>
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
.date {
	background-color: $light;

	.date-photo {
		border: 5px solid $secondary;
		width: fit-content;
		line-height: 0;
	}

	.date-info {
		h2 {
			max-width: 580px;
			color: $secondary;
		}

		p {
			max-width: 580px;
		}
	}

	.lovestory-img {
		width: 100%;
		max-width: 500px;
	}
}
</style>
