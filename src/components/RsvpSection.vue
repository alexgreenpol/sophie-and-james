<template>
	<section class="rsvp flex items-center overflow-hidden base-padding">
		<div class="row full-width">
			<div class="col-12">
				<div class="rsvp-headline">
					<h2 class="q-mb-lg">{{ t("rsvpTitle") }}</h2>
					<p class="q-mb-md">{{ t("rsvpDescription") }}</p>
					<p class="q-mb-md">{{ t("rsvpDate") }}</p>
					<p class="q-mb-lg">{{ t("rsvpEmail") }}</p>
				</div>
			</div>
		</div>

		<div class="rsvp-lines flex">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	</section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style lang="scss" scoped>
.rsvp {
	position: relative;
	background-color: $secondary;
	min-height: 600px;

	.rsvp-headline {
		color: $light;
		height: fit-content;

		p {
			max-width: 580px;
		}
	}

	.rsvp-lines {
		position: absolute;
		bottom: -150px;
		flex-wrap: nowrap;

		@media (min-width: $breakpoint-lg-min) {
			right: 100px;
			top: 0;
		}

		span {
			display: block;
			width: 30px;
			height: 200px;
			background-color: $light;
			margin: 0 15px;

			@media (min-width: $breakpoint-lg-min) {
				height: 2000px;
			}
		}
	}
}
</style>
