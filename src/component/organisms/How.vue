<template>
	<section id="areas" class="bg-custom-blues mt-5 mb-5 py-5">
	  <div class="container">
		<div class="mb-4">
		  <h5 class="text-center m-0">HOW TO ORDER</h5>
		</div>
  
		<div class="d-flex flex-column flex-md-row flex-wrap">
		  <img
			v-if="isMobile"
			class="mx-auto max-w-full xl:max-w-2xl rounded-5 mb-4"
			src="/Flowsa-03.png"  
			alt="Mobile Image"
		  />
		  <img
			v-else
			class="mx-auto max-w-full xl:max-w-2xl rounded-5 mb-4"
			src="/how.png"
			alt="Desktop Image"
		  />
		</div>
  
		<div class="mb-4 mt-2 text-center">
		  <button @click="redirectToWhatsApp" type="button" class="btn btn-primary rounded-pill text-center custome-kami">
			PESAN SEKARANG
		  </button>
		</div>
	  </div>
	</section>
  </template>
  
  <script>
  export default {
	data() {
	  return {
		isMobile: false,
	  };
	},
	mounted() {
	  // Check if the screen width is below a certain threshold (e.g., 767px)
	  this.isMobile = window.innerWidth <= 767;
	  // Listen for window resize events to update isMobile
	  window.addEventListener('resize', this.updateIsMobile);
	},
	beforeDestroy() {
	  // Remove the resize event listener when the component is destroyed
	  window.removeEventListener('resize', this.updateIsMobile);
	},
	methods: {
	  updateIsMobile() {
		// Update isMobile based on the screen width
		this.isMobile = window.innerWidth <= 767;
	  },
	  redirectToWhatsApp() {
		const whatsappUrl =
		  'https://api.whatsapp.com/send?phone=6285935000130&text=Halo%20Minbox!%20Saya%20mau%20tanya%20mengenai%20Packaging.';
		window.open(whatsappUrl, '_blank');
	  },
	},
  };
  </script>
  
  <style>
  .bg-custom-blues {
	background-color: #ffffff !important;
	color: #204280 !important;
  }
  
  .custome-kami {
	font-size: 1rem;
	background-color: #204280 !important;
	color: white !important;
  }
  </style>
  