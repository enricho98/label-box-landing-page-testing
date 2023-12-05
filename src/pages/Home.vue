<template>
	<HeaderHome />
	
	<Areas />
	<Blog />
	<Instagram />
	<Laws />

</template>

<script>
import HeaderHome from "Organism/HeaderHome.vue";
import About from "Organism/About.vue";
import Areas from "Organism/Areas.vue";
import Laws from "Organism/Laws.vue"; // no more lawyers at the moment
import Blog from "Organism/Blog.vue";
import Instagram from "Organism/Instagram.vue";

export default {
	components: {
		HeaderHome,
		About,
		Areas,
		Laws, // no more lawyers at the moment
		Blog,
		Instagram,
	},
};
</script>
