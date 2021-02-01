<template>

  <div class="blog">
      <div class="back-background"></div>
      <router-link to="/" tag="a" class="back">< index</router-link>
      <div class="fakeback">< idsadslkajdjklsax</div>
      <div v-for="(section, index) in Object.keys(entries)" :key="index" class="group">
      <div class="section" v-for="entry in entries[section]" :key="entry.id">


      </div>
      </div>
      <router-view />
       
  </div>
</template>


<script>

// allow me to play with blogs.json data
import BLOGENTRIES from '@/statics/data/blogs.json'


export default {
  name: 'blog',
  computed: {
    entries() {
      return BLOGENTRIES
    }
  }
}

</script>





<style lang="scss" scoped>
.blog {
  
   width:50%;
   float:right;
   background-color:#EEE;
   padding:1rem;
   overflow-x: hidden;
   min-height:100vh;
    box-sizing: border-box; 


.fakeback {
    position:relative;
    color: black;
    margin-bottom: 3rem;
    text-decoration: none;
    font-size:1rem;
    display: inline-block;
    visibility: hidden;
    transition: all .3s ease;
}

.back-background {
    position:fixed;
       width:100%;
    height:3rem;
    top:0;
     background-color: #EEE;
}
  .back {
    position:fixed;
    color: black;
    margin-bottom: 3rem;
    text-decoration: none;
    font-size:1rem;
   
 
    &:hover {
     letter-spacing: .5rem;
    
    }
  }
  /deep/ {

p {
  font-size:1rem;
      margin-block-start: 2em;
    margin-block-end: 0em;
  
}

ul {
  font-size:1rem;
  padding-inline-start: 1rem;
}

ol {
  font-size:1rem;
  padding-inline-start: 2rem;
}

    h1 {
    color: black;
    font-size:1rem;
    font-weight: 500;

    margin:0;
    text-transform: uppercase;

    }
    h4 {
    opacity:1;
    font-size: 1rem;
    font-weight: 300;
    text-transform: lowercase;
    margin-bottom:3rem;
    margin-top:0rem;

    }
    pre {
      font-style: italic;
      display: inline-block;
      font-size:1.5rem;
      width:40%;
      padding:1rem 2rem;
      float:left;
      white-space: normal; 
      height:auto;
      line-height: 1.25;
      text-transform: lowercase;
      


    }

  }
}

@media only screen and (max-width: 600px) {
   .blog {
    width:100%;
    min-height:50vh;
    position: relative;


    .back {
      font-size:.9rem;
    }
    
     /deep/ {


      p {
  font-size:.9rem;
  
    } 
    ul {
  font-size:.9rem;
  padding-inline-start: 1rem;
}
ol {
  font-size:.9rem;
  padding-inline-start: 2rem;
}

    h1 {

    font-size:.9rem;
  

    }
    h4 {
  
    font-size: .9rem;
 
    }

    pre {
      font-style: italic;
      display: block;
      font-size:1.1rem;
      width:50%;
      margin:0;
      padding-left: 0rem;
      white-space: normal; 
      height:auto;
      line-height: 1.3;
      text-transform: lowercase;
      

    }
  }
   
  }
}
</style>
