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
        $("div.office2").slideToggle(1000);
        $("div.office1").slideToggle(1000);
      });
      $("div.office2").click(function() {
        $("div.office2").slideToggle(1000);
        $("div.office1").slideToggle(1000);
      });

      $("div.pet1").click(function() {
        $("div.pet2").slideToggle(1000);
        $("div.pet1").slideToggle(1000);
      });
      $("div.pet2").click(function() {
        $("div.pet2").slideToggle(1000);
        $("div.pet1").slideToggle(1000);
      });

      $("form#myForm").submit(function(event) {
        var email= $("#email").val();
        alert("Thank you "+email+" for subscribing to Hamisha movers newsletter.Check your inbox for exclusive offers");
        event.preventDefault();
      });

    
});

    $("#image1").mouseenter(function(){
      $("#text1").show();
    }).mouseleave(function(){
      $("#text1").hide();
    })

    $("#image2").mouseenter(function(){
        $("#text2").show();
      }).mouseleave(function(){
        $("#text2").hide();
      })

      $("#image3").mouseenter(function(){
        $("#text3").show();
      }).mouseleave(function(){
        $("#text3").hide();
      })

      $("#image4").mouseenter(function(){
        $("#text4").show();
      }).mouseleave(function(){
        $("#text4").hide();
      })

      $("#image5").mouseenter(function(){
        $("#text5").show();
      }).mouseleave(function(){
        $("#text5").hide();
      })

