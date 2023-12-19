<template>
	<section class="container mt-4 mb-4">
		<div class="row justify-content-center align-items-center">
			<div class="col-md-8">
				<!-- Vue component for the card with a vertical line on the left -->
				<div class="card custom-cardsss relative">
					<div class="vertical-line absolute -translate-x-1"></div>
					<div class="card-body rounded-pill text-center">
						<button type="button" class="btn btn-primary rounded-0 text-sm mb-4 mt-3">
							PENAWARAN TERBATAS
						</button>
						<h3 class="pesan-sekarang">Pesan Sekarang GRATIS Jasa Desain!</h3>
						<button @click="redirectToWhatsApp" type="button"
							class="btn btn-success rounded-pill text-sm mb-4 mt-4">
							KLAIM FREE DESIGN
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.pesan-sekarang{
	font-weight: 900 !important;
	color: #15335e;
}
.vertical-line {
	border-left: 7px solid #204280;
	height: 80%;
	left: 0;
	position: absolute;
	top: 10%;
	border-radius: 40px;
}

.text-sm {
	font-size: 1rem !important;
	font-weight: 900 !important;
	padding-top: 0.01rem !important;
	padding-bottom: 0.01rem !important;
}

.text-primary {
	background-color: #204280 !important;
	color: white !important;
}

.custom-cardsss {
	background-color: #eeeeee;
	/* Adjust the background color as needed */
	position: relative;
	border-radius: 20px;
}

.btn-success {
	background-color: #18c61c !important;
	color: white !important;
	border-color: #18c61c !important;
}
</style>
<script>
import ScrollReveal from "scrollreveal";

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
	mounted() {
    // Initialize ScrollReveal when the component is mounted
    ScrollReveal().reveal(".float-up-card-big", {
      duration: 1000,
      easing: "ease-in-out",
      viewFactor: 0.5,
      reset: true,
    });
  },
};
</script>