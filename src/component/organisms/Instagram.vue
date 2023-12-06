<template>
	<!-- remove margin when enabling lawyers section -->
	<section class="container mt-5">
		<div class="position-relative">
			<!-- <div class='sk-instagram-feed' data-embed-id='235630'></div> -->
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

