<template>
	<section id="areas" class="bg-custom-blues mt-5 mb-5 py-5">
		<div class="container">
			<div class="mb-4">
				<h2 class="text-center m-0">HOW TO ORDER</h2>
			</div>

			<div class="d-flex flex-column flex-md-row flex-wrap">
				<img class="mx-auto max-w-full xl:max-w-2xl rounded-5 mb-4" src="/how.png" alt="Imagem de Cleverson Marques" />			</div>
			<div class="mb-4 mt-2 text-center">
				<button @click="redirectToWhatsApp"  type="button" class="btn btn-primary rounded-pill text-center custome-kami">PESAN SEKARANG </button>
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
export default {
	methods: {
		redirectToWhatsApp() {
			// Add your WhatsApp URL here
			const whatsappUrl =
				'https://api.whatsapp.com/send?phone=6285935000130&text=Halo%20Minbox!%20Saya%20mau%20tanya%20mengenai%20Packaging.';
			// Open the URL in a new tab or window
			window.open(whatsappUrl, '_blank');
		},
	},
};
</script>
