<template>

  <div id="app">
    <div>
     <intro/>
     


      <router-view/>

    </div>
  </div>

</template>
<style scoped>



#app {
  font-family: arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  max-width: 100vw;
  margin: 0 auto;
  font-size:1.25rem; 
  line-height:150%;
}

#app ::selection{
    background: #4BFFFF;
}

@media only screen and (max-width: 600px) {
 #app {
  line-height:140%;
 }

}



</style>
