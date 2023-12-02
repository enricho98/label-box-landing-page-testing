<template>
	<article class="py-3 container d-flex flex-column">
		<img
			:src="article.thumb"
			class="col-12 rounded-5 mt-4 object-fit-cover"
		/>
		<div class="mt-3 border-gray-500">
			<h2
				v-if="article.title"
				class="text-center text-black fw-bold"
			>
				{{ article.title }}
			</h2>
			<div
				v-else
				class="w-100 d-flex align-items-center justify-content-center"
			>
				<p>Carregando...</p>
			</div>
		</div>
		<div class="mt-3 fw-light">
			<div
				id="articleContent"
				class="text-black text-break container"
			></div>
		</div>
	</article>
</template>

<script>
import { getArticleById } from "@/helpers/firebase/articles.js";
import { deltaToHtml } from "@/helpers/delta/index.js";

export default {
	data() {
		return {
			article: {},
			id: this.$route.query.id,
		};
	},
	computed: {
		created() {
			return new Date(this.article.created);
		},
	},
	methods: {
		truncate(text, size) {
			return `${text.substring(0, size)}...`;
		},
		async getArticle() {
			try {
				const querySnapshot = await getArticleById(this.id);
				querySnapshot.forEach(doc => {
					this.article = doc.data();
				});

				deltaToHtml(this.article.article, "articleContent");
			} catch (error) {
				this.$notify({
					title: error,
					type: "error",
				});
			}
		},
	},
	mounted() {
		this.getArticle();
	},
};
</script>

<style lang="scss" scoped>
img {
	height: 250px;
}
</style>
