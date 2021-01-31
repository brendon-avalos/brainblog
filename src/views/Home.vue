<template>
  <div class="home">

    <div class="sections">
      <div v-for="(section, index) in Object.keys(entries)" :key="index" class="group">
       
      
        <div class="section" v-for="entry in entries[section]" :key="entry.id">
          <div class="entry">
            <h3 @click="$router.push({name: entry.id})">
              {{entry.title}}
          </h3>
          <div class="date">{{entry.date}}</div>
   
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








.home {
  width:50%;
  float:right;
   background-color:#FFE6CE;


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
    font-weight: 300;
    text-transform: lowercase;
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
