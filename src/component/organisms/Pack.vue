<template>
	<div class="container mt-5 mb-4">
		<h5 class="text-center">MENGAPA PACKAGING PENTING?</h5>
		<div class="row justify-content-center align-items-center">
			<div class="col-md-6 mb-4">
				<div class="card custom-card relative text-center">
					<h6>Sebagai Pelindung Produk</h6>
					<p class="customp">Packaging berfungsi untuk menjaga kualitas, bentuk, dan rasa makanan dari kerusakan pada saat disimpan, dikirim, maupun dikonsumsi.</p>
				</div>
			</div>
			<div class="col-md-6 mb-4">
				<div class="card custom-card relative text-center">
					<h6>Meningkatkan Brand Awareness</h6>
					<p class="customp">Packaging dapat digunakan sebagai sarana pemasaran bisnis kuliner sehingga brand Anda selalu diingat oleh konsumen.</p>
				</div>
			</div>
		</div>
		<div class="row justify-content-center align-items-center">
			<div class="col-md-6 mb-4">
				<div class="card custom-card relative text-center">
					<h6>Meningkatkan Value Produk</h6>
					<p class="customp">Packaging dapat membuat produk yang simpel terlihat lebih menarik dan unik, sehingga dapat menaikkan nilai dari produk tersebut.</p>
				</div>
			</div>
			<div class="col-md-6 mb-4">
				<div class="card custom-card relative text-center">
					<h6>Pembeda dari Kompetitor</h6>
					<p class="customp">Packaging dapat memudahkan Konsumen untuk mengidentifikasikan dan membedakan produk Anda dari kompetitor.</p>
				</div>

			</div>
		</div>
		<div class="row justify-content-center align-items-center">
			<div class="col-md-6">
				<div class="card custom-card relative text-center">
					<h6>Meningkatkan Omset Penjualan</h6>
					<p class="customp">Packaging yang menarik dan unik memiliki daya tarik sendiri untuk konsumen, sehingga dapat meningkatkan penjualan Anda.</p>
				</div>

			</div>
		</div>
		
	</div>
</template>

<!-- <style scoped>
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
</style> -->
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
