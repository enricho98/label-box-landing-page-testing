<template>
	<div class="col col-md-3 p-0 px-md-2 pb-3">
		<div class="bg-custom-black rounded-4 d-flex flex-column">
			<img
				class="object-fit-cover rounded-bottom rounded-4"
				:src="img"
				alt=""
			/>
			<div class="p-3">
				<p class="text-white fs-5 fw-bold">{{ truncate(title, 35) }}</p>
				<Button
					class="w-100"
					:href="href"
					variant="white-cta"
					text="Ver artigo"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import Button from "Atom/Button.vue";

export default {
	components: {
		Button,
	},
	props: {
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		img: {
			type: String,
			required: true,
		},
		href: {
			type: String,
			required: true,
		},
	},
	methods: {
		truncate(text, limit) {
			if (text.length <= limit) {
				return text;
			} else {
				return text.slice(0, limit) + "...";
			}
		},
	},
};
</script>

<style lang="scss" scoped>
img {
	height: 150px;
}
</style>
