<template>
 <div class="intro-bottom">

      <div class="draw">draw here</div>
      <canvas id="simple_sketch" width="1000" height="1000"></canvas>

   </div>
</template>

<script>
	$(function() {
    $('#simple_sketch').sketch();
  });
</script>




<style scoped>
.draw {
  padding:1rem;
  position:absolute;
  bottom:0;
  color:gray; }


.intro-bottom {
  width:50%;
  bottom:0;
  height:50vh;
  position:fixed;
  left:0;
  font-size:1rem;
  background-color:#fff;

  box-sizing: border-box; 
  overflow: hidden; 


  box-sizing: border-box;  
  overflow: hidden;

}
</style>