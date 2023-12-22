<template>
	<div class="container mt-5 mb-4">
		<h5 class="text-center titlePack">MENGAPA PACKAGING PENTING?</h5>
		<div class="row justify-content-center align-items-center">
			<div class="col-md-5 mb-4">
				<div class="cards custom-card-pack relative text-center">
					<h6 class="title-pack">Sebagai Pelindung Produk</h6>
					<p class="custompack">Packaging berfungsi untuk menjaga kualitas, bentuk, dan rasa makanan dari kerusakan pada saat disimpan, dikirim, maupun dikonsumsi.</p>
				</div>
			</div>
			<div class="col-md-5 mb-4">
				<div class="cards custom-card-pack relative text-center">
					<h6 class="title-pack">Meningkatkan Brand Awareness</h6>
					<p class="custompack">Packaging dapat digunakan sebagai sarana pemasaran bisnis kuliner sehingga brand Anda selalu diingat oleh konsumen.</p>
				</div>
			</div>
		</div>
		<div class="row justify-content-center align-items-center">
			<div class="col-md-5 mb-4">
				<div class="cards custom-card-pack relative text-center">
					<h6 class="title-pack">Meningkatkan Value Produk</h6>
					<p class="custompack">Packaging dapat membuat produk yang simpel terlihat lebih menarik dan unik, sehingga dapat menaikkan nilai dari produk tersebut.</p>
				</div>
			</div>
			<div class="col-md-5 mb-4">
				<div class="cards custom-card-pack relative text-center">
					<h6 class="title-pack">Pembeda dari Kompetitor</h6>
					<p class="custompack">Packaging dapat memudahkan Konsumen untuk mengidentifikasikan dan membedakan produk Anda dari kompetitor.</p>
				</div>

			</div>
		</div>
		<div class="row justify-content-center align-items-center">
			<div class="col-md-5">
				<div class="cards custom-card-pack relative text-center">
					<h6 class="title-pack">Meningkatkan Omset Penjualan</h6>
					<p class="custompack">Packaging yang menarik dan unik memiliki daya tarik sendiri untuk konsumen, sehingga dapat meningkatkan penjualan Anda.</p>
				</div>

			</div>
		</div>
		
	</div>
</template>
<style>
.titlePack{
	color: #1d4486;
	font-weight: 900;
	padding-bottom: 50px;
	font-size: 25px ;
}

.custom-card-pack{
	border-radius: 35px !important;
	border-color: #1d4486 !important;
	border-width: 3px !important;
	border-style: solid !important;
}	

.title-pack{
	font-size: 18px;
	font-weight: 900;
	color: #1d4486;
	margin-top: 20px;
	margin-bottom: 10px;
}
.custompack{
	text-align: justify;
	line-height: 20px;
	padding-left: 25px;
	padding-right: 25px;
}

@media screen and (max-width: 767px) {
  /* Adjustments for smaller screens */
  .custompack {
    text-align: center; /* Change to left-align on smaller screens */
    padding-left: 10px; /* Adjust left padding */
    padding-right: 10px; /* Adjust right padding */
  }
}
</style>
<script>
export default {
	methods: {
		redirectToWhatsApp() {
			// Add your WhatsApp URL here
			const whatsappUrl =
				'https://mauorder.online/labelbox-ggl.';
			// Open the URL in a new tab or window
			window.open(whatsappUrl, '_blank');
		},
	},
};
</script>
