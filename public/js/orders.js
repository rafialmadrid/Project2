




//PARA SUBIR LOS DATOS A LA BDD
$(".btn-warning").on("click",handleSubmit);

var nombre = $("#nombre");
var apellidos = $("#apellidos");
var sexo = $("#sexo");
var edad = $("edad");

var subtotal = $("#subtotal");
var descuento = $("#descuento");
var cargo = $("#cargo");
var total = $("#total");


function handleSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!nombre.val().trim() || !apellidos.val() || !sexo.val() || edad.val()) {
      return;
    }
    // Calling the upsertAuthor function and passing in the value of the name input
    upsert({
      nombre: nombre.val().trim(),
      apellidos: apellidos.val(),
      edad: edad.val(),
      sexo: sexo.val(),

      Solicituds: {
        total_estudios: subtotal.val() , 
        descuento: descuento.val(),
        subtotal: subtotal.val(),
        cargo: cargo.val(),    
        Estudios: estudios
      },


    });
  }

  
  function upsert(data) {
    $.post("/api/expedientes", data);
  }

  



// PARA AGREGAR PRUEBAS A LA SOLICITUD
  $('#estudios').keypress(function (event) {
  if (event.which == 13) {
    handleEstudioSubmit();
    return false;    //<---- Add this line
  }
});

  
    var subtotal_val = 0;
    var estudios = [];

  function handleEstudioSubmit(event){
    console.log("submitted estudio");
    var clave = $("#estudios").val();
    $.get(`/api/estudioprecio/${clave}`, function(data) {
      
      estudios.push({
        clave: data.clave,
        nombre: data.nombre
      }
      );
      
      console.log(estudios);

      subtotal_val += data.catalogoPrecios[0].total;
      $("#subtotal").val(subtotal_val);

      

        var newTr = $("<tr>");
      newTr.data("expediente", data);
      newTr.append("<td>" + data.clave + "</td>");
      newTr.append("<td>" + data.nombre + "</td>");
      newTr.append("<td>" + data.catalogoPrecios[0].total + "</td>");
      newTr.append("<td>" + data.dias + "</td>");
    
      $("tbody").append(newTr);

      $("#estudios").val("");
    });
  }


// PARA APLICAR DESCUENTO
descuento.keypress(function (event) {
  if (event.which == 13) {
    handleDescuentoSubmit();
    return false;    //<---- Add this line
  }
});


var descuento_val = 0;
var cargo_val = 0;
var total_val = 0;  
descuento.val(descuento_val);
cargo.val(cargo_val);
total.val(total_val);
  
function handleDescuentoSubmit(event){
  descuento_val = descuento.val();
  
  total_val = subtotal_val - (subtotal_val * descuento_val * 0.01);
  
  total.val(total_val);
}


//PARA APLICAR CARGO ADICIONAL
$('#cargo').keypress(function (event) {
  if (event.which == 13) {
    handleCargoSubmit();
    return false;    //<---- Add this line
  }
});


  