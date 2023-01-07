<template>
  <div class="home">
    <div>
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
            <a v-bind:href="[entry.link]" target="_blank">
              <div class="entry">
                <!-- Add to entry for "blog functionality" 
                @click="$router.push({ name: entry.id })" -->
                <!-- <div class="index t-title">{{ entry.index }}</div> -->
                <div class="entry-info">
                  <div class="title t-title t-uppercase">
                    {{ entry.title }}
                  </div>
                </div>
                <div class="author t-text ">
                  {{ entry.author }}
                </div>
                <div class="excerpt t-text">
                  {{ entry.excerpt }}
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="marquee">
      <div class="marquee-text t-text">
        "Counter Situations" uses Xanh Mono by Yellow Type Foundry & Feeeels
        Fuzzy by Jack Fahnestock. This site was designed and developed by
        Brendon Avalos & based off a vue blog using markdown by Joseph Harvey
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
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-image: url(../assets/background.svg);
  background-attachment: fixed;
  background-size: contain;
  background-repeat: no-repeat, repeat;
  background-position: bottom right;
  padding-bottom: 1.9rem;
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
  padding: 0.5rem 1rem 0.5rem 1rem;
  flex-direction: row;
  justify-content: space-between;
  gap: 1em;
  transition: all 0.1s cubic-bezier(0.85, 0, 0.15, 1);
  border-bottom: 0.5px solid;
  min-height: 15rem;

  &:hover {
    cursor: pointer;
    background-color: #e6ff4d;
  }

  &:hover > .entry-info {
    // padding-left: 6rem;
  }
}

.entry-info {
  display: flex;
  flex-direction: column;
  transition: all 0.8s cubic-bezier(0.85, 0, 0.15, 1);
}

.title {
  max-width: 18rem;
  min-width: 18rem;
}

.author {
  min-width: 10rem;
  max-width: 10rem;
}

.excerpt {
  max-width: 14rem;
}

// marquee

@keyframes marquee-text {
  0% {
    margin-left: 50%;
    transform: translateX(0%);
  }
  100% {
    margin-left: 0;
    transform: translateX(-100%);
  }
}

.marquee {
  background: #dfbfff;
  overflow: hidden;
  position: fixed;
  bottom: 0rem;
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

@media only screen and (max-width: 800px) {
  .home {
    width: 100%;
    min-height: 100vh;
    position: relative;
    margin-top: calc(100vh);
    justify-content: flex-start;
    padding-bottom: 0;
  }

  .about {
    align-items: flex-start;
  }

  .entry {
    flex-direction: column;
    justify-content: flex-start;
    min-height: 10rem;
    gap: 0;
  }

  .title {
    max-width: 70%;
    min-width: 70%;
    padding-bottom: 0.25rem;
  }

  .author {
    min-width: 70%;
    max-width: 70%;
    padding-bottom: 1rem;
  }

  .excerpt {
    max-width: 70%;
  }

  .marquee {
    position: relative;
  }

  @keyframes marquee-text {
    0% {
      margin-left: 100%;
      transform: translateX(0%);
    }
    100% {
      margin-left: 0;
      transform: translateX(-100%);
    }
  }
}
</style>
