<template>
	<HeaderHome />
	<Areas />
	<Instagram />
	<Card />
	<Why />
	<CardBig />
	<How />

</template>

<script>
import HeaderHome from "Organism/HeaderHome.vue";
import About from "Organism/About.vue";
import Areas from "Organism/Areas.vue";
import Card from "Organism/Card.vue"; 
import CardBig from "Organism/CardBig.vue";
import Why from "Organism/Why.vue";
import Instagram from "Organism/Instagram.vue";
import How from "../component/organisms/How.vue";

export default {
	components: {
    HeaderHome,
    About,
    Areas,
    Card,
    CardBig,
    Instagram,
    Why,
    How
},
};
</script>
