<template>
	<component
		:is="href ? 'a' : 'button'"
		class="btn fw-semibold"
		:class="class"
		:href="href"
	>
		<i :if="icon" :class="icon" class="fw-semibold"></i>
		{{ text }}
	</component>
</template>

<script>
export default {
	props: {
		href: {
			type: String,
			default: null,
		},
		text: {
			type: String,
			default: "Entrar em contato",
		},
		variant: {
			type: String,
			default: "gold-cta",
		},
		size: {
			type: String,
			default: "md",
		},
		icon: {
			type: String,
			default: null,
		},
	},
	computed: {
		class() {
			let customClass = "";
			if (this.variant === "gold-cta") {
				customClass = `btn-gold-cta btn-${this.size} text-custom-gold border-custom-gold rounded-0`;
			}

			if (this.variant === "white-cta") {
				customClass = `btn-white-cta btn-${this.size} text-custom-gold bg-white rounded-4`;
			}
			return customClass;
		},
	},
};
</script>
