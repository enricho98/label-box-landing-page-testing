<template>
	<button v-if="showButton" @click="redirectToWhatsApp" class="whatsapp-button"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
</button>
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
		  'https://mauorder.online/labelbox-ggl-search';
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
	z-index: 1;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: white;
  color: #25d366;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease-in-out;
}
.whatsapp-button:hover {
  background-color: #204280;
}
  </style>
  