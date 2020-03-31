<template>
  <div id="main" class="row">
    <div class="col align-self-center">
      <h1 class="title">
        Hi! I am
        <span class="font-weight-bold secondary-color name">
          <br class="mobile-only-br" />Ayelen Guerra
        </span>
        <br />I'm software engineer
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
/*eslint @typescript-eslint/camelcase: "off"*/

// TODO: Solve Ts errorss
export default {
  name: "Main",
  mounted() {
    //@ts-ignore
    this.$nextTick(() => {
      //@ts-ignore
      this.initParticlesJS();
    });
  },
  methods: {
    initParticlesJS() {
      //@ts-ignore
      window.particlesJS(
        "main",
        {
          particles: {
            number: {
              value: 150,
              density: {
                enable: true,
                value_area: 1250
              }
            },
            color: {
              value: "#ffffff"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
              },
              polygon: {
                nb_sides: 6
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100
              }
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 125,
              color: "#ffffff",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 5,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 150,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
              },
              repulse: {
                distance: 200,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        },
        function() {
          console.log("callback - particles.js config loaded");
        }
      );
    }
  }
};
</script>

<style scoped lang="scss"></style>
