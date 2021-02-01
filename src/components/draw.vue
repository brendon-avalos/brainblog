<template>
 <div class="drawing-canvas">

      <div class="draw-instructions">a countour line exercise</div>
     
     

      <canvas id="tools_sketch" width="1500" height="1500"></canvas>

   </div>
</template>

<script>
	$(function() {
  
    $('#tools_sketch').sketch({defaultColor: "#000"});
  });
</script>




<style scoped>
.draw-instructions {

  padding:1rem;
  position:absolute;
  bottom:0;
   }

.tool {
  display:inline;
  padding-left:3rem;
}



.tools {
  padding:1rem;
  position:absolute;
  bottom:0;
  text-decoration: none;
  color:black;
  right:0;


}

a:link {
  text-decoration: none;
  color:black;

}


a:visited {
  text-decoration: none;
  color:black;

}

a:active {
  text-decoration: none;
  color:gray;

}

.drawing-canvas {
  cursor: url('../assets/pencil.png') 0 50, pointer;
  width:50%;
  bottom:0;
  height:50vh;
  position:fixed;
  left:0;
  font-size:1rem;
  background-color:#FBFBF6;
  box-sizing: border-box; 
  overflow: hidden; 


}




@media only screen and (max-width: 600px) {
   .drawing-canvas {
    width:100%;
    position: relative;
       font-size: .85rem;
  }

  .tool {
  display:none;
  padding-left:1.5rem;
}
}

</style>