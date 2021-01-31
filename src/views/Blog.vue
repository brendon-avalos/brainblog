<template>

  <div class="blog">

      <router-link to="/" tag="a" class="back">< back</router-link>
      <div v-for="(section, index) in Object.keys(entries)" :key="index" class="group">
      <div class="section" v-for="entry in entries[section]" :key="entry.id">
      <div class="image">{{entry.image}}</div>
      </div>
      </div>
      <router-view />
  
  </div>
</template>


<script>
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
    margin-bottom:6rem;
    margin-top:0rem;

    }
    pre {
      overflow-x: auto;
      background-color: transparent;
     border: 1px solid black ;
      border-radius: .3rem;
      padding:  2rem  .3rem;
    }
    img {
      max-width: 100%;
    }
  }
}
</style>
