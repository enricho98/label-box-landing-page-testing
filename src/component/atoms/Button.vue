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
			default: "Hubungi Kami",
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
				customClass = `btn-gold-cta btn-${this.size}  rounded-5`;
			}

			if (this.variant === "white-cta") {
				customClass = `btn-white-cta btn-${this.size} text-custom-blue bg-white rounded-4`;
			}
			return customClass;
		},
	},
};
</script>
<style>

.btn-gold-cta {
	color: #ffffff !important;
	border-color: #204280 !important;
	background-color: #204280 !important;
}
.btn{
	color: #ffffff !important;
	border-color: #204280 !important;
	background-color: #204280 !important;
	font-size: 2rem;
}
</style>


