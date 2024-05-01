<template>
	<div class="container mt-5 mb-4">
		<h5 class="text-center titlePack">Why Use our service?</h5>
		<div class="row justify-content-center align-items-center">
			<div class="col-md-5 mb-4">
				<div class="cards custom-card-pack relative text-center">
					<h6 class="title-pack">Reason number 1</h6>
					<p class="custompack">Description of the reason number 1.</p>
				</div>
			</div>
			<div class="col-md-5 mb-4">
				<div class="cards custom-card-pack relative text-center">
					<h6 class="title-pack">Reason number 2</h6>
					<p class="custompack">Description of the reason number 2.</p>
				</div>
			</div>
		</div>
		<div class="row justify-content-center align-items-center">
			<div class="col-md-5 mb-4">
				<div class="cards custom-card-pack relative text-center">
					<h6 class="title-pack">Reason number 3</h6>
					<p class="custompack">Description of the reason number 3.</p>
				</div>
			</div>
			<div class="col-md-5 mb-4">
				<div class="cards custom-card-pack relative text-center">
					<h6 class="title-pack">Reason number 4</h6>
					<p class="custompack">Description of the reason number 4.</p>
				</div>

			</div>
		</div>
		<div class="row justify-content-center align-items-center">
			<div class="col-md-5">
				<div class="cards custom-card-pack relative text-center">
					<h6 class="title-pack">Reason number 5</h6>
					<p class="custompack">Description of the reason number 5.</p>
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
				'https://www.instagram.com/sudopandame/';
			// Open the URL in a new tab or window
			window.open(whatsappUrl, '_blank');
		},
	},
};
</script>
