<template>
  <div class="blog">
    <div class="back-background"></div>
    <router-link to="/" tag="a" class="back">BACK TO INDEX</router-link>
    <div class="fakeback"></div>

    <div
      v-for="(section, index) in Object.keys(entries)"
      :key="index"
      class="group"
    >
      <div
        class="section"
        v-for="entry in entries[section]"
        :key="entry.id"
      ></div>
    </div>
    <router-view />
  </div>
</template>

<script>
// allow me to play with blogs.json data
import BLOGENTRIES from "@/statics/data/blogs.json";

export default {
  name: "blog",
  computed: {
    entries() {
      return BLOGENTRIES;
    },
  },
};
</script>

<style lang="scss" scoped>
.blog {
  width: 50%;
  float: right;
  background-color: #f4f4f4;
  padding: 1rem;
  overflow-x: hidden;
  min-height: 100vh;
  box-sizing: border-box;

  .fakeback {
    position: relative;
    color: black;
    margin-bottom: 5rem;
    text-decoration: none;
    font-size: 1rem;
    display: inline-block;
    visibility: hidden;
  }

  .back-background {
    position: fixed;
    width: 50%;
    height: 4rem;
    top: 0;
    right: 0;
    background-color: transparent;
  }
  .back {
    position: fixed;
    color: black;
    margin-bottom: 5rem;
    line-height: 2rem;
    text-decoration: none;
    display: inline-block;
    font-size: 1rem;
    border: 1px solid transparent;
    font-family: Arial;
    letter-spacing: -1px;
    text-transform: uppercase;
    font-size: 1.75rem;
  }

  svg path {
    fill: none;
    stroke: #000;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: 0.2s;
  }

  /deep/ {
    ::selection {
      background: #e6ff4d;
      color: #1e1a1a;
    }

    img {
      max-width: 100%;
      min-width: 100%;
    }

    p {
      font-family: "Xanh Mono", monospace;
      font-size: 1.5rem;
      line-height: 1.75rem;
      font-weight: normal;
    }

    code {
      font-family: "Xanh Mono", monospace;
      text-transform: uppercase;
    }

    ul {
      font-size: 1rem;
      padding-inline-start: 1rem;
    }

    ol {
      font-size: 1rem;
      padding-inline-start: 2rem;
    }

    h1 {
      font-family: "Xanh Mono", monospace;
      text-transform: uppercase;
      font-size: 1.5rem;
      text-decoration: underline;
      font-weight: normal;
      margin-bottom: 0rem;
      margin-block-start: 0;
    }

    h4 {
      font-family: "Xanh Mono", monospace;
      text-transform: uppercase;
      font-size: 1rem;
      margin-bottom: 0;
      margin-left: 6rem;
      font-weight: 300;
      margin-top: 3rem;
    }
    pre {
      font-family: "Xanh Mono", monospace;
      text-transform: uppercase;
      font-size: 1.75rem;
      font-weight: normal;
      width: 40%;
      padding: 1rem 1rem;
      float: right;
      white-space: normal;
      height: auto;
      line-height: 1;
      text-transform: lowercase;
      border: 1px solid black;
      margin-left: 1rem;
    }
  }
}

@media only screen and (max-width: 800px) {
  .blog {
    width: 100%;
    min-height: 50vh;
    position: relative;

    .back {
      font-size: 0.85rem;
    }

    /deep/ {
      p {
        font-family: "Xanh Mono", monospace;
        font-size: 1rem;
        line-height: 1.2rem;
        font-weight: normal;
      }
      ul {
        font-size: 0.85rem;
        padding-inline-start: 1rem;
      }
      ol {
        font-size: 0.85rem;
        padding-inline-start: 2rem;
      }

      h1 {
        font-family: "Xanh Mono", monospace;
        text-transform: uppercase;
        font-size: 1.5rem;

        font-weight: normal;
      }
      h4 {
        font-size: 0.85rem;
      }

      pre {
        font-family: "Xanh Mono", monospace;

        display: block;
        font-size: 1.5rem;
        width: 50%;
        margin: 1rem;
        padding-left: 1rem;
        white-space: normal;
        height: auto;
        line-height: 1.3;
        text-transform: lowercase;
      }
    }
  }
}
</style>
