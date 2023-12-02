<template>
	<div class="d-flex flex-column align-items-center justify-content-center py-5">
		<notifications
			:max="2"
			class="mt-4 p-5 me-3 w-25"
		/>
		<h2 class="fs-2 text-custom-white card-title text-center fw-bold mb-3">Login</h2>
		<div class="col-md-4">
			<label
				class="form-label text-custom-white fw-semibold"
				for="Nome"
				>E-mail:</label
			>
			<input
				required
				name="Nome"
				type="text"
				v-model="user"
				class="form-control mb-3 py-2 bg-transparent text-custom-white"
			/>
			<label
				class="form-label text-custom-white fw-semibold"
				for="Nome"
				>Senha:</label
			>
			<input
				required
				name="Senha"
				type="password"
				v-model="password"
				class="form-control mb-3 py-2 bg-transparent text-custom-white"
			/>
			<button
				class="btn btn-custom-gold text-white"
				v-on:click="toLogin"
			>
				Entrar
			</button>
		</div>
	</div>
</template>

<script>
import { login } from "@/helpers/firebase/login";

export default {
	data() {
		return {
			user: "",
			password: "",
		};
	},
	methods: {
		async toLogin() {
			try {
				const response = await login(this.user, this.password);
				if (response.email) {
					this.$emit("auth", true);
				} else {
					this.$notify({
						title: response,
						type: "error",
					});
				}
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
