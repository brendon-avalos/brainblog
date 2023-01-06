<template>
  <div id="app">
    <div>
      <intro />
      <transition name="fade">
        <router-view />
      </transition>
    </div>
  </div>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition-property: all;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

#app {
  font-family: "Xanh Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1e1a1a;
  max-width: 100vw;
  margin: 0 auto;
  font-size: 1.25rem;
  line-height: 150%;
}

a {
  text-decoration: none;
  color: inherit;
}
em {
  font-family: "Xanh Mono", monospace;
  font-style: normal;
  letter-spacing: 0rem;
}

.highlight {
  border: 1px red solid;
}

img,
svg {
  display: inline-block;
}

svg {
  display: inline-block;
}

.t-body {
  font-family: "Xanh Mono", monospace;
  font-size: 1.35rem;
  line-height: 1.6rem;
  font-weight: normal;
}

.t-text {
  font-family: "Xanh Mono", monospace;
  font-size: 0.9rem;
  line-height: 1.25rem;
  font-weight: normal;
}

.t-uppercase {
  text-transform: uppercase;
}

.t-italic {
  font-style: italic;
}

@media only screen and (max-width: 600px) {
  #app {
    line-height: 140%;
  }

  .t-body {
    font-family: "Xanh Mono", monospace;
    font-size: 1rem;
    line-height: 1.2rem;
    font-weight: normal;
  }

  .t-text {
    font-family: "Xanh Mono", monospace;
    font-size: 1rem;
    line-height: 1.2rem;
    font-weight: normal;
  }
}
</style>
