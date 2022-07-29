<template>
  <div class="blog">
    <div class="back-background"></div>
    <router-link to="/" tag="a" class="back t-body"
      ><div><img class="arrow" src="@/assets/arrow.svg" alt="arrow" /></div
    ></router-link>

    <div
      v-for="(section, index) in Object.keys(entries)"
      :key="index"
      class="group"
    ></div>
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

  .arrow {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }

  // .back-background {
  //   height: 2rem;
  //   background: #dfbfff;
  //   position: fixed;
  //   width: 50%;
  //   top: 0;
  //   left: 50%;
  // }
  .back {
    position: fixed;
    color: black;
    margin-left: -1rem;
    margin-top: -1rem;
    padding: 1rem;
    background: #dfbfff;
    margin-bottom: 5rem;
    display: inline-block;
    transition: transform 0.8s cubic-bezier(0.85, 0, 0.15, 1);
    transform-origin: top left;
  }

  .back:hover {
    transform: scale(1.5, 1);
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
      font-size: 1rem;
      line-height: 1.25rem;
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
      font-size: 1.5rem;
      font-weight: normal;
      font-style: italic;
      margin-bottom: 0rem;
      margin-block-start: 0;
    }

    // header

    h6 {
      font-family: "Xanh Mono", monospace;
      font-size: 6rem;
      line-height: 6rem;
      margin-left: 10rem;
      font-weight: normal;
      font-style: italic;
      margin-bottom: 0rem;
      margin-block-start: 0;
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
