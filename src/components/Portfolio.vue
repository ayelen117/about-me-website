<template>
  <b-row id="portfolio" class="section">
    <div class="container flex">
      <h1 class="title text-uppercase">Portfolio</h1>
      <div class="title-container">
        <div class="filters d-flex justify-content-center row">
          <div
            v-bind:key="filter"
            v-for="filter in filters"
            class="filter col"
            v-bind:class="{ active: currentFilter === filter }"
            v-on:click="setFilter(filter)"
          >
            {{ filter }}
          </div>
        </div>
      </div>

      <transition-group class="projects" name="projects">
        <!-- Image overlay card -->
        <div
          v-bind:key="project.title"
          v-for="project in filteredList"
          class="project"
          v-bind:style="{
            'background-image': 'url(' + imgPath + project.image + ')'
          }"
        >
          <!-- Content -->
          <div class="content">
            <div class="body">
              <h4 class="subtitle">
                <strong>{{ project.title }}</strong>
              </h4>
              <div class="languages">
                <span
                  v-for="language in project.languages"
                  :key="language"
                  class="badge badge-pill badge-light"
                  >{{ language }}</span
                >
              </div>
              <a class="btn" target="_blank" :href="project.url">Enter</a>
            </div>
          </div>
        </div>
      </transition-group>
    </div>
  </b-row>
</template>

<script lang="ts">
export default {
  name: "Portfolio",
  data() {
    return {
      imgPath: process.env.BASE_URL + "img/portfolio/",
      filters: [
        "ALL",
        "PHP",
        "C#",
        "ElectronJS",
        "VueJS",
        "HTML5",
        "CSS",
        // "MySQL",
        // "MongoDB",
        "Wordpress"
      ],
      currentFilter: "ALL",
      projects: [
        {
          title: "Multinexo",
          image: "multinexo.png",
          languages: ["PHP", "Laravel", "MySQL"],
          url: "https://multinexo.com/"
        },
        {
          title: "Saldo",
          image: "saldo.png",
          languages: ["Javascript", "HTML5", "CSS", "PHP"],
          url: "https://saldo.com.ar/"
        },
        {
          title: "Health Care For You Car",
          image: "HealthCareForYourCar.png",
          languages: ["Wordpress", "Javascript", "HTML5", "CSS"],
          url: "https://healthcareforyourcar.com"
        },
        {
          title: "Prestonwood Media Volunteers",
          image: "prestonwood.png",
          languages: [
            "PHP",
            "Laravel",
            "MySQL",
            "VueJS",
            "Typescript",
            "AWS",
            "MongoDB"
          ],
          url: "#"
        },
        {
          title: "AARP",
          image: "hc4yc.png",
          languages: ["PHP", "Laravel", "MySQL"],
          url: "https://aarp.livetech.events"
        },
        {
          title: "AARP Smart Driver TEK ",
          image: "smart-drivertek.png",
          languages: ["ElectronJS", "Javascript", "HTML5", "CSS"],
          url: "#"
        },
        {
          title: "Bitmovil",
          image: "bitmovil.png",
          languages: ["Javascript", "HTML5", "CSS"],
          url: "http://www.bitmovil.cl/" //https://www.linkedin.com/in/cristobalolave/detail/treasury/position:710781027/?entityUrn=urn%3Ali%3Afsd_profileTreasuryMedia%3A(ACoAAAjopcwBVT_7736Y3f_sTYfUQJ_fg0zR0nQ%2C1524834492572)&parentEntityUrn=urn%3Ali%3Afsd_profilePosition%3A(ACoAAAjopcwBVT_7736Y3f_sTYfUQJ_fg0zR0nQ%2C710781027)&section=position%3A710781027&treasuryCount=1&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BrX57%2Be8iQQel%2FPiuIViNgg%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_profile_view_base-treasury_thumbnail_cell
        },
        {
          title: "Control documentario",
          image: "control-documentario.png",
          languages: ["C#", "Microsoft SQL Server"],
          url: "https://controldocumentario.com"
        },
        {
          title: "PHP library for AFIP Web Services (Argentina)",
          image: "php-afip-ws.jpg",
          languages: ["PHP"],
          url: "https://github.com/multinexo/php-afip-ws/graphs/contributors"
        },
        {
          title: "Drivers for invoice/tickets fiscal printers",
          image: "pyfiscalprinter.jpg",
          languages: ["Python"],
          url: "https://github.com/multinexo/pyfiscalprinter"
        },
        {
          title: "MongoDB vs. MySQL",
          image: "tesis.png",
          languages: ["PHP", "MySQL", "MongoDB"],
          url: "https://github.com/ayelen117/mysql_vs_mongodb"
        }
        // {
        //   title: "telefe",
        //   image: "https://picsum.photos/g/200",
        //   languages: ["C#", "Microsoft SQL Server"],
        //   url: "https://controldocumentario.com"
        // },
        // {
        //   title: "donato app cocina loopback",
        //   image: "https://picsum.photos/g/200",
        //   languages: ["C#", "Microsoft SQL Server"],
        //   url: "https://controldocumentario.com"
        // }
      ],
      filteredProjects: []
    };
  },
  methods: {
    setFilter: function(filter: string) {
      this.currentFilter = filter;
    }
  },
  computed: {
    filteredList() {
      if (this.currentFilter == "ALL") {
        return this.projects;
      }
      return this.projects.filter(project => {
        return project.languages.includes(this.currentFilter);
      });
    }
  }
};
</script>
<style scoped lang="scss"></style>
