<template>
  <div id="app">
    <b-container fluid>
      <router-view />
    </b-container>
  </div>
</template>

<script lang="ts">
// TODO: move to file
// TODO: Solve Ts errors
//@ts-ignore
import JQuery from "jquery";
const $ = JQuery;

export default {};

$(document).ready(function() {
  document.addEventListener("touchstart", function() {}, true);
  // Get the header
  const header = document.getElementById("navbar");

  // Get the offset position of the navbar
  //@ts-ignore
  const sticky = header.offsetTop;
  function toStickNavbar() {
    if (window.pageYOffset > sticky) {
      //@ts-ignore
      header.classList.add("sticky");
    } else {
      //@ts-ignore
      header.classList.remove("sticky");
    }
  }
  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {
    toStickNavbar();
  };

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
});
</script>
<style lang="scss">
@import "@/assets/style/style.scss";
</style>
