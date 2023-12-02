<template>
	<section v-if="articles.length" class="container py-5">
		<div class="d-flex align-items-end mb-4">
			<i class="fa-solid fa-scroll text-custom-gold bg-custom-blue p-2 fs-4 rounded-4 me-2"></i>
			<h2 class="text-custom-blue m-0">Blog</h2>
		</div>

		<div class="d-flex flex-column flex-md-row">
			<CardArticle
				v-for="(article, index) in articles"
				:key="index"
				:href="'/article?id=' + article.id"
				:img="article.thumb"
				:title="article.title"
				:description="article.resume"
			/>
		</div>
	</section>
</template>

<script>
import CardArticle from "../molecules/CardArticle.vue";
import { getArticles } from "@/helpers/firebase/articles";

export default {
	components: {
		CardArticle,
	},
	data() {
		return {
			articles: [],
		};
	},
	methods: {
		async getArticles() {
			const querySnapshot = await getArticles();
			querySnapshot.forEach(doc => {
				if(this.articles.length < 4) {
					this.articles = [...this.articles, doc.data()];
				} else {
					return;
				}
			});
			this.articles.sort((a, b) => b.created - a.created);
		},
	},
	mounted() {
		this.getArticles();
	},
};
</script>
