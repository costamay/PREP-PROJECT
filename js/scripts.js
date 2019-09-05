function quotation(services, vehicle, firstName, secondName, email, phone){
    this.services = services
    this.vehicle = vehicle
    this.firstName = firstName
    this.secondName = secondName
    this.email = email
    this.phone = phone
}
quotation.prototype.listItems = function(){
    return this.services + "," + this.vehicle+ "" +this.firstName+ "" +this.secondName+ "" + this.email+ "" +this.phone
}
$(function(){
    $("#button_1").click(function(e){
        e.preventDefault()
        var servicesInput = $("#select1 option:selected").value
        if (!servicesInput){
            alert("Please select Type of Service")
        }else{
            return 0
        }
        var vehicleInput = $("#select2 option:selected").value
        if (!vehicleInput){
            alert("Please select Type of vehicle")
        }else{
            return 0
        }
        var firstNameInput = $("#first-name").value
        if(!firstNameInput){
            alert("Please enter your name")
        }else{
            return 0
        }
        var secondNameInput = $("#second-name").value
        if(!secondNameInput){
            alert("Please enter your name")
        }else{
            return 0
        }
        var emailInput = $("#email").value
        if(!emailInput){
            alert("Please enter your emial")
        }else{
            return 0
        }
        var phoneInput = $("#phone").value
        if(!phoneInput){
            alert("Please enter your phone number")
        }else{
            return 0
        }

        var Quotation = new quotation(servicesInput, vehicleInput, firstNameInput, secondNameInput, emailInput, phoneInput)


    })
})
