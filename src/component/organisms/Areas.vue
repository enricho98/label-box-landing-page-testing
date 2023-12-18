<template>
	<div class="float-up">
		<h5 class="text-center mt-4 whtats">PRODUK KAMI</h5>
		<div class="container">
			<Carousel :items-to-show="getItemsToShow()" :wrap-around="true" :breakpoints="breakpoints" snap-align="start"
				class="mt-5">
				<Slide v-for="slide in slides" :key="slide.id">
					<div class="h-full flex flex-col mx-2">
						<img :src="slide.image" alt="Slide Image" class="flex-1 w-full h-auto z-10 rounded-t-md" />
						<div class="mx-1-mt-2 thisAreas rounded-b-xl pt-2 pb-2 text-base text-white font-bold">
							<h3 class="slideTitle">{{ slide.title }}</h3>
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
		</div>
	</div>
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
					text: "Min. Quantity 1.000pcs",
				},
				{
					id: 2,
					image: "kardus.png",
					title: "Box",
					text: "Min. Quantity 500pcs",
				},
				{
					id: 3,
					image: "Screenshot 2023-12-12 at 22.04.06.png",
					title: "Paper",
					text: "Min. Quantity 1.000pcs",
				},
				{
					id: 4,
					image: "minum.png",
					title: "Cup",
					text: "Min. Quantity 500pcs",
				},
				{
					id: 4,
					image: "bags.png",
					title: "Shopping Bag",
					text: "Min. Quantity 500pcs",
				},
				{

					id: 5,
					image: "Screenshot 2023-12-19 at 02.01.25.png",
					title: "Pouch Packaging",
					text: "Min. Quantity 1.000pcs",
				},

			],
			breakpoints: {
				0: {
					itemsToShow: 1,
					snapAlign: "start",
				},
				500: {
					itemsToShow: 2,
					snapAlign: "start",
				},
				800: {
					itemsToShow: 3,
					snapAlign: "start",
				},
				1200: {
					itemsToShow: 4,
					snapAlign: "start",
				},
			},
		};
	},
	methods: {
		getItemsToShow() {
			return window.innerWidth <= 767 ? 1 : 4;
		},
	},
});
</script>

<style>
.thisAreas {
	background-color: #1d4486;
	color: white;
}

.whtats {
	font-weight: 900;
}

.thisText {
	background-color: #15335e;
	color: white;
}

.carousel {
	position: relative;
}

.carousel__prev {
	position: absolute;
	left: -45px;
}

.carousel__next {
	position: absolute;
	right: -45px;
}

.carousel__icon {
	color: #15335e;
	transform: scale(2);
}

.slideTitle {
	font-size: 20px !important;
	font-weight: 900 !important;
}
</style>
