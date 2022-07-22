<template>
  <div class="intro">
    <div class="container">
      <div class="header t-body">
        <div>a <span class="t-italic">curated</span></div>
        <div class="t-italic t-uppercase">
          collection <span class="t-uppercase t-italic"></span>
        </div>
        <div>for</div>
        <div><span class="t-uppercase t-italic">reimagining</span></div>
      </div>
      <div class="counter">
        <div class="reality t-body t-uppercase">
          <div class="quote1">
            <img src="@/assets/quote1.svg" alt="quote mark" />
          </div>
          <div class="text">reality</div>
          <div class="quote2">
            <img src="@/assets/quote2.svg" alt="quote mark" />
          </div>
        </div>
        <img src="@/assets/counter.svg" alt="counter" />
      </div>
      <div class="info">
        <div class="about t-text">
          <span class="t-uppercase t-italic t-body about-margin">About</span>
          "Counter Situations" is a collection of essays, articles & experiments
          that inspire us reimagine the present. The purpose of this "e-zine" is
          to offer ideas around imagining a different reality from the one we
          are prescribed. How can we move forward if we can't imagine what's
          next?
        </div>
        <div class="submit t-body">
          <div class="submit-space">
            <div><span class="t-uppercase t-italic">Submit</span></div>
            <div><img src="@/assets/arrow.svg" alt="arrow" /></div>
          </div>
          <div class="exercise-space">
            <div>an</div>
            <div><span class="t-uppercase">article</span></div>
          </div>
        </div>
      </div>
      <div class="situations">
        <img src="@/assets/situations.svg" alt="situations" />
        <div class="byline">
          <div class="t-body title">
            an <span class="t-uppercase t-italic">E-Zine</span> by
          </div>
          <div class="t-body t-uppercase text">Brendon Avalos</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.intro {
  width: 50%;
  height: 100vh;
  position: fixed;
  background: #1e1a1a;
  padding: 1rem;
  box-sizing: border-box;
  color: white;
}

::selection {
  background: #e6ff4d;
  color: #1e1a1a;
}

.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  gap: 1%;
  box-sizing: border-box;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.counter {
  flex-grow: 1;
  width: 100%;
}

.counter img {
  height: 0;
  width: 100%;
  min-height: 100%;
}

.reality {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  padding: 30px;
  box-sizing: border-box;
  width: 28%;
  height: 18%;
  right: 8vw;
}

.reality img {
  height: 100%;
}

.reality .quote1 {
  align-self: flex-start;
}

.reality .text {
  align-self: center;
  transform: rotate(-25deg);
}

.reality .quote2 {
  align-self: flex-end;
}

.info {
  display: flex;
  flex-direction: row;
  gap: 2%;
  justify-content: space-between;
}

.about {
  width: 70%;
  padding: 10px;
  border: 1px white solid;
  border-radius: 10px;
  box-sizing: border-box;
}

.about-margin {
  margin-right: 40px;
}

.submit {
  background: #e6ff4d;
  color: #1e1a1a;
  width: 30%;
  display: flex;
  gap: 5%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50% / 50%;
  transform: rotate(0deg);
  transition: all 0.8s cubic-bezier(0.85, 0, 0.15, 1);
}

.submit:hover {
  transform: rotate(-20deg) scale(1.2, 0.8);
}

.submit-space {
  display: flex;
  justify-content: space-between;
  width: 70%;
}

.exercise-space {
  display: flex;
  justify-content: space-between;
  width: 70%;
}

.situations {
  flex-grow: 1;
  width: 100%;
}

.situations img {
  height: 0;
  width: 100%;
  min-height: 100%;
}

.byline {
  position: absolute;
  width: 30%;
  height: 8%;
  bottom: 2%;
  left: 16.8vw;
  display: flex;
  flex-direction: column;
  gap: 10%;
  justify-content: flex-end;
}

.byline .title {
  align-self: flex-start;
}

.byline .text {
  align-self: flex-end;
}

@media only screen and (max-width: 800px) {
  .intro {
    width: 100%;
    height: 93vh;
    position: fixed;
    background: #1e1a1a;
    padding: 1rem;
    box-sizing: border-box;
    color: white;
  }

  .container {
    gap: 1rem;
  }

  .info {
    flex-direction: column;
    gap: 1rem;
  }

  .about {
    width: 100%;
  }
  .submit {
    width: 100%;
    height: 5rem;
    padding: 0 3rem;
    flex-direction: row;
    box-sizing: border-box;
  }
}
</style>
