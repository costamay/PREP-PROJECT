function Quotation(services, vehicle, firstName, secondName, email, phone){
    this.services = services
    this.vehicle = vehicle
    this.firstName = firstName
    this.secondName = secondName
    this.email = email
    this.phone = phone
}
Quotation.prototype.listItems = function(){
    return this.services + "," + this.vehicle+ "" +this.firstName+ "" +this.secondName+ "" + this.email+ "" +this.phone
}

$(document).ready(function(){
    $("form#codec1").submit(function(event){
        event.preventDefault();
        var servicesInput = $("#select1 option:selected").value
        
        var vehicleInput = $("#select2 option:selected").value
        
        var firstNameInput = $("#first-name").value
        
        var secondNameInput = $("#second-name").value
        
        var emailInput = $("#email").value
        
        var phoneInput = $("#phone").value
    
        var newQuotation = new Quotation(servicesInput, vehicleInput, firstNameInput, secondNameInput, emailInput, phoneInput)
        
            $("#displayService").show()
            $("#displayService").show()
            $("#displayVehicle").show()
            $("#displayFirstName").show()
            $("#displaySecondName").show()
            $("#displayEmail").show()
            $("#displayPhone").show() 
  
           
     
    })
    
})
