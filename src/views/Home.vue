<template>
  <div class="home">
    <div class="intro"></div>
    <div class="sections">
      <div v-for="(section, index) in Object.keys(entries)" :key="index" class="group">
        <div class="title"><h2 class="left">{{section}}</h2></div>
        <div class="section" v-for="entry in entries[section]" :key="entry.id">
          <div class="entry">
            <h3 @click="$router.push({name: entry.id})">
              {{entry.title}}
          </h3>
          <div class="date">{{entry.date}}</div>
          <div class="meta-data">
          <div class="tags">{{entry.tags}}</div>
          <div class="author">{{entry.author}}</div>
        </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BLOGENTRIES from '@/statics/data/blogs.json'

export default {
  name: 'home',
  computed: {
    entries() {
      return BLOGENTRIES
    }
  }
}
</script>
<style lang="scss" scoped>

.intro {
  width:50%;
  position:fixed;
}

.home {
  width:50%;
  float:right;
  margin-left:2rem;
  border-left: 1px solid rgba(0, 0, 0, 0.75);
  height:100vh;

}


.left {
  text-align: left;
}
.headline {
 
  text-transform: titlecase;
  margin: 1.5rem auto;
  font-size: 1rem;
  line-height:80%;
}
img {
  display: block;
  margin: 0 auto;
  width: 150px;
}

h2 {
  color: black;
  font-size:1rem;
  text-transform: capitalize;
  margin-bottom: 2rem;
  font-weight:300;
}

h3 {
  color: black;
  font-size:1rem;
  font-weight: 500;
  cursor: pointer;
  margin:0;
  text-transform: uppercase;

 
  &:hover {
    opacity:.5;
  }

  }

  .date {
    opacity:1;
    font-size: 1rem;
    margin-top: .4rem;
    font-weight: 300;
  }

p {
  margin-top: .4rem;
}



.section {
  margin-bottom: 6rem;
}


.title{
  margin-bottom: 6rem;
}

.group {
  padding-left:1rem;
  margin-bottom: 4rem;
}

</style>
