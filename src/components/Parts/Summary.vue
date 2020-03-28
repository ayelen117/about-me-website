<template>
  <div class="col-sm" id="summary">
    <div class="row image">
      <img
        src="http://ayelenguerra.com/wp-content/uploads/2019/10/IMG_0713-e1572169750136.jpg"
        class="img-fluid rounded mx-auto d-block"
        alt="Responsive image"
      />
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
      subtitle: "A bit about me",
      body:
        "Argentine software engineer. I am passionate about software, hiking and photography. Throughout my career, I have been organizing various software-related events, such as hackathons (including <a href='http://hackatec.github.io/'>Hackatec</a>) and different versions of Startup Weekend. I like to get out of my comfort zone and face challenges. I love to travel and know different cultures. Right now I'm working remotely on software projects."
    };
  }
};
</script>
<style scoped lang="scss"></style>
