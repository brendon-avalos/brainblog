
<template> 
    <div class="intro-top">
      <div class="name">

      <div class="free">free</div><div class="exercise">exercise</div>
     
      </div>
      <div class="about">(1) free exercise is a space for writing exercises. (2) it was created in effort to improve my writing skills. (3) get in touch if you would like to contribute or publish on this space. avalos.brendon@gmail.com</div>
    </div>
</template>
<style scoped>
   .intro-top {

  cursor: url('../assets/book.png') 0 50, auto;
  width:50%;
  height:50vh;
  position:fixed;
  left:0;
  top:0;
  font-size:1rem;
  background-color:#E7E8D9;
  padding:1rem;
  box-sizing: border-box;
  display: flex;
  flex-flow: column wrap;
  justify-content:space-between;
   white-space: normal; 
}

.about {
  letter-spacing:0;

}

.logo {
  position: absolute;
  padding:1rem;
  top:0;
  left:0;


  }

    img {
     width:20px;
  height:20px;

}



.free {
  letter-spacing: 3rem;
  word-break: break-all;
    border: 1px solid transparent;
}


.free:hover{
  letter-spacing: 1rem;
   border: 1px solid black;
}

.exercise{
  letter-spacing: 3rem;
  word-break: break-all;
    border: 1px solid transparent;

}



.exercise:hover{
  letter-spacing: 1rem;
   border: 1px solid black;

  
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

