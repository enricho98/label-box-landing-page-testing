<template>
	<div class="container mt-4 mb-4">
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
						<button
							type="button"
							class="btn btn-primary rounded-pill text-sm mb-4 mt-3"
						>
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

.custom-card::before {
	content: '';
	border-left: 7px solid #204280;
	height: 80%;
	position: absolute;
	top: 50%;
	/* Center the line vertically */
	transform: translateY(-50%);
	/* Adjust for centering */
	border-radius: 20px;
	left: 0;
}

.text-sm {
	font-size: 0.775rem;
}

.text-primary {
	color: #204280 !important;
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
