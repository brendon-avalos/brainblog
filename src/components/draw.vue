<template>
 <div class="drawing-canvas">

      <div class="draw">*free space*</div>
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


.drawing-canvas {
  cursor: url('../assets/pencil.png') 0 50, pointer ;
  width:50%;
  bottom:0;
  height:50vh;
  position:fixed;
  left:0;
  font-size:1rem;
  background-color:#fff;
  box-sizing: border-box; 
  overflow: hidden; 


}
</style>