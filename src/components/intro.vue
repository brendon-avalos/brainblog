
<template> 
    <div class="intro-top">
      <div class="name"><img src="../assets/freework.svg"></div>
      <div class="yellowsquare"></div>
       <div class="about">[1] "Free work" is what you have to do to stay employable. [2] It also is something you have to do to understand your own craft. [3] This is a space for that understanding.</div>

   
 
  

<div class="scribble">
  <img>
   <svg height="546px" width="530px" viewBox="0 0 546 530">
     <path fill="none" stroke="#000" stroke-width="1" d="M500 335.5
                          L255.5 28.0002
                          C319 9 479.6 -31.3998 412 49.0002
                          C344.4 129.4 203 157 392 500.5
                          C105.5 58 59.8 31.4002 1 243">
    <animate 
             attributeName="d" 
             dur="8s" 
             repeatCount="indefinite"
             keyTimes="0;
                        0.3;
                       .35;
                       .7;
                       .75;
                       .95;
                       1"
             calcMode="spline" 
             keySplines=" 
                          0.85,0,0.15,1;
                          0.85,0,0.15,1;
                          0.85,0,0.15,1;
                          0.85,0,0.15,1;
                          0.85,0,0.15,1;
                          0.85,0,0.15,1"


             values="
                          M500 335.5
                          L255.5 28.0002
                          C319 9 479.6 -31.3998 412 49.0002
                          C344.4 129.4 203 157 392 500.5
                          C105.5 58 59.8 31.4002 1 243;

                           M500 335.5
                          L255.5 28.0002
                          C319 9 479.6 -31.3998 412 49.0002
                          C344.4 129.4 203 157 392 500.5
                          C105.5 58 59.8 31.4002 1 243; 

                                   
                          M165 41.5001
                          L83 390.5
                          C220.5 85.5 400.363 22.9276 296 11.0003
                          C-36.5 -26.9999 31.5 28 220.5 371.5
                          C-66 -71.0003 934.5 182.5 1 258;

                          M165 41.5001
                          L83 390.5
                          C220.5 85.5 400.363 22.9276 296 11.0003
                          C-36.5 -26.9999 31.5 28 220.5 371.5
                          C-66 -71.0003 934.5 182.5 1 258;
                                   
                          M14 79.5
                          L435.998 79.5
                          C227.999 193 -154.781 407 69.999 172
                          C301.325 -69.8442 475 -50.5001 495.5 203
                          C-169.5 509 979.5 -140.5 137.5 287.5;

                          M14 79.5
                          L435.998 79.5
                          C227.999 193 -154.781 407 69.999 172
                          C301.325 -69.8442 475 -50.5001 495.5 203
                          C-169.5 509 979.5 -140.5 137.5 287.5;


                          M500 335.5
                          L255.5 28.0002
                          C319 9 479.6 -31.3998 412 49.0002
                          C344.4 129.4 203 157 392 500.5
                          C105.5 58 59.8 31.4002 1 243


                          "/>
   
  </path>
</svg>
</img>


</div>
   



      <div class="animationcontainer">
      <div class="circle"></div>
   

      </div>
   
    
    </div>
</template>







<style scoped>


img, svg {
  display: inline-block;

}

svg {
  display: inline-block;
}

   .intro-top {
  cursor: url('../assets/book.png') 0 0, auto;
  width:50%;
  height:100vh;
  position:fixed;
  left:0;
  top:0;
  background-color:#FAF7EF;
  padding:1rem;
  box-sizing: border-box;
  display: flex;
  flex-flow: column wrap;
  justify-content:space-between;
  white-space: normal;
  border-right: 1px solid black;
  }


.scribbleanimate path {
  animation: morph 8s cubic-bezier(0.85, 0, 0.15, 1) infinite;
  } 


.about {
  font-family: 'Xanh Mono', monospace;
  text-transform: uppercase;
  font-size:1.5rem;
  line-height:2rem;
  }



.scribble{
  position: absolute;
  width:60%;
  top:40%;
  left:15%;
  z-index: 2;
  }



@keyframes morph {
 
  0%{
    d:path('M500 335.5L255.5 28.0002C319 9 479.6 -31.3998 412 49.0002C344.4 129.4 203 157 392 500.5C105.5 58 59.8 31.4002 1 243');
  }
  30%{
      d:path('M500 335.5L255.5 28.0002C319 9 479.6 -31.3998 412 49.0002C344.4 129.4 203 157 392 500.5C105.5 58 59.8 31.4002 1 243');
  }

  35%{
    d:path('M165 41.5001L83 390.5C220.5 85.5 400.363 22.9276 296 11.0003C-36.5 -26.9999 31.5 28 220.5 371.5C-66 -71.0003 934.5 182.5 1 258');
  }

  70%{
   d:path('M165 41.5001L83 390.5C220.5 85.5 400.363 22.9276 296 11.0003C-36.5 -26.9999 31.5 28 220.5 371.5C-66 -71.0003 934.5 182.5 1 258');
  }

  75%{

    d:path('M14 79.5L435.998 79.5C227.999 193 -154.781 407 69.999 172C301.325 -69.8442 475 -50.5001 495.5 203C-169.5 509 979.5 -140.5 137.5 287.5');
  
  }
 
    95%{

    d:path('M14 79.5L435.998 79.5C227.999 193 -154.781 407 69.999 172C301.325 -69.8442 475 -50.5001 495.5 203C-169.5 509 979.5 -140.5 137.5 287.5');
  
  }
    100%{
    d:path('M500 335.5L255.5 28.0002C319 9 479.6 -31.3998 412 49.0002C344.4 129.4 203 157 392 500.5C105.5 58 59.8 31.4002 1 243');
  }


}







img {
  width:100%;
}

.name {
  width:100%;
  filter: blur(2px);

}

.about {
  letter-spacing:0;

}





.animationcontainer {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width:50%;
  height:100%;
}




.circle{
  position:fixed;
  width:47vw;
  height:16vw;
  transform: rotate(-160deg);
  top:20%;
  margin:auto;
  border-radius: 100%;
  border: 1px solid black;
  animation: circleanimation 6s cubic-bezier(0.85, 0, 0.15, 1) infinite alternate;
  
}



@keyframes circleanimation {
  0%   {height:10vw;
        transform: rotate(-160deg);}



    100%   {height:25vw;
        transform: rotate(-150deg);}

}










.yellowsquare 
{
  position: absolute;
  top:25%;
  left:60%;
  width:20%;
  height:24%;
  background: #F1F43D;
  z-index: 1;
}






@media only screen and (max-width: 600px) {
   .intro-top {
    width:100%;
    height:50vh;
    position: fixed;
    z-index: -100;
       font-size: .85rem;
  }


}



</style>

