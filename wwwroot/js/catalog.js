function fetchData(){
    $.ajax({
        url: '/Catalog/GetProperties',
        type:'GET',
        contentType:'application/json',
        success: (data) => {
            for(var x=0; x<data.length;x++){
                displayProperty(data[x]);
            }
        },
        error: (details) => {
            console.log("Error",details);
        }
    });

}

function Delete() {
    var id = 1;
    $.ajax({
        url: "/catalog/DeleteProperty/" + id,
        type: "DELETE",
        success: () => {
            console.log("deleted");
        },
        error: (details) => {
            console.log("Error", details);
        },
    });
}

function displayProperty(prop){
    console.log(prop);
    //create the syntax
    var syntax = `<div class="property">
        <div class="card h-100">
           <img class="card-img-top" src='${prop.image}' alt="">

            <div class="card-body">
                <div class="row px-2 no-gutters align-items-center properties-data">
                <div class="col-4 align-items-center">
                    <p class="card card-block border-top-0 border-left-0 border-bottom-0"><i class="fas fa-dollar-sign"></i>${prop.price}</p>
                </div>
                <div class="col-4">
                    <p class="card card-block border-0"><i class="fas fa-shower"></i>${prop.baths}</p>
                </div>
                <div class="col-4">
                    <p class="card card-block border-0"><i class="fas fa-bed"></i>${prop.beds}</p>
                </div>
                </div>
                <h4 class="card-title">${prop.title}</h4>
                <p class="card-text">${prop.description}</p>

            </div>

            <div class="card-footer">
            <a href="#" class="btn btn-danger" onclick='Delete()'><i class="fas fa-trash-alt"></i> Eliminar</a>
            </div>
        </div>
    </div>`;
    //get the container
    var container=$("#catalog-container");
    //appen syntax to container

    container.append(syntax);


}

function init(){

    console.log("Catalog page");
    fetchData();

}

window.onload = init;