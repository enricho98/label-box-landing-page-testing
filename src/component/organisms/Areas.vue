<template>
	<Carousel :items-to-show="4" :wrap-around="true">
		<Slide v-for="slide in slides" :key="slide.id">
			<div class="mx-4 h-full flex flex-col">
				<img
					:src="slide.image"
					alt="Slide Image"
					class="flex-1 rounded-xl z-10"
				/>
				<div
					class="mx-1 -mt-2 bg-blue-400 rounded-b-xl pt-3 pb-1 text-base text-white font-bold"
				>
					<h3>{{ slide.title }}</h3>
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
					title: "Slide 1",
					text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				},
				{
					id: 2,
					image: "kardus.png",
					title: "Slide 2",
				},
				{
					id: 3,
					image: "kertas.png",
					title: "Slide 2",
				},
				{
					id: 4,
					image: "minum.png",
					title: "Slide 2",
				},
			],
		};
	},
});
</script>
<!-- <style scoped>
.carousel__item {
	display: grid;
	grid-template-rows: 1fr auto;
}

.carousel__image-container {
	width: 100%;
	padding-bottom: 75%; /* Set a fixed aspect ratio (e.g., 4:3) */
	position: relative;
	overflow: hidden;
}

.carousel__image {
	width: 100%;
	height: 100%;
	object-fit: cover;
	position: absolute;
	top: 0;
	left: 0;
}

.carousel__content {
	padding: 10px;
	text-align: center;
	background: rgba(
		255,
		255,
		255,
		0.8
	); /* Add a semi-transparent background to improve text readability */
	position: relative;
	z-index: 1; /* Ensure that content is on top of the image */
}
</style> -->
