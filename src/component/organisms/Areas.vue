<template>
	<section
		id="areas"
		class="bg-custom py-5"
	>
		<div class="container">
			<div class="  mb-4">
				<h2 class="text-center m-0">OUR PRODUCTS</h2>
			</div>

			<div class="d-flex flex-column flex-md-row flex-wrap">
				<CardArea
					title="Direito empresarial"
					description="Nosso conhecimento em direito empresarial abrange desde contratos comerciais até litígios corporativos, protegendo seus interesses."
					icon="fa fa-solid fa-hand-holding-dollar"
				/>
				<CardArea
					title="Direito trabalhista"
					description="Desde contratos até demissões injustas, garantindo seus direitos e equilíbrio no ambiente de trabalho."
					icon="fa fa-solid fa-briefcase"
				/>
				<CardArea
					title="Direito previdenciário"
					description="Compreendemos leis previdenciárias complexas, protegendo seus benefícios para garantir uma aposentadoria tranquila."
					icon="fa fa-solid fa-hand-holding-dollar"
				/>
				<CardArea
					title="Direito do consumidor"
					description="Defendemos os direitos do consumidor contra práticas injustas, assegurando compensações justas e ética empresarial."
					icon="fa fa-solid fa-hand-holding-dollar"
				/>
			</div>
		</div>
	</section>
</template>

<script>
import CardArea from "../molecules/CardArea.vue";

export default {
	components: {
		CardArea,
	},
};
</script>
