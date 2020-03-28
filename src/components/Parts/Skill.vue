<template>
  <div class="col-sm skill">
    <div class="shape-wrap">
      <div class="shape">
        <font-awesome-icon :icon="icon" />
      </div>
    </div>
    <div class="text">
      <h3 class="subtitle bold">{{ subtitle }}</h3>
      <p class="body">{{ body }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Skill",
  props: { subtitle: String, body: String, icon: String }
};
</script>
<style scoped lang="scss"></style>
