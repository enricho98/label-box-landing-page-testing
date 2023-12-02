<template>
	<section
		v-if="articles?.length"
		class="container d-flex flex-column"
	>
		<ArticleItem
			v-for="(article, index) in displayedArticles"
			:key="index"
			:title="article.title"
			:description="truncate(article.resume, 300)"
			:articleId="article.id"
			:img="article.thumb"
		/>
	</section>
	<section
		v-else
		style="padding-top: 88px; min-height: 100vh"
		class="text-white d-flex align-items-center justify-content-center"
	>
		<p class="text-black">Nenhum artigo publicado ainda</p>
	</section>
	<ul
		v-if="totalPages > 1"
		class="pagination d-flex justify-content-center"
	>
		<li
			v-for="page in totalPages"
			:key="page"
			@click="changePage(page)"
			:class="{ active: currentPage === page }"
			class="page-item"
		>
			<a
				class="page-link"
				href="#"
				>{{ page }}</a
			>
		</li>
	</ul>
</template>

<script>
import ArticleItem from "Molecule/ArticleItem";
import { getArticles } from "@/helpers/firebase/articles";

export default {
	components: {
		ArticleItem,
	},
	data() {
		return {
			articles: [],
			currentPage: 1,
			articlesPerPage: 5,
		};
	},
	methods: {
		async getArticles() {
			const querySnapshot = await getArticles();
			querySnapshot.forEach(doc => {
				this.articles = [...this.articles, doc.data()];
			});
			this.articles.sort((a, b) => b.created - a.created);
		},
		truncate(text, limit) {
			if (text.length <= limit) {
				return text;
			} else {
				return text.slice(0, limit) + "...";
			}
		},
		changePage(page) {
			this.currentPage = page;
		},
	},
	computed: {
		displayedArticles() {
			const start = (this.currentPage - 1) * this.articlesPerPage;
			const end = start + this.articlesPerPage;
			return this.articles.slice(start, end);
		},
		totalPages() {
			return Math.ceil(this.articles.length / this.articlesPerPage);
		},
	},
	mounted() {
		this.getArticles();
	},
};
</script>
