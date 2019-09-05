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
$(function(){
    
    $("#button_1").click(function(e){
        e.preventDefault()
        var servicesInput = $("#select1 option:selected").value
        
        var vehicleInput = $("#select2 option:selected").value
        
        var firstNameInput = $("#first-name").value
        
        var secondNameInput = $("#second-name").value
        
        var emailInput = $("#email").value
        
        var phoneInput = $("#phone").value
    
        var quotationTwo = new Quotation(servicesInput, vehicleInput, firstNameInput, secondNameInput, emailInput, phoneInput)
        quotationTwo.listItems()
        $("#displayService").show()
        $("#displayVehicle").show(quotationTwo.vehicleInput)
        $("#displayFirstName").show(quotationTwo.firstNameInput)
        $("#displaySecondName").show(quotationTwo.secondName)
        $("#displayEmail").show(quotationTwo.emailInput)
        $("#displayPhone").show(quotationTwo.phoneInput)          
 
    })
})
