<template>
  <div class="home">
    <div class="about t-body t-uppercase">
      <div>Index</div>
    </div>
    <div class="sections">
      <div
        v-for="(section, index) in Object.keys(entries)"
        :key="index"
        class="group"
      >
        <div class="section" v-for="entry in entries[section]" :key="entry.id">
          <div class="entry" @click="$router.push({ name: entry.id })">
            <div class="index t-text t-uppercase">[{{ entry.index }}]</div>
            <div class="headline t-text">{{ entry.title }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer t-text">
      Inspired from reading Marshal Mccluhans “The Medium is the Massage” as
      well as the continuous curiousity of Ellis Marte. This website uses
      Feeeeeels Fuzzy by Jack Fahrenstock and Xanh Mono by YELLOW TYPE. It was
      coded in Vue using a project by JOSEPH HARVEY ANGELES as the framework.
    </div>

    <div class="colophon" :class="{ active: colophonSwitch }">
      <div class="close" @click="colophonSelected('close')">
        <em>(CLOSE)</em>
      </div>
      "Free work" is set in Xanh Mono and arial. This site was designed and
      developed by brendon avalos. It was based off a vue blog using markdown by
      joseph harvey angeles.
    </div>
  </div>
</template>

<script>
import BLOGENTRIES from "@/statics/data/blogs.json";

export default {
  name: "home",
  computed: {
    entries() {
      return BLOGENTRIES;
    },
  },

  methods: {
    colophonSelected(state) {
      if (state === "open") {
        if (this.colophonSwitch === false) {
          this.colophonSwitch = true;
        }
      } else if (state === "close") {
        this.colophonSwitch = false;
      }
    },
  },

  data() {
    return {
      colophonSwitch: false,
    };
  },
};
</script>
<style lang="scss" scoped>
::selection {
  background: #e6ff4d;
  color: #1e1a1a;
}

.about {
  box-sizing: border-box;
  padding: 1rem;
  background: #e6ff4d;
}

.colophon {
  display: none;
  position: fixed;
  background: black;
  color: white;
  bottom: 1rem;
  right: 1rem;
  width: 20rem;
  text-transform: uppercase;
  line-height: 1.25rem;
  font-size: 1.25rem;
  padding: 1rem;
}

.home {
  width: 50%;
  box-sizing: border-box;
  float: right;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.sections {
  margin-top: 0;
}

.section {
  width: 100%;
}

.group {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
}

.entry {
  display: flex;
  padding: 0.25rem 1rem;
  gap: 1em;

  &:hover {
    background: linear-gradient(
      0deg,
      rgba(230, 270, 77, 1) 100%,
      rgba(230, 270, 77, 1) 100%
    );
    cursor: pointer;
  }
}

.section:nth-child(even) {
  background: #f4f4f4;
}

.footer {
  position: absolute;
  left: 50%;
  width: 50%;
  bottom: 0;
  background: #d9cfc1;
  box-sizing: border-box;
  padding: 1rem;
}

@media only screen and (max-width: 800px) {
  .home {
    width: 100%;
    min-height: 50vh;
    position: relative;
    margin-top: 93vh;
  }

  .footer {
    position: relative;
    margin-top: 2rem;
    width: 100%;
    left: 0%;
  }

  .sections {
    margin-top: 1rem;
  }
}
</style>
