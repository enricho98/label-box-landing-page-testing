<template>
	<footer>
		<div id="footer" class="container d-flex flex-column">
			<div class="border-top-grey text-left py-2">
				<div class="container mt-5">
					<div class="row">
						<div class="col-md-6 mb-4">
							<div class="footer-left">
								<img src="/logo.png" alt="Logo" class="footer-logo img-fluid">
								<div>
									<p class="mt-1 footerSmall">Sudo<br>Panda</p>
								</div>
							</div>

						</div>
						<!-- WhatsApp and Instagram Icons -->
						<div class="col-md-6 position-relative ">
							<div class="text-end position-absolute bottom-10 end-0">
								<a href="https://www.instagram.com/sudopandame" class="">
									<i class="fa-brands fa-instagram text-primary fs-1 ms-3 instagram-icon bigger-icon"></i>
								</a>

								<a href="https://www.instagram.com/sudopandame/"
									class=""><i class="fa-brands fa-whatsapp whatsapp-icon text-primary fs-1 ms-3"></i></a>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>


<style scoped>
.border-top-grey {
	border-top: 1px solid #ccc;
	/* Adjust the color code to your desired shade of grey */
}

.footer-logo {
	max-width: 150px;
	/* Adjust the size as needed */
}

.instagram-icon {
	font-size: 2rem !important;
}
.whatsapp-icon {
	font-size: 2rem !important;
}
@media (max-width: 768px) {
	.footerSmall{
		margin-right: 100px;
	}
}

/* Add other styles as needed */</style>
