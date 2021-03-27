
<template> 
    <div class="intro-top">
      <div class="name"><img src="../assets/freework.svg">
      </div>
      <div class="about">(1) free work is a space for writing exercises. (2) it was created in effort to improve my writing skills. (3) created by brendon avalos.</div>
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
  background-color:#fff;
  padding:1rem;
  box-sizing: border-box;
  display: flex;
  flex-flow: column wrap;
  justify-content:space-between;
   white-space: normal; 
  border-bottom: 1px solid black;
    border-right: 1px solid black;
}

img {
  width:100%;
}

.name {
  width:100%;

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

