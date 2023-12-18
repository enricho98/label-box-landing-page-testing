<template>
	<section id="areas" class="bg-custom-blues-one mt-5 mb-5 py-5 float-up-areas">
		<div class="container">
			<div class="mb-4">
				<h5 class="text-center whyUs m-0">KENAPA HARUS MEMILIH LABELBOX?</h5>
				<p class="text-center whyP mt-5">
					LABELBOX PACKAGING ADALAH PERCETAKAN KEMASAN KHUSUS UNTUK <br> MAKANAN & MINUMAN TERLENGKAP DAN TERPERCAYA DI INDONESIA. 
				</p>
			</div>
			<div class="d-flex flex-column flex-md-row flex-wrap">
				<img class="mx-auto max-w-full xl:max-w-2xl rounded-5 mb-4" src="/kb-01.png" alt="Imagem de Cleverson Marques" />

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
.whyP{
	font-size: 20px ;
	text-align: justify;
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
	font-weight: 900 !important;
	padding-top: 0.1rem !important; /* Adjust the padding as needed */
  	padding-bottom: 0.1rem !important; 

}
</style>
<script>
import ScrollReveal from "scrollreveal";

export default {
  methods: {
    redirectToWhatsApp() {
      // Add your WhatsApp URL here
      const whatsappUrl =
        "https://api.whatsapp.com/send?phone=6285935000130&text=Halo%20Minbox!%20Saya%20mau%20tanya%20mengenai%20Packaging.";
      // Open the URL in a new tab or window
      window.open(whatsappUrl, "_blank");
    },
  },
  mounted() {
    // Initialize ScrollReveal when the component is mounted
    ScrollReveal().reveal(".float-up-areas", {
      duration: 1000,
      easing: "ease-in-out",
      viewFactor: 0.5,
      reset: true,
    });
  },
};
</script>

