<template>
	<section id="areas" class="bg-custom-blues-one mt-5 mb-5 py-5">
		<div class="container">
			<div class="mb-4">
				<h2 class="text-center m-0">WHY US?</h2>
			</div>

			<div class="d-flex flex-column flex-md-row flex-wrap">
				<img class="w-100 rounded-5 mb-4" src="/whyus_bg.png"
				alt="Imagem de Cleverson Marques" />
			</div>
			<div class="mb-4 mt-2 text-center">
				<button type="button" class="btn btn-primary rounded-pill text-center custome-us">Hubungi Kami </button>
			</div>

		</div>
	</section>
</template>

<style>
.bg-custom-blues-one {
	background-color: #204280 !important;
	color: white !important;
}
.custome-us{
	font-size: 1rem;
	background-color:  white !important;
	color: #204280 !important;
}

</style>
<script>
import CardArea from "../molecules/CardArea.vue";

export default {
	components: {
		CardArea,
	},
};
</script>
