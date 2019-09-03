//Business logic


//user interface logic
$(document).ready(function(){
    $("div.house1").click(function() {
        $("div.house2").toggle();
        $("div.house1").toggle();
      });
      $("div.house2").click(function() {
        $("div.house2").toggle();
        $("div.house1").toggle();
      });


    
})