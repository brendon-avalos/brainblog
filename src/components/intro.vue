
<template> 


<div class="intro-top">

      <div class="intro-image">
      </div>
    	<div class="marquee"> 
        <div class="message-box">
    <div class="message">
      ALWAYS BE FREE IT’S NOW OR NEVER DAWG.
    </div>
    <div class="message-copy">
     ALWAYS BE FREE IT’S NOW OR NEVER DAWG.
    </div>
    <div class="message-copy">
     ALWAYS BE FREE IT’S NOW OR NEVER DAWG.
    </div>
    <div class="message-copy">
     ALWAYS BE FREE IT’S NOW OR NEVER DAWG.
    </div>
   
  </div>
        

      </div>
    
    <div class="logo">
          <div class="free">
             <img src="../assets/free-logo.svg">
          </div>
         
          <div class="work">
            <img src="../assets/work.svg">
          </div>
    </div>
    <div class="footer">
      <div class="byline">
        <em>by</em> brendon avalos<br>
        Created In <em>2021</em>
      </div>
      <div class="title">
        "PLEASE be free"
      </div>
      
</div>



</div>
</template>







<style scoped>


em{
  font-family: 'Xanh Mono', monospace;
  font-style: normal; 
     letter-spacing: 0rem;
  }

img, svg {
  display: inline-block;

}

svg {
  display: inline-block;
}

   .intro-top {
        width:50%;
        height:100vh;
        position:fixed;
        background: rgb(75,255,255);
        background: linear-gradient(180deg, rgba(75,255,255,1) 70%, rgba(255,255,255,1) 100%);
        padding:1rem;
        box-sizing: border-box;
        }

  .intro-image {
        left:0;
        top:0;
        display: flex;
        width:50%;
        height:100%;
        justify-content: center;
        align-items: center;
        position: fixed;
        -moz-box-shadow: 0 0 30px 5px #999;
        -webkit-box-shadow: 0 0 30px 5px #999;

        }



  .logo{
    
        display: flex;
        flex-flow: column wrap;
        justify-content:space-between;
        height:100%;
  }

  .work {
        position: absolute;
        bottom:0;
        display: flex;
        justify-content: flex-end;
        margin-bottom:3rem;
        right:1rem;
        }


      .work img {
          width:90%;
        }


  .free {
        position: absolute;
        left:1rem;
        margin-top:3rem;
        width:90%;


        }



  .marquee {
        font-family: 'Xanh Mono', monospace;
        text-transform: uppercase;
        font-size:1.75rem;
        line-height:2rem;
        position: fixed;
        width:50%;
        left:0;
        top:1rem;
        overflow: hidden;

        }

.message-box {
        position: relative;
        display: flex;
        animation: marquee 10s linear infinite;
        }



.message {
        white-space: nowrap;
        width: 700px;
        text-align: center;
        margin-left:1rem;
        }

.message-copy {
 
  white-space: nowrap;
  width: 700px;
  text-align: center;
   margin-left:1rem;
}


@keyframes marquee {
  from { transform: translateX(0px) }
  to { transform: translateX(-700px) }
}



img   {
      width:100%;
      }


  .footer {
    left:0;
    position: absolute;
    padding:0rem 1rem 0rem 1rem;
    bottom:1rem;
    text-transform: uppercase;
    width:100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;

    }



  .byline{
    line-height: 1.25rem;
    letter-spacing: -.02rem;
    align-self: flex-end;
    }

  .title
    {
     font-family: Arial;
     letter-spacing: -1px;
     text-transform: uppercase;
     font-size: 1.75rem;
     align-self: flex-end;
    }






@media only screen and (max-width: 600px) {
   .intro-top {
    width:100%;
    height:90vh;
    position: fixed;
    z-index: -100;
    font-size: .85rem;
    border-right: 0px solid black;
  }


  .about {
  font-family: 'Xanh Mono', monospace;
  text-transform: uppercase;
  font-size:1.5rem;
  line-height:2rem;
  }



  .scribble{
  position: absolute;
  width:90%;
  bottom:0%;
  right:2vw;
  z-index: 2;
  }

  .yellowsquare 
{
  position: absolute;
  top:25%;
  left:50%;
  width:35%;
  height:35%;
  background: #F1F43D;
  z-index: 1;
}




  .animationcontainer {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height:100%;
}

.circle{
  position:fixed;
  width:94vw;
  height:16vw;
  transform: rotate(-160deg);
  top:20%;
  margin:auto;
  border-radius: 100%;
  border: 1px solid black;
  animation: circleanimation 6s cubic-bezier(0.85, 0, 0.15, 1) infinite alternate;
  
}


}


@media only screen and (min-width: 1024px) {
   
  #scribblepath {
    stroke-width:1.5;
  }
}
@media only screen and (min-width: 1200px) {
   
  #scribblepath {
  stroke-width:1;
  }
}


@media only screen and (min-width: 1600px) {
   
  #scribblepath {
  stroke-width:.8;
  }
}


</style>

