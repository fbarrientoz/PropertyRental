
var PropertyList = [];
var UI ={};

function clearInputs(){
    $(".control").val("");
}
function saveProperty() {
    //Get values into vars
    var Title = UI.txtTitle.val();
    var Image = UI.txImage.val();
    var Price = parseFloat(UI.txtPrice.val());
    var Beds = parseInt(UI.txtBeds.val());
    var Baths = parseInt(UI.txtBaths.val());
    var Area = parseInt(UI.txtArea.val());
    var Description = UI.txtDescription.val();
    var Parking = UI.gridRadios1.is(":checked");
    
    if(!Price) 
    {
          //show an error on screen
          $("#alertMessage").innerHTML = "Error, verify the price!!!!";
          $("#alertError").removeClass("hide");           
    
          return; 
    }

    if(!Beds) 
    {
        $("#alertMessage").innerHTML = "Error, verify the Beds!!!!";
        $("#alertError").removeClass("hide");
        return;
    }

    if(!Baths) 
    {
        $("#alertMessage").innerHTML = "Error, verify the Baths!!!!";
        $("#alertError").removeClass("hide");
        return;
    }

    if(!Area) 
    {
        $("#alertMessage").innerHTML = "Error, verify the Area!!!!";
        $("#alertError").removeClass("hide");
        return;
    }


    //Create an object
    var properties = new Properties(Title,Image, Price, Beds, Baths, Area, Description, Parking);
    console.log(properties);
  
   
    // PropertyList.push(properties);

    //send the object to BE
    $.ajax({
        url: '/Catalog/SaveProperty',
        type:'POST',
        data: JSON.stringify(properties),
        contentType:'application/json',
        success: (res) => {
            console.log(res);     
            $("#alertSuccess").removeClass("hide");                   
            clearInputs();


        },
        error: (details) => {
            console.log("Error",details);
            $("#result").html('Error!'); 
            $("#result").addClass("alert alert-warnin");
        }
    });
       
    
}
function init() {
    console.log("Register Page");

    UI = {
        btnSave: $("#btnSave"),
        secForm: $("#section-Form"),
        txtTitle: $("#txtTitle"),
        txImage: $("#txtImage"),
        txtPrice: $("#txtPrice"),
        txtBeds: $("#txtBeds"),
        txtBaths: $("#txtBaths"),
        txtArea: $("#txtArea"),
        txtDescription: $("#txtDescription"),
        gridRadios1: $("#gridRadios1"),
      

    };
    //Events
    UI.btnSave.click(saveProperty);
}

window.onload = init;