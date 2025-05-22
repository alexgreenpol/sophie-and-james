<template>
	<section class="not-found-page flex items-center justify-center">
		<h1>404</h1>
	</section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.not-found-page {
	background-color: $accent;
	height: 100vh;
	color: $light;

	& h1 {
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
