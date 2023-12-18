<template>
	<section id="areas" class="bg-custom-blues-one mt-5 mb-5 py-5">
		<div class="container">
			<div class="mb-4">
				<h5 class="text-center whyUs m-0">KENAPA HARUS MEMILIH LABELBOX?</h5>
			</div>
			<div class="hr-container">
  <hr class="hrsize">
</div>
			<div class="d-flex flex-column flex-md-row flex-wrap">
				<img class="mx-auto max-w-full xl:max-w-2xl rounded-5 mb-4" src="/whyus_bg.png" alt="Imagem de Cleverson Marques" />

			</div>
			<div class="mb-4 mt-2 text-center">
				<button @click="redirectToWhatsApp" type="button"
					class="btn btn-primary rounded-pill text-center custome-us">
					Hubungi Kami
				</button>

			</div>

		</div>
	</section>
</template>

<style>
.hr-container {
  display: flex;
  justify-content: center;
}

.hrsize {
  width: 60%;
  border: none;
  background-color:#adb9d0  !important;/* Set the background color if needed */
  height: 1.5px; /* Adjust the height as needed */
}
.whyUs {
	color: white !important;
	font-weight: 900;
}
.bg-custom-blues-one {
	background-color: #204280 !important;
	color: white !important;
}

.custome-us {
	font-size: 1rem;
	background-color: white !important;
	color: #204280 !important;
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
