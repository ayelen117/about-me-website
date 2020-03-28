<template>
  <b-row id="footer" class="section">
    <div class="container flex">
      <div class="row socials">
        <div v-for="social in socials" :key="social.name" class="col social">
          <div class="shape">
            <a :href="social.link">
              <font-awesome-icon :icon="social.icon" />
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col copyright">
          AYELEN GUERRA
          <span class="bold">©2020</span>
        </div>
      </div>
    </div>
  </b-row>
</template>

<script lang="ts">
export default {
  name: "Footer",
  data() {
    return {
      socials: [
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/ayelen-guerra/",
          icon: ["fab", "linkedin-in"]
        },
        {
          name: "Hackerrank",
          link: "https://www.hackerrank.com/ayelen_guerra117",
          icon: ["fab", "hackerrank"]
        },
        {
          name: "Github",
          link: "https://github.com/ayelen117",
          icon: ["fab", "github"]
        },
        {
          name: "Email",
          link: "mailto:ayelen.guerra117@gmail.com",
          icon: ["fas", "envelope"]
        }
      ]
    };
  }
};
</script>
<style scoped lang="scss"></style>
