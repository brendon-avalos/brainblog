<template>
  <div class="home">

     
    <div class="sections">
     
      <div v-for="(section, index) in Object.keys(entries)" :key="index" class="group">
   
        
        <div class="section" v-for="entry in entries[section]" :key="entry.id">
         
            <div class="entry" @click="$router.push({name: entry.id})">
              <div class="date">{{entry.date}}</div>
              <div class="headline">{{entry.title}} </div> 
          
   
        </div>
          </div>
        </div>
      </div>


      <div class="about">
        "FREE WORK" <em>IS AN ONLINE SPACE FOR CREATIVE EXERCISES AROUND WRITING AND DESIGN. THE GOAL IS TO TAKE AWAY THE BOUNDARIES OF STRESS, MONEY, OR TIMELINES AND TO CREATE FREElY. IT’s STILL WORK BUT HOPEFULLY IT FEELS A BIT MORE FREEING.(VIEW COLOPHON)</em>
    </div>



      <div class="colophon"><div><em>(CLOSE)</em></div>"Free work" is set in Xanh Mono and arial. This site was designed and developed by brendon avalos. It was based off a vue blog using markdown by joseph harvey angeles.</div>
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


em{
  font-family: 'Xanh Mono', monospace;
  font-style: normal; 
  letter-spacing: 0rem;
  }

.about {
  line-height: 1.25rem;
  letter-spacing: -.02rem;
}


.colophon {
  display: none;
  position:fixed;
  background:black;
  color:white;
  bottom:1rem;
  right:1rem;
  width:20rem;
  text-transform: uppercase;
  line-height: 1.25rem;
  font-size:1.25rem;
  padding:1rem;
}

.sections{

}

.home {
  width:50%;
  height:100vh;
  box-sizing:border-box;
  float:right;
  background-color:#EDEDED;
  padding:1rem;
  display: flex;
  justify-content: space-between;
   flex-direction:column;
}


.left {
  text-align: left;
}



.headline {
  font-family: Arial;
  letter-spacing: -1px;
  text-transform: uppercase;
  font-size: 1.75rem;

}
img {
  display: block;
  margin: 0 auto;
  width: 150px;
}

h2 {
  color: black;
  font-size:1.5rem;
 letter-spacing: -1px;
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
    font-family: 'Xanh Mono', monospace;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 300;
    margin-bottom:.5rem;

  }



p {
  font-size: .85rem;
  margin-top: .4rem;
}





.title{
  margin-bottom: 1rem;
  font-size:1.5rem;
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
    transition-duration: 10s;
    margin-left:-1px;
    margin-bottom:-1px;


  &:hover{
     
      background: rgb(75,255,255);
background: linear-gradient(0deg, rgba(75,255,255,1) 0%, rgba(255,255,255,0) 100%);
       cursor:pointer;
  }
}




@media only screen and (max-width: 600px) {
   .home {
    width:100%;
    min-height:50vh;
    position: relative;
    margin-top:90vh;
  border-top: 1px solid black; 

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
