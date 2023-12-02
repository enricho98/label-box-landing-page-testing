<template>
	<section class="d-flex flex-column align-items-center py-5">
		<notifications
			:max="2"
			class="mt-4 p-5 me-3 w-25"
		/>
		<div class="text-end container">
			<button
				type="button"
				@click="endSession()"
				class="btn btn-custom-gold mt-1 text-white"
			>
				<i class="fa-solid fa-right-from-bracket"></i> Sair
			</button>
		</div>
		<div class="container">
			<ul
				class="nav nav-tabs"
				role="tablist"
			>
				<li
					class="nav-item"
					role="presentation"
				>
					<button
						class="nav-link active"
						id="create-article"
						data-bs-toggle="tab"
						data-bs-target="#create-article-pane"
						type="button"
						role="tab"
						aria-controls="create-article-pane"
						aria-selected="true"
						@click="currentTab = 'create'"
					>
						Criar artigo
					</button>
				</li>
				<li
					class="nav-item"
					role="presentation"
				>
					<button
						class="nav-link"
						id="delete-articles-tab"
						data-bs-toggle="tab"
						data-bs-target="#delete-articles-tab-pane"
						type="button"
						role="tab"
						aria-controls="delete-articles-tab-pane"
						aria-selected="false"
						@click="currentTab = 'delete'"
					>
						Deletar artigos
					</button>
				</li>
			</ul>
		</div>
		<CreateArticle v-if="currentTab === 'create'" />
		<DeleteArticle v-if="currentTab === 'delete'" />
	</section>
</template>

<script>
import CreateArticle from "Organism/CreateArticle.vue";
import DeleteArticle from "Organism/DeleteArticle.vue";
import { logOut } from "@/helpers/firebase/login.js";

export default {
	data() {
		return {
			currentTab: "create",
		};
	},
	components: {
		CreateArticle,
		DeleteArticle,
	},
	methods: {
		async endSession() {
			try {
				await logOut();
				this.$emit("auth", false);
			} catch (error) {
				this.$notify({
					title: error,
					type: "error",
				});
			}
		},
	},
};
</script>
