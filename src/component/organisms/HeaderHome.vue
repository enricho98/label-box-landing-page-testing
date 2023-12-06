<template>
	<header class="container d-flex align-items-start flex-column flex-md-row py-5">
  
	  <div class="d-flex flex-column justify-content-center align-items-start col col-md-8 mt-md-0 color-bg">
		<img class="logo img-fluid mb-5" src="/logo.png" alt="Your Logo" />

		<h1 class="fw-bold custom">Specialist F&B Packing</h1>
		<p>
		  Tingkatkan profit bisnis F&B anda dengan membuat kemasan yang menarik
		</p>
		<Button
		  size="lg"
		  href="https://api.whatsapp.com/send?phone=6285935000130&text=Halo%20Minbox!%20Saya%20mau%20tanya%20mengenai%20Packaging."
		/>
	  </div>
  
	  <div class="col col-md-4 d-flex justify-content-end mt-md-0 text-white">
		<img
		  class="w-100 rounded-5"
		  src="/header_image.png"
		  alt="Imagem de Cleverson Marques"
		/>
	  </div>
	</header>
  </template>
  
  <script>
  import Button from "Atom/Button.vue";
  
  export default {
	components: {
	  Button,
	},
  };
  </script>
  
  <style lang="scss" scoped>
  h1 {
	font-size: 3.438rem;
  }
  
  p {
	font-size: 1.75rem;
  }
  
  .logo {
	max-width: 200px; /* Adjust the size as needed */
  }
  
  .custom {
	color: rgb(32, 66, 128) !important;
  }
  </style>
  