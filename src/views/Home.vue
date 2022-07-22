<template>
  <div class="home">
    <div class="about">
      <div class="t-body">Index</div>
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

    <div class="colophon t-body" :class="{ active: colophonSwitch }">
      <div class="close t-italic" @click="colophonSelected('close')">
        View Credits
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
  height: 50vh;
  padding: 1rem 1rem 0.5rem 1rem;
  background: #dfbfff;
}

.colophon {
  position: fixed;
  background: #e6ff4d;
  color: #1e1a1a;
  bottom: -20rem;
  right: 0rem;
  padding: 2rem 10rem 10rem 10rem;
  width: 50vw;
  text-align: center;
  display: none;
  min-height: 20vh;
  gap: 4rem;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 50% / 50%;
  box-sizing: border-box;
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
  transition: all 0.8s cubic-bezier(0.85, 0, 0.15, 1);

  &:hover {
    padding-left: 4rem;
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
  display: none;
  position: fixed;
  left: 50%;
  width: 50%;
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

  .about {
    padding: 1rem;
    height: 25vh;
  }

  .sections {
    height: 25vh;
  }

  .footer {
    position: relative;
    margin-top: 2rem;
    width: 100%;
    left: 0%;
  }
}
</style>
