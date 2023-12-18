<template>
	<header class="grid grid-cols-12 items-start justify-start float-up">
		<div class="h-full col-span-12 md:col-span-7 flex flex-col justify-start flex-container">
			<img class="logo w-1/4 md:w-1/6 ml-3 mt-3" src="/logo.png" alt="Your Logo" />

			<div class="p-6 md:pr-3 md:max-w-[560px] lg:max-w-[770px] flex items-start m-auto">
				<div class="logo-text ml-4">
					<h1 class="fw-bold customText text-4xl md:text-5xl">Specialist F&B Packing</h1>
					<p class="text-xs customp md:text-base">
						Tingkatkan profit bisnis F&B anda dengan membuat kemasan yang menarik !
					</p>
					<Button class="ml-2" size="lg"
						href="https://api.whatsapp.com/send?phone=6285935000130&text=Halo%20Minbox!%20Saya%20mau%20tanya%20mengenai%20Packaging." />
				</div>
			</div>
		</div>
		<div
			class="h-full col-span-12 md:col-span-5 flex items-center justify-center py-5 px-3 bg-gradient-to-br from-blue-300 via-blue-500 to-blue-800">
			<div class="md:max-w-[400px] lg:max-w-[550px] mx-auto">
				<img class="rounded-5 w-full md:w-auto" src="/header_image.png" alt="Imagem de Cleverson Marques" />
			</div>
		</div>
	</header>
</template>
  
<script>
import Button from "Atom/Button.vue";
import ScrollReveal from "scrollreveal";

export default {
  components: {
    Button,
  }

};
</script>

<style lang="scss" scoped>
.flex-container {
  background-color: #eeeeee; /* Add your desired background color */
}
.customp{
	font-size: larger;
	line-height: 25px;
	padding-right: 100px !important;
}
.logo {
  max-width: 80% !important;
  /* Make the logo responsive */
}

.customText{
	font-size: 45px !important;
}
@media (min-width: 768px) {
  .logo {
	max-width: 8%;
	/* Adjust the width as needed for larger screens */
  }
}

.logo-text {
  margin-left: 50px !important;
  /* Adjust the margin as needed for spacing between the logo and text */
  position: relative;
  
  /* Adjust the vertical position */
}

h1 {
  margin-left: 1rem;
  color: #1d4486;
  font-size: 2rem;
  line-height: 50px;
  margin-top: auto; 
}

p {
  margin-left: 1rem;
  position: relative;
  margin-top: auto;
 	margin-bottom: 1rem; /* Adjust the bottom margin */
  font-size: 1rem;
  top: 0.5rem;
  /* Adjust the vertical position */
  line-height: 40px;
}

/* Adjust the font size of the button */
Button {
  margin-top: 2rem; /* Adjust the top margin */
  margin-left: 1rem; /* Adjust the left margin */
  position: relative;
  top: 0.5rem; /* Adjust the vertical position */
  font-size: 1rem;
}

@media (min-width: 768px) {
  .logo-text {
	margin-left: 0;
	align-self: flex-start;
	top: 0;
  }
  .customp{
	font-size: larger;
	line-height: 25px;
}
}
</style>

  