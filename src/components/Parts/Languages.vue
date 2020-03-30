<template>
  <div class="col-md" id="languages">
    <div v-for="language in languages" :key="language.name" class="language">
      <div class="name">
        <span>{{ language.name }}</span>
      </div>
      <div class="progress">
        <div
          class="progress-bar"
          role="progressbar"
          :style="'width: ' + language.progress + '%;'"
          :aria-valuenow="language.progress"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {{ language.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Languages",
  props: {},
  data: function() {
    return {
      languages: [
        {
          name: "PHP",
          progress: 85,
          label: "Advanced"
        },
        {
          name: "VueJs",
          progress: 80,
          label: "Advanced"
        },
        {
          name: "MySQL",
          progress: 80,
          label: "Advanced"
        },
        {
          name: "MongoDB",
          progress: 80,
          label: "Advanced"
        },
        {
          name: "C#",
          progress: 70,
          label: "Intermediate"
        },
        {
          name: "Javascript",
          progress: 65,
          label: "Intermediate"
        },
        {
          name: "NodeJs",
          progress: 60,
          label: "Intermediate"
        }
        // {
        //   name: "jQuery",
        //   progress: 80
        // },
      ]
    };
  }
};
</script>
<style scoped lang="scss"></style>
