<template>
	<div class="container mt-4 mb-4">
		<div class="row justify-content-center align-items-center">
			<div class="col-md-10">
				<!-- Vue component for the card with a vertical line on the left -->
				<div class="card custom-card">
					<div class="vertical-line"></div>
					<div class="card-body rounded-pill text-center">
						<button type="button" class="btn btn-primary rounded-0  text-sm mb-4 mt-3">PENAWARAN TERBATAS </button>
						<h1>Pesan Sekarang GRATIS jasa Desain!</h1>
						<button type="button" class="btn btn-success rounded-pill text-sm mb-4 mt-4">KLAIM FREE DESIGN </button>

					</div>
				</div>
			</div>
		</div>
	</div>
</template>
  
<style scoped>
.vertical-line {
	border-left: 7px solid #204280;
	height: 80%;
	left: 0;
	position: absolute;
	top: 10%;
	border-radius: 40px;
}

.text-sm {
	font-size: 0.775rem;
}

.text-primary {
	background-color: #204280 !important;
	color: white !important;
}

.custom-card {
	background-color: #eeeeee;
	/* Adjust the background color as needed */
	position: relative;
	padding-left: 3%;
	padding-top: 3%;
	border-radius: 20px;
}
.btn-success{
	background-color: #18c61c !important;
	color: white !important;
	border-color: #18c61c !important;
}
</style>

  