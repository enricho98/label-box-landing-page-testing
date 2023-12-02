<template>
	<div
		id="modal"
		class="modal"
		tabindex="-1"
	>
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div
					v-if="title"
					class="modal-header border-0"
				>
					<h5 class="modal-title">{{ title }}</h5>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="modal"
						aria-label="Close"
					></button>
				</div>
				<div
					v-if="body"
					class="modal-body border-0"
				>
					<p>{{ body }}</p>
				</div>
				<div class="modal-footer border-0">
					<button
						type="button"
						class="btn"
						data-bs-dismiss="modal"
					>
						{{ btnClose }}
					</button>
					<button
						data-bs-dismiss="modal"
						@click="$emit('click')"
						type="button"
						class="btn btn-custom-gold text-white"
					>
						{{ btnSave }}
					</button>
				</div>
			</div>
		</div>
	</div>

	<button
		type="button"
		class="btn btn-custom-gold text-white"
		data-bs-toggle="modal"
		data-bs-target="#modal"
	>
		{{ btnOpen }}
	</button>
</template>
<script>
export default {
	props: {
		title: { type: String, default: null },
		body: { type: String, default: null },
		btnClose: { type: String, default: "Fechar" },
		btnOpen: { type: String, default: "Abrir" },
		btnSave: { type: String, default: "Salvar" },
	},
};
</script>
