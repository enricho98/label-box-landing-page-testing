<template>
	<button v-if="showButton" @click="redirectToWhatsApp" class="whatsapp-button">Open WhatsApp</button>
  </template>
  
  <script>
  export default {
	data() {
	  return {
		showButton: false,
	  };
	},
	methods: {
	  redirectToWhatsApp() {
		// Add your WhatsApp URL here
		const whatsappUrl =
		  'https://api.whatsapp.com/send?phone=6285935000130&text=Halo%20Minbox!%20Saya%20mau%20tanya%20mengenai%20Packaging.';
		// Open the URL in a new tab or window
		window.open(whatsappUrl, '_blank');
	  },
	  handleScroll() {
		// Adjust the scroll threshold as needed
		this.showButton = window.scrollY > 200;
	  },
	},
	mounted() {
	  window.addEventListener('scroll', this.handleScroll);
	},
	beforeDestroy() {
	  window.removeEventListener('scroll', this.handleScroll);
	},
  };
  </script>
  
  <style scoped>
  .whatsapp-button {
	position: fixed;
	bottom: 20px;
	right: 20px;
	background-color: green;
	color: white;
	padding: 10px 20px;
	border: none;
  }
  </style>
  