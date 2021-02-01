
var nombre = $( "#nombre" );
var apellidos = $("#apellidos");
var sexo = $("#sexo");
var edad = $("#edad");
var expediente = $("#expediente");

var subtotal = $("#subtotal");
var descuento = $("#descuento");
var cargo = $("#cargo");
var total = $("#total");




//PARA SUBIR LOS DATOS A LA BDD  (EXPEDIENTE, SOLICITUD, ESTUDIOS)
$(".btn-warning").on("click",handleSubmit);



function handleSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!nombre.val() || !apellidos.val() || !sexo.val() || !edad.val()) {
      return;
    }
    // Calling the upsertAuthor function and passing in the value of the name input
       

    if(!expediente.val()){
      upsertNewExpediente({
        nombre: nombre.val(),
        apellidos: apellidos.val(),
        edad: edad.val(),
        sexo: sexo.val(),
        
        Solicituds: {
          total_estudios: subtotal.val() , 
          descuento: descuento.val(),
          subtotal: subtotal.val(),
          cargo: cargo.val(),    
          Estudios: estudios,
        }
      });
    }else if(expediente.val()){
      upsertExistingExpediente({
          total_estudios: subtotal.val() , 
          descuento: descuento.val(),
          subtotal: subtotal.val(),
          cargo: cargo.val(),    
          ExpedienteId: expediente.val(),
          Estudios: estudios
      });
    }
    

  }

  
  function upsertNewExpediente(data) {
    console.log(data);
    $.post("/api/expedientes", data);
  }


  function upsertExistingExpediente(data){
    $.post(`/api/solicitudes/${expediente.val()}`, data);
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
    var resultados = [];
  function handleEstudioSubmit(event){
    var clave = $("#estudios").val();

    $.get(`/api/estudioprecio/${clave}`).then(function(data){
      console.log(data);

        data = JSON.parse(data);
      estudios.push({
        catalogoEstudioId: data.id
      });

      subtotal_val += data.catalogoPrecios[0].total;
      $("#subtotal").val(subtotal_val);

      console.log(subtotal_val);
      console.log(estudios);      

      var newTr = $("<tr></tr>");
      newTr.data("expediente", data);
      console.log(data.clave);
      console.log(data.nombre);
      console.log(data.catalogoPrecios[0].total);
      console.log(data.dias);
      $("tbody").append(newTr);
      newTr.append("<td>" + data.clave + "</td>");
      newTr.append("<td>" + data.nombre + "</td>");
      newTr.append("<td>" + data.catalogoPrecios[0].total + "</td>");
      newTr.append("<td>" + data.dias + "</td>");
      
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


  



  //Index3.html
  //PARA BUSCAR LOS EXPEDIENTES EXISTENTES Y MOSTRARLOS EN LA TABLA CUANDO QUEREMOS HACER UNA SOLICITUD CON EXPEDIENTE EXISTENTE

var expedienteSearch = $("#expediente-search");
var nombreSearch = $("#nombre-search");
var apellidosSearch = $("#apellidos-search");


$('#expediente-search').keypress(function (event) {
  if (event.which == 13) {
    searchExpedientes();
    return false;    //<---- Add this line
  }
});


function searchExpedientes(){
    $.get(`/api/expedientes/${nombreSearch.val()}`)
    .then(function(res){
    console.log(res);
    });
};

