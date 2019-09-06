$(document).ready(function(){
  $("form#codec1").submit(function(event){
    event.preventDefault()
      var servicesInput = $("#select1 option:selected").value
      var vehicleInput = $("#select2 option:selected").value 
      var firstNameInput = $("#first-name").value 
      var secondNameInput = $("#second-name").value
      var emailInput = $("#email").value
      var phoneInput = $("#phone").value

      if(firstNameInput.length > 1 || secondNameInput.length > 1 || emailInput.lenth> 1 || phoneInput.length > 8){
        alert("Your request have been received, thank you!")
      }     
  })
})
//user interface logic
$(document).ready(function(){
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

})
