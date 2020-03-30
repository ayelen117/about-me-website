<template>
  <div class="col-md" id="summary">
    <div class="row image">
      <div class="col">
        <img
          :src="imgPath"
          class="img-fluid mx-auto d-block"
          alt="Ayelen Guerra"
        />
      </div>
    </div>
    <div class="row">
      <div class="text">
        <h3 class="subtitle bold">{{ subtitle }}</h3>
        <p class="body" v-html="body"></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Summary",
  props: {},
  data() {
    return {
      imgPath: "/img/profile.png",
      subtitle: "A bit about me",
      body:
        "Argentine software engineer. I am passionate about software, hiking and photography. Throughout my career, I have been organizing various software-related events, such as hackathons (including <a href='http://hackatec.github.io/'>Hackatec</a>) and different versions of Startup Weekend. I like to get out of my comfort zone and face challenges. I love to travel and know different cultures. Currently I'm working remotely on software projects and leading the development team on  <a href='https://openventi.org/'>OpenVenti</a>, an open-source project focus on creating low-cost artificial respirators."
    };
  }
};
</script>
<style scoped lang="scss"></style>
