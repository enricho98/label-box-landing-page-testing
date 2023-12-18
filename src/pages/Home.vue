<template>
    <div>
        <HeaderHome />
        <Pack />
        <Why />
        <Areas />
        <How />
        <CardBig />
        <Instagram />
        <!-- <Card class="float-up" /> -->

        <WhatsAppButton />
    </div>
</template>
  
<script>
import HeaderHome from "Organism/HeaderHome.vue";
import About from "Organism/About.vue";
import Areas from "Organism/Areas.vue";
// import Card from "Organism/Card.vue";
import CardBig from "Organism/CardBig.vue";
import Why from "Organism/Why.vue";
import Instagram from "Organism/Instagram.vue";
import How from "../component/organisms/How.vue";
import Pack from "../component/organisms/Pack.vue";
import ScrollReveal from "scrollreveal";
import WhatsAppButton from "Organism/WhatsAppButton.vue";

export default {
    components: {
        HeaderHome,
        About,
        Areas,
        // Card,
        CardBig,
        Instagram,
        Why,
        How,
        Pack,
        WhatsAppButton,
    },
    mounted() {
        // Initialize ScrollReveal when the component is mounted
        ScrollReveal().reveal(".float-up", {
            duration: 1000,
            easing: "ease-in-out",
            // viewFactor: 0.5,
            reset:true        
        });
    },
};
</script>
  