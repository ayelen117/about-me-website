<template>
  <b-row id="about" class="section">
    <div class="container flex">
      <h1 class="title text-uppercase">About me</h1>
      <div id="skills" class="row">
        <Skill
          v-for="skill in skills"
          :key="skill.subtitle"
          :subtitle="skill.subtitle"
          :body="skill.body"
          :icon="skill.icon"
        />
      </div>
      <div class="row main">
        <Summary />
        <Languages />
      </div>
    </div>
  </b-row>
</template>

<script lang="ts">
import Skill from "@/components/Parts/Skill.vue";
import Summary from "@/components/Parts/Summary.vue";
import Languages from "@/components/Parts/Languages.vue";

export default {
  name: "About",
  components: {
    Skill,
    Summary,
    Languages
  },
  data: function() {
    return {
      skills: [
        {
          subtitle: "Problem solver",
          body:
            "My job is not only to code, is to face challenges and analyse how to solve them as optimal as possible.",
          icon: "puzzle-piece"
        },
        {
          subtitle: "Teamworker",
          body:
            "Collaboration, coordination and good communication are factors that I consider essential when I  work in a team..",
          icon: "users"
        },
        {
          subtitle: "Clean coder",
          body:
            "I am always focused on create clean code that allow making the project understandable and scalable.",
          icon: "broom"
        }
        // {
        //   subtitle: "Dynamic",
        //   body:
        //     "Websites don't have to be static, I love making pages come to life.",
        //   icon: "user-secret"
        // }
      ]
    };
  }
};
</script>
<style scoped lang="scss"></style>
