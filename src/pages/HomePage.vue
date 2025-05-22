<template>
	<BaseLayout>
		<div class="wedding-page">
			<HeroSection />
			<DateSection />
			<SpecialDaySection />
			<ScheduleSection />
			<RsvpSection />
			<DetailsSection />
			<HotelsSection />
			<GiftsSection />
		</div>
	</BaseLayout>
</template>

<script lang="ts" setup>
import HeroSection from "@/components/HeroSection.vue";
import DateSection from "@/components/DateSection.vue";
import SpecialDaySection from "@/components/SpecialDaySection.vue";
import ScheduleSection from "@/components/ScheduleSection.vue";
import RsvpSection from "@/components/RsvpSection.vue";
import DetailsSection from "@/components/DetailsSection.vue";
import HotelsSection from "@/components/HotelsSection.vue";
import GiftsSection from "@/components/GiftsSection.vue";
import BaseLayout from "@/layouts/BaseLayout.vue";
</script>
