<template>
	<div class="col col-md-3 p-0 px-md-2 pb-3">
		<div class="bg-custom-black rounded-4 p-3 d-flex flex-column">
			<i
				class="text-white fs-4"
				:class="icon"
			></i>
			<p class="text-white fs-5 fw-bold">{{ title }}</p>
			<p class="text-white">{{ description }}</p>
			<Button
				href="https://wa.me/+5541999441503"
				variant="white-cta"
				icon="fa-brands fa-whatsapp"
			/>
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
		icon: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
	},
};
</script>
