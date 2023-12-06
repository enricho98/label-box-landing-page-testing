<template>
	<Carousel :items-to-show="4" :wrap-around="true" class="mt-5">
		<Slide v-for="slide in slides" :key="slide.id">
			<div class="mx-4 h-full flex flex-col">
				<img
					:src="slide.image"
					alt="Slide Image"
					class="flex-1  z-10"
				/>
				<div
					class="mx-1-mt-2 thisAreas rounded-b-xl pt-2 pb-2 text-base text-white font-bold"
				>
					<h3>{{ slide.title }}</h3>
				</div>
				<div class="mx-1 -mt-2 thisText rounded-b-xl pt-2 pb-2 text-base text-white font-bold">
					<h6>{{ slide.text }}</h6>
				</div>
			</div>
		</Slide>

		<template #addons>
			<Navigation />
		</template>
	</Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
	name: "WrapAround",
	components: {
		Carousel,
		Slide,
		Navigation,
	},
	data() {
		return {
			slides: [
				{
					id: 1,
					image: "cup.png",
					title: "Bowl",
					text: "Min. Quantity 1.00pcs",
				},
				{
					id: 2,
					image: "kardus.png",
					title: "Box",
					text: "Min. Quantity 500pcs",

				},
				{
					id: 3,
					image: "kertas.png",
					title: "Paper",
					text: "Min. Quantity 1.00pcs",

				},
				{
					id: 4,
					image: "minum.png",
					title: "Cup",
					text: "Min. Quantity 500pcs",

				},
			],
		};
	},
});
</script>
<style>
.thisAreas {
	background-color: #1d4486;
	color: white;
}
.thisText {
	background-color: #15335e;
	color: white;
}
</style>