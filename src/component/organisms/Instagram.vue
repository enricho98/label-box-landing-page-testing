<template>
	<!-- remove margin when enabling lawyers section -->
	<section class="container mt-5">
		<div class="d-flex align-items-end mb-4">
			<i class="fa-brands fa-instagram text-custom-gold bg-custom-blue p-2 fs-4 rounded-4 me-2"></i>
			<h2 class="text-custom-blue m-0">Instagram</h2>
		</div>

		<div class="position-relative">
			<div class='sk-instagram-feed' data-embed-id='235630'></div>
			<div class="blur w-100 bg-white"></div>
		</div>
	</section>
</template>
<script>
export default {
  mounted() {
    // The script will be loaded when the component is mounted
    const script = document.createElement('script');
    script.src = 'https://widgets.sociablekit.com/instagram-feed/widget.js';
    script.async = true;
    script.defer = true;

    // Append the script to the body
    document.body.appendChild(script);
  }
}
</script>

<style lang="scss" scoped>
.blur {
	position: absolute;
	z-index: 99999 !important;
	bottom: 0;
	height: 48px;
}
</style>
