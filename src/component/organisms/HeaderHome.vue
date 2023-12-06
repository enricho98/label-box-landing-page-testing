<template>
	<header class="grid grid-cols-12 items-center justify-center">
		<div class="h-full flex items-center bg-gray-200 col-span-7">
			<div
				class="flex flex-col justify-center items-start pl-6 pr-3 md:max-w-[560px] lg:max-w-[770px] ml-auto"
			>
				<img class="logo" src="/capa.png" alt="Your Logo" />
				<h1 class="fw-bold custom">Specialist F&B Packing</h1>
				<p>
					Tingkatkan profit bisnis F&B anda dengan membuat kemasan
					yang menarik
				</p>
				<Button
					size="lg"
					href="https://api.whatsapp.com/send?phone=6285935000130&text=Halo%20Minbox!%20Saya%20mau%20tanya%20mengenai%20Packaging."
				/>
			</div>
		</div>
		<div
			class="h-full col-span-5 flex items-center justify-center py-5 px-3 bg-gradient-to-br from-blue-300 via-blue-500 to-blue-800"
		>
			<div class="md:max-w-[400px] lg:max-w-[550px] mr-auto pl-8">
				<img
					class="rounded-5 w-fit mr-auto"
					src="/header_image.png"
					alt="Imagem de Cleverson Marques"
				/>
			</div>
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
