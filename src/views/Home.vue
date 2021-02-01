<template>
  <div class="home">

    <div class="sections">
     
      <div v-for="(section, index) in Object.keys(entries)" :key="index" class="group">
        <div class="title">latest exercises</div>
        
        <div class="section" v-for="entry in entries[section]" :key="entry.id">
          <div class="entry">
            <h3 @click="$router.push({name: entry.id})">
              {{entry.title}}   <div class="date">{{entry.date}}</div>
          </h3>
        
   
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
   background-color:#D7D9BF;



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
  font-weight:500;
}

h3 {
  color: black;
  font-size:1rem;
  font-weight: 500;
  cursor: pointer;
  margin:0;
  text-transform: uppercase;
  border: 1px solid transparent;



 
  &:hover {
    letter-spacing: .5rem;
       border: 1px solid black;
       box-sizing:border-box;
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
  margin-bottom: 5rem;
}


.title{
  margin-bottom: 5rem;
  font-size:1rem;
}

.group {
  padding:1rem;

}



@media only screen and (max-width: 600px) {
   .home {
    width:100%;
    min-height:50vh;
    position: relative;
    margin-top:50vh;
   

  }

  h3 {
  font-size:.9rem;
  }

  .date {
    opacity:1;
    font-size: .9rem;
    font-weight: 500;
  }

  .title{
  font-size:.9rem;
} 

}


</style>
