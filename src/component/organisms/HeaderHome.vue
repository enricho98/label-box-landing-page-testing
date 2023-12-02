<template>
	<header class="container d-flex align-items-center flex-column flex-md-row py-5">
		<div class="d-flex flex-column justify-content-center align-items-start col col-md-6">
			<h1 class="fw-bold text-custom-blue">Aqui seu caso está em boas mãos!</h1>
			<p>
				combinando conhecimento de 12 anos de experiência com comprometimento pela verdade e justiça, estamos
				aqui para defender aqueles que nos procuram
			</p>
			<Button
				size="lg"
				href="https://wa.me/+5541999441503"
			/>
		</div>
		<div class="col col-md-6 d-flex justify-content-end mt-3 mt-md-0">
			<img
				class="w-100 rounded-5"
				src="/cleverson-bg-logo.png"
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
img {
	max-width: 400px;
}
</style>
