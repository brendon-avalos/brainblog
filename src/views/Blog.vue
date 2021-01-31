<template>

  <div class="blog">

      <router-link to="/" tag="a" class="back">< back</router-link>
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
   background-color:#FFE6CE;
   padding:1rem;
   overflow-x: hidden;
  box-sizing: border-box; 


  .back {
    background-color: #transparent;
    color: black;
    margin-bottom: 5rem;
    text-decoration: none;
    font-size:1rem;
    display: inline-block;
    transition: all .3s ease;
    &:hover {
      background-color: transparent;
      color: gray;
    }
  }
  /deep/ {

p {
  font-size:1rem;
}

    h1 {
    color: black;
    font-size:1rem;
    font-weight: 500;
    cursor: pointer;
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
      line-height: 1;
      text-transform: lowercase;
      


    }

  }
}
</style>
