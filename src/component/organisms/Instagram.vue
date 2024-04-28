<template>
	<!-- remove margin when enabling lawyers section -->
	<section class="container mt-5">
    <h5 class="text-center whtatss mb-4">YANG TERBARU DARI LABELBOX</h5>
		<div class="position-relative mb-5">
			<div class='sk-instagram-feed' data-embed-id=''></div>
		</div>
	</section>
</template>
<script>
import ScrollReveal from "scrollreveal";

export default {
  mounted() {
    // The script will be loaded when the component is mounted
    const script = document.createElement('script');
    script.src = 'https://widgets.sociablekit.com/instagram-feed/widget.js';
    script.async = true;
    script.defer = true;

    // Append the script to the body
    document.body.appendChild(script);

    // Initialize ScrollReveal when the component is mounted
    ScrollReveal().reveal(".float-instagram", {
      duration: 1000,
      easing: "ease-in-out",
      viewFactor: 0.5,
      reset: true,
    });
  },
};
</script>


<style>
.whtatss{
  color: #204280 !important;
  font-size: 23px !important;
  font-weight: 900 !important;
}
</style>
