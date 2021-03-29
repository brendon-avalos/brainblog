<template>
  <div class="home">

     
    <div class="sections">
     
      <div v-for="(section, index) in Object.keys(entries)" :key="index" class="group">
   
        
        <div class="section" v-for="entry in entries[section]" :key="entry.id">
         
            <div class="entry" @click="$router.push({name: entry.id})"><div class="headline">
              {{entry.title}} </div> <div class="date">{{entry.date}}</div>
          
   
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
  box-sizing:border-box;
  float:right;
  background-color:#fff;
  padding:1rem;
}


.left {
  text-align: left;
}
.headline {
  font-family: 'Xanh Mono', monospace;
  text-transform: uppercase;
  font-size: 1rem;

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
  font-size:.85rem;
  line-height: 1rem;
  font-weight: 500;
  cursor: pointer;
  margin:0;
   display: inline-block;
  letter-spacing: .01rem;
  text-transform: uppercase; 

  }

  .date {
    opacity:1;
    font-size: .85rem;
    font-weight: 300;
    text-transform: lowercase;
  }

p {
  font-size: .85rem;
  margin-top: .4rem;
}





.title{
  margin-bottom: 1rem;
  font-size:1rem;
}

.group{
  
  width:100%;
  display:flex;
  flex-wrap: wrap;

}

.entry{
   font-size: .85rem;
    border: 1px solid black;
    padding:1rem;
    flex-grow: 4;
    transition-duration: .35s;
    margin-left:-1px;
    margin-bottom:-1px;


  &:hover{
      letter-spacing: .25rem;
       background-color:#F3DFFF;
       cursor:pointer;
  }
}




@media only screen and (max-width: 600px) {
   .home {
    width:100%;
    min-height:50vh;
    position: relative;
    margin-top:50vh;
   

  }

  h3 {
  font-size:.85rem;

  }

  .date {
    opacity:1;
    font-size: .85rem;
    font-weight: 500;
  }

  .title{
  font-size:.85rem;
} 

}


</style>
