<template>
	<Login
		v-if="!auth"
		@auth="handleCustomEvent"
	/>
	<CrudArticle
		@auth="handleCustomEvent"
		v-else
	/>
</template>

<script>
import Login from "Organism/Login.vue";
import CrudArticle from "Organism/Crud.vue";
import { isAuth } from "@/helpers/firebase/login";

export default {
	data() {
		return {
			auth: false,
		};
	},
	components: {
		Login,
		CrudArticle,
	},
	mounted() {
		this.isAuthenticated();
	},
	methods: {
		async isAuthenticated() {
			try {
				this.auth = await isAuth();
			} catch (error) {
				this.$notify({
					title: error,
					type: "error",
				});
			}
		},
		handleCustomEvent(ev) {
			this.auth = ev;
		},
	},
};
</script>
