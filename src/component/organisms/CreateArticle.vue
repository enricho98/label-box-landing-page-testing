<template>
	<div class="d-flex flex-column align-items-center justify-content-center col col-md-7">
		<form class="container">
			<h2 class="fw-bold text-center my-3">Crie seu artigo agora</h2>
			<label
				class="fw-semibold"
				for="title"
				>Escolha um título para o seu artigo</label
			>
			<input
				id="title"
				type="text"
				class="form-control text-black rounded-0 border-custom-gold"
				placeholder="Meu título..."
				v-model="title"
				required
			/>
			<label
				class="fw-semibold mt-2"
				for="resume"
				>Resumo</label
			>
			<textarea
				v-model="resume"
				class="form-control text-black rounded-0 border-custom-gold"
				id="resume"
				placeholder="Você já pensou em..."
				required
			></textarea>
			<label class="fw-semibold mt-2">Escolha uma capa para o artigo (MAX: 100KB)</label>
			<div class="input-group mb-3">
				<input
					id="uploadInput"
					type="file"
					accept="image/png,image/jpeg,image/webp"
					class="form-control rounded-0 border-custom-gold"
				/>
				<label
					class="input-group-text rounded-0 border-custom-gold"
					for="uploadInput"
					>Upload</label
				>
			</div>
			<label class="fw-semibold mt-2">Escreva o artigo</label>
			<div class="mb-3 rounded-0 border-custom-gold border border-custom-gold">
				<QuillEditor
					v-model:content="article"
					:toolbar="toolbarOptions"
					theme="snow"
				/>
			</div>
			<Modal
				@click="saveArticle"
				btnOpen="Publicar"
				btnSave="Continuar"
				title="Você deseja publicar este artigo?"
			/>
		</form>
	</div>
</template>

<script>
import { addArticle } from "@/helpers/firebase/articles.js";
import { upload, deleteFile } from "@/helpers/firebase/upload.js";
import uniqid from "uniqid";
import Modal from "Molecule/Modal.vue";

export default {
	data() {
		return {
			title: null,
			article: null,
			resume: null,
			reference: null,
			toolbarOptions: [
				["bold", "italic", "underline", "strike"], // toggled buttons
				[{ list: "ordered" }, { list: "bullet" }],
				[{ script: "sub" }, { script: "super" }], // superscript/subscript
				[{ header: [1, 2, 3, 4, 5, 6, false] }],
				[{ color: [] }, { background: [] }], // dropdown with defaults from theme
				["clean"], // remove formatting button
			],
		};
	},
	methods: {
		async saveArticle() {
			if (!this.title) {
				this.$notify({ title: "Preencha o título", type: "error" });
				return;
			}
			if (!this.resume) {
				this.$notify({ title: "Preencha o resumo", type: "error" });
				return;
			}
			const file = document.getElementById("uploadInput").files[0];
			if (!file) {
				this.$notify({
					title: "Você precisa carregar uma capa para o artigo",
					type: "error",
				});
				return;
			}
			const fileSizeInBytes = file.size / 1024;
			if (fileSizeInBytes > 100) {
				this.$notify({
					title: "O tamanho do arquivo excede 100 KB",
					type: "error",
				});
				return;
			}
			if (!this.article) {
				this.$notify({ title: "Preencha o artigo", type: "error" });
				return;
			}

			let created = new Date().getTime();
			try {
				const { url, reference } = await upload(file);
				this.reference= reference;
				await addArticle(
					uniqid(),
					this.title,
					JSON.stringify(this.article),
					this.resume,
					"cleverson",
					url,
					reference,
					created
				);
				this.$notify({ title: "Artigo criado", type: "success" });
				setTimeout(() => {
					location.reload();
				}, 500);
			} catch (error) {
				deleteFile(this.reference);
				this.$notify({ title: error, type: "error" });
				console.log(error)
			}
		},
	},
	components: {
		Modal,
	},
};
</script>
