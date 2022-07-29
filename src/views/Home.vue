<template>
  <div class="home">
    <div>
      <div class="about">
        <div class="t-body">Index</div>
      </div>
      <div class="sections">
        <div
          v-for="(section, index) in Object.keys(entries)"
          :key="index"
          class="group"
        >
          <div
            class="section"
            v-for="entry in entries[section]"
            :key="entry.id"
          >
            <div class="entry" @click="$router.push({ name: entry.id })">
              <div class="index t-body">[{{ entry.index }}]</div>
              <div class="headline t-body">{{ entry.title }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="marquee">
      <div class="marquee-text t-text">
        "Counter Situations" is set in Xanh Mono by Yellow Type Foundry &
        Feeeels Fuzzy by Jack Fahnestock. This site was designed and developed
        by Brendon Avalos & based off a vue blog using markdown by Joseph Harvey
        Angeles.
      </div>
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
  padding: 0.25rem 1rem;
  background: #dfbfff;
  display: flex;
  align-items: flex-end;
}

.home {
  width: 50%;
  box-sizing: border-box;
  float: right;
  background-color: #e6ff4d;
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
    cursor: pointer;
  }
}

.section:nth-child(even) {
  background: #f4f4f4;
}

.section:nth-child(odd) {
  background: #fff;
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

// marquee

@keyframes marquee-text {
  0% {
    margin-left: 50vw;
    transform: translateX(0%);
  }
  100% {
    margin-left: 0;
    transform: translateX(-100%);
  }
}

.marquee {
  background: #e6ff4d;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  height: auto;
}

.marquee-text {
  animation: marquee-text 30s linear infinite;
  display: inline-block;
  white-space: nowrap;
  width: fit-content;
  padding: 0;
}

.marquee-text:hover {
  animation-play-state: paused;
}

.text-styling {
  background-color: lightblue;
  padding: 1em;
}

@media only screen and (max-width: 800px) {
  .home {
    width: 100%;
    height: 100vh;
    justify-content: space-between;
    position: relative;
    margin-top: calc(100vh - 1.7rem);
  }

  .about {
    align-items: flex-start;
  }

  .marquee {
    position: relative;
    bottom: 0;
  }

  @keyframes marquee-text {
    0% {
      margin-left: 100vw;
      transform: translateX(0%);
    }
    100% {
      margin-left: 0;
      transform: translateX(-100%);
    }
  }
}
</style>
