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

      $("div.office1").click(function() {
        $("div.office2").toggle();
        $("div.office1").toggle();
      });
      $("div.office2").click(function() {
        $("div.office2").toggle();
        $("div.office1").toggle();
      });


    
})