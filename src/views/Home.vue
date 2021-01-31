<template>
  <div class="home">

    <div class="intro-top">
      <div class="name">free exercise</div>
      <div class="about">(1)free exercise is a space for open anonymous writing exercises. (2) it was created in effort to get better at the act of writing. (3) everyone is invited. you can find out how to add your own post here.</div>

    </div>
     <div class="intro-bottom">
      <div class="draw">draw here</div>
      <canvas id="simple_sketch" width="1000" height="1000"></canvas>

    </div>
    <div class="sections">
      <div v-for="(section, index) in Object.keys(entries)" :key="index" class="group">
       
      
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

 $(function() {
    $('#simple_sketch').sketch();
  });

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

.intro-top {
  width:50%;
  height:50vh;
  position:fixed;
  letter-spacing: 4rem;
  left:0;
  top:0;
  font-size:1rem;
  background-color:#FFCFA3;
  padding:1rem;
  box-sizing: border-box;
  display: flex;
  flex-flow: column wrap;
  justify-content:space-between;
}


.draw {
  padding:1rem;
  position:absolute;
  bottom:0;
  color:gray;

}


.intro-bottom {
  width:50%;
  bottom:0;
  height:50vh;
  position:fixed;
  left:0;
  font-size:1rem;
  background-color:#ffffff;
  box-sizing: border-box; 
  overflow: hidden; 

}

.home {
  width:50%;
  float:right;
   background-color:#FFE6CE;
 
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
  letter-spacing: 0rem;
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
  padding:1rem;

}


.about {
  letter-spacing:0;

}

.about-title {
  margin-bottom:2rem;
}

</style>
