<template>

  <div id="app">
    <div>
     <intro/>
     


      <router-view/>
       <draw/>
    </div>
  </div>

</template>
<style scoped>



#app {
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  max-width: 100vw;
  margin: 0 auto;
  font-size:1rem; 
  line-height:130%;
}



@media only screen and (max-width: 600px) {
 #app {
  line-height:160%;
 }

}



</style>
