<template>
	<div class="container mt-5 mb-4">
		<div class="row justify-content-center align-items-center">
			<div class="col-md-8">
				<!-- Vue component for the card with a vertical line on the left -->
				<div class="card custom-card relative">
					<div class="vertical-line absolute -translate-x-1"></div>
					<div class="card-body rounded-pill">
						<h5 class="card-title text-primary">
							Belum menemukan bentuk atau bahan packaging yang
							Anda inginkan?
						</h5>
						<h6>Konsultasikan Packaging impian Anda sekarang!</h6>
						<button @click="redirectToWhatsApp" type="button"
							class="btn btn-primary rounded-pill text-sm mb-4 mt-3">
							KONSULTASI DENGAN MINIBOX
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.custom-card {
	background-color: #eeeeee;
	position: relative;
	padding-left: 10px;
	/* Adjust as needed for the spacing between the line and content */
	border-radius: 20px;
}

.text-sm {
	font-size: 0.775rem;
}

.text-primary {
	color: #204280 !important;
}

.vertical-line {
	border-left: 7px solid #204280;
	height: 80%;
	left: 0;
	position: absolute;
	top: 10%;
	border-radius: 40px;
}

.custom-card {
	background-color: #eeeeee;
	/* Adjust the background color as needed */
	position: relative;
	padding-left: 3%;
	padding-top: 3%;
	border-radius: 20px;
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
