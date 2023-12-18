<template>
	<router-view />
	<Footer />
</template>

<script>
import { Collapse } from "bootstrap/dist/js/bootstrap.esm.min.js";
import Footer from "Organism/Footer";

export default {
	components: {
		Footer,
	},
	mounted() {
		Array.from(document.querySelectorAll("accordionPanelsStayOpenExample")).forEach(coll => new Collapse(coll));
	},
};
</script>
