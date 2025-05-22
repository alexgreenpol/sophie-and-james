<template>
	<Header class="base-header" />

	<main class="main-content">
		<slot></slot>
	</main>

	<Footer class="base-footer" />
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<style lang="scss" scoped>
.base-header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 10;
}
</style>
