$(document).ready(function() {
  // Getting jQuery references to the post body, title, form, and author select
  var estudiosInput = $("#estudios");
  var cmsForm = $("#cms");
  var expedienteSelect = $("#expediente");
  // Adding an event listener for when the form is submitted
  $(cmsForm).on("submit", handleFormSubmit);
  // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
  var url = window.location.search;
  var solicitudId;
  var expedienteId;
  // Sets a flag for whether or not we're updating a post to be false initially
  var updating = false;

  // If we have this section in our url, we pull out the post id from the url
  // In '?post_id=1', postId is 1
  if (url.indexOf("?solicitud_id=") !== -1) {
    solicitudId = url.split("=")[1];
    getsSolicitudData(solicitudId, "solicitud");
  }
  // Otherwise if we have an author_id in our url, preset the author select box to be our Author
  else if (url.indexOf("?expediente_id=") !== -1) {
    expedienteId = url.split("=")[1];
  }


  // A function for handling what happens when the form to create a new post is submitted
  function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a body, title, or author
    if (!estudiosInput.val()) {
      return;
    }
    // Constructing a newSolicitud object to hand to the database
    var newSolicitud = {
      total_estudios: 700.00,
      ExpedienteId: expedienteId
    };

    // If we're updating a post run updatePost to update a post
    // Otherwise run submitPost to create a whole new post
    if (updating) {
      newSolicitud.id = solicitudId;
      updateSolicitud(newSolicitud);
    }
    else {
      submitSolicitud(newSolicitud);
    }
  }

  // Submits a new post and brings user to blog page upon completion
  function submitSolicitud(post) {
    $.post("/api/solicitudes", post, function() {
      window.location.href = "/solicitudes";
    });
  }







  











  $('#estudios').keypress(function (event) {
  if (event.which == 13) {
    handleEstudioSubmit();
    return false;    //<---- Add this line
  }
});

  function handleEstudioSubmit(event){
    console.log("submitted estudio");
    var clave = $("#estudios").val();
    console.log(clave);
    getEstudio(clave);
  }


  function getEstudio(clave) {
    $.get(`/api/catalogoestudios/${clave}`, function(data) {
      console.log(data);
      createEstudioRow(data);
      $("#estudios").val("");
    });
  }



  // Function for creating a new list row for expedientes
  function createEstudioRow(data) {
    var newTr = $("<tr>");
    newTr.data("expediente", data);
    newTr.append("<td>" + data.clave + "</td>");
    newTr.append("<td>" + data.nombre + "</td>");
    newTr.append("<td>" + data.total + "</td>")
    newTr.append("<td>" + data.dias + "</td>");
    
    $("tbody").append(newTr);
  }

























  

  // Gets post data for the current post if we're editing, or if we're adding to an author's existing posts
  function getSolicitudData(id, type) {
    var queryUrl;
    switch (type) {
    case "solicitud":
      queryUrl = "/api/solicitudes/" + id;
      break;
    case "expediente":
      queryUrl = "/api/expedientes/" + id;
      break;
    default:
      return;
    }
    $.get(queryUrl, function(data) {
      if (data) {
        console.log(data.ExpedienteId || data.id);
        // If this post exists, prefill our cms forms with its data
        titleInput.val(data.title);
        bodyInput.val(data.body);
        authorId = data.AuthorId || data.id;
        // If we have a post with this id, set a flag for us to know to update the post
        // when we hit submit
        updating = true;
      }
    });
  }


  // Update a given post, bring user to the blog page when done
  function updatePost(post) {
    $.ajax({
      method: "PUT",
      url: "/api/posts",
      data: post
    })
      .then(function() {
        window.location.href = "/blog";
      });
  }
});







  // Getting the authors, and their posts
  //getExpedientes();


  // A function to get Expedientes and then render our list of Expedientes
  /*function getExpedientes() {
    $.get("/api/expedientes", renderExpedienteList);
  }
  // Function to either render a list of authors, or if there are none, direct the user to the page
  // to create an author first
  function renderExpedienteList(data) {
    if (!data.length) {
      window.location.href = "/expedientes";
    }
    $(".hidden").removeClass("hidden");
    var rowsToAdd = [];
    for (var i = 0; i < data.length; i++) {
      rowsToAdd.push(createExpedienteRow(data[i]));
    }
    expedienteSelect.empty();
    console.log(rowsToAdd);
    console.log(expedienteSelect);
    expedienteSelect.append(rowsToAdd);
    expedienteSelect.val(expedienteId);
  }

  // Creates the author options in the dropdown
  function createExpedienteRow(author) {
    var listOption = $("<option>");
    listOption.attr("value", expediente.id);
    listOption.text(expediente.nombre);
    return listOption;
  }*/