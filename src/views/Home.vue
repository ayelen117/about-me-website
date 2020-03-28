<template>
  <div class="home">
    <Main />
    <Navbar />
    <About />
    <Portfolio />
    <!-- <Contact /> -->
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Main from "@/components/Main.vue";
import Navbar from "@/components/Navbar.vue";
import About from "@/components/About.vue";
import Portfolio from "@/components/Portfolio.vue";
// import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Main,
    Navbar,
    About,
    Portfolio,
    // Contact,
    Footer
  }
};
</script>
