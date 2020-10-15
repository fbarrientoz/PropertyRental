
var PropertyList = [];
var UI ={};

function clearInputs(){
    $(".control").val("");
}
function saveProperty() {
    //Get values into vars
    var title = UI.txtTitle.val();
    var image = UI.txImage.val();
    var price = parseFloat(UI.txtPrice.val());
    var beds = parseInt(UI.txtBeds.val());
    var baths = parseInt(UI.txtBaths.val());
    var area = parseInt(UI.txtArea.val());
    var description = UI.txtDescription.val();
    var parking = UI.gridRadios1.is(":checked");
    
    if(!price) //if the prices is Empty ,0,false Nan
    {
          //show an error on screen
          $("#alertMessage").innerHTML = "Error, verify the price!!!!";
          $("#alertError").removeClass("hide");
  
          //set a timer(mili) to remove 
          setTimeout(function(){
              //hide error to user
              $("#alertError").addClass("hide");
          } , 3000);
    
          return; //Stop and don't go forward with next lines of code
    }

    if(!beds) //if the prices is Empty ,0,false Nan
    {
        alert("Error, verify the number of beds")
        return;
    }

    if(!baths) //if the prices is Empty ,0,false Nan
    {
        alert("Error, verify the number of baths")
        return;
    }

    if(!area) //if the prices is Empty ,0,false Nan
    {
        alert("Error, verify the area")
        return;
    }


    //Create an object
    var properties = new Properties(title,image, price, beds, baths, area, description, parking);
    console.log(properties);
    //clear the form
   
    PropertyList.push(properties);

    //send the object to BE
    $.ajax({
        url:"/catalog/SaveProperty",
        type:"POST",
        data:JSON.stringify(properties),
        contentType: "application/json",
        succes: (res) => {
            console.log(res);
             clearInputs();
                //show success message to user
            $("#alertSuccess").removeClass("hide");

            //set a timer(mili) to remove 
            setTimeout(function(){
                //hide success to user
                $("#alertSuccess").addClass("hide");
            } , 3000);
        },
        error: (details) =>{
            console.log("Error", details);
             //show an message
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