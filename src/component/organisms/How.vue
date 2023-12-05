<template>
	<section id="areas" class="bg-custom-blues mt-5 mb-5 py-5">
		<div class="container">
			<div class="mb-4">
				<h2 class="text-center m-0">HOW TO ORDER</h2>
			</div>

			<div class="d-flex flex-column flex-md-row flex-wrap">
				<img class="w-100 rounded-5 mb-4" src="/how.png"
				alt="Imagem de Cleverson Marques" />
			</div>
			<div class="mb-4 mt-2 text-center">
				<button type="button" class="btn btn-primary rounded-pill text-center custome-kami">PESAN SEKARANG </button>
			</div>

		</div>
	</section>
</template>

<style>
.bg-custom-blues {
	background-color: #ffffff !important;
	color: #204280 !important;
}
.custome-kami{
	font-size: 1rem;
	background-color:  #204280 !important;
	color: white !important;
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
