//Business logic


//user interface logic
$(document).ready(function(){
    $("div.house1").click(function() {
        $("div.house2").slideToggle(1000);
        $("div.house1").slideToggle(1000);
      });
      $("div.house2").click(function() {
        $("div.house2").slideToggle(1000);
        $("div.house1").slideToggle(1000);
      });

      $("div.office1").click(function() {
        $("div.office2").toggle();
        $("div.office1").toggle();
      });
      $("div.office2").click(function() {
        $("div.office2").toggle();
        $("div.office1").toggle();
      });

      $("div.pet1").click(function() {
        $("div.pet2").toggle();
        $("div.pet1").toggle();
      });
      $("div.pet2").click(function() {
        $("div.pet2").toggle();
        $("div.pet1").toggle();
      });




    
})