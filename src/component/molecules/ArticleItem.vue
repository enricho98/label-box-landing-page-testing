<template>
	<article class="py-4 d-flex flex-column flex-md-row align-items-center">
		<img
			class="col-12 col-md-3 rounded-3 object-fit-cover"
			:src="img"
		/>
		<div class="col-12 col-md-9 ms-md-5 mt-3 mt-md-0">
			<div>
				<h2 class="fw-bold">{{ title }}</h2>
				<p>{{ description }}</p>
			</div>
			<Button
				size="lg"
				text="Ler mais"
				:href="'/article?id=' + articleId"
			/>
		</div>
	</article>
</template>

<script>
import Button from "Atom/Button";

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
		articleId: {
			type: [String, Number],
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
img {
	height: 185px !important;
}
</style>
