<template>
	<section class="gifts text-center base-padding">
		<div class="gifts-conainer">
			<div class="gifts-headline text-center">
				<h2>{{ t("giftsTitle") }}</h2>
			</div>

			<div class="gifts-content column items-center">
				<p class="q-mb-xl">{{ t("giftsText") }}</p>
				<p>
					<a href="#">{{ t("giftsLinkText") }}</a>
				</p>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style lang="scss" scoped>
.gifts {
	background-color: $light;

	& h2 {
		color: $accent;
	}

	p {
		max-width: 800px;
	}

	& .gifts-conainer {
		max-width: 1000px;
		margin: 0 auto;
		border: 15px solid $accent;
		padding: 80px 20px;
	}
}
</style>
