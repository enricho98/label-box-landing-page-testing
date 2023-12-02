<template>
	<div class="d-flex flex-column align-items-center w-100">
		<section
			class="container"
			v-if="articles?.length"
		>
			<div class="input-group my-3">
				<input
					type="text"
					class="form-control"
					v-model="searchTerm"
					placeholder="Buscar artigos"
				/>
				<button
					class="btn btn-custom-gold text-white"
					@click="searchArticles"
				>
					Buscar
				</button>
			</div>
			<div
				v-for="(article, index) in displayedArticles"
				:key="index"
				class="article p-2 mb-3 mb-lg-0 d-flex flex-column flex-md-row text-reset rounded text-decoration-none"
			>
				<img
					:src="article.thumb"
					class="object-fit-cover col-md-1 rounded me-md-3 mb-3 mb-md-0"
					style="height: 70px"
				/>
				<div class="d-flex align-items-center justify-content-between w-100">
					<h4 class="text-black m-0">{{ truncate(article.title, 35) }}</h4>
					<i
						class="fa-solid fa-trash text-white fs-5 pt-1 rounded-3 bg-danger pb-3 pt-3 px-3 m-0 lh-1"
						@click="deleteElement(article.id, article.referThumb)"
					></i>
				</div>
			</div>
		</section>
		<section
			v-else
			class="text-white d-flex align-items-center justify-content-center"
		>
			<p class="text-black mt-5">Você não possui artigos publicados</p>
		</section>
		<ul
			v-if="totalPages > 1"
			class="pagination justify-content-end mt-3"
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
	</div>
</template>

<script>
import { getArticles, deleteArticle } from "@/helpers/firebase/articles.js";
import { deleteFile } from "@/helpers/firebase/upload.js";

export default {
	data() {
		return {
			articles: [],
			currentPage: 1,
			articlesPerPage: 5,
			searchTerm: "",
		};
	},
	methods: {
		async getArticles(searchTerm = "") {
			const querySnapshot = await getArticles();
			this.articles = [];
			querySnapshot.forEach(doc => {
				const article = doc.data();
				if (article.title.toLowerCase().includes(searchTerm.toLowerCase())) {
					this.articles.push(article);
				}
			});
			this.articles.sort((a, b) => b.created - a.created);
		},
		searchArticles() {
			this.getArticles(this.searchTerm);
		},
		deleteElement(id, refer) {
			try {
				deleteArticle(id);
				deleteFile(refer);
				this.$notify({ title: "Artigo deletado", type: "success" });
				setTimeout(() => {
					location.reload();
				}, 500);
			} catch (error) {
				this.$notify({
					title: "Não foi possível deletar o artigo. Tente novamente mais tarde",
					type: "error",
				});
			}
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

<style lang="scss" scoped>
.article:hover {
	transition: all 0.5s;
	background-color: rgba(0, 0, 0, 0.34);
	opacity: 90%;
}

i {
	cursor: pointer;
}

@media (max-width: 768px) {
	.article {
		transition: all 0.5s;
		background-color: rgba(0, 0, 0, 0.34);
		opacity: 90%;
	}
}
</style>
