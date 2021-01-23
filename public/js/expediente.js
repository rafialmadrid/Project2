$(document).ready(function() {
  // Getting references to the name input and author container, as well as the table body
  var nameInput = $("#expediente-name");
  var lastNameInput = $("#expediente-last-name");
  var genderInput = $("#expediente-gender");
  var ageInput = $("expediente-age");

  var expedienteList = $("tbody");
  var authorContainer = $(".author-container");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an Author
  $(document).on("submit", "#expediente-form", handleExpedienteFormSubmit);
  $(document).on("click", ".delete-author", handleDeleteButtonPress);

  // Getting the initial list of Authors
  getExpedientes();

  // A function to handle what happens when the form is submitted to create a new Author
  function handleExpedienteFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!nameInput.val().trim().trim() || !lastNameInput.val() || !genderInput.val() || ageInput.val()) {
      return;
    }
    // Calling the upsertAuthor function and passing in the value of the name input
    upsertExpediente({
      nombre: nameInput
        .val()
        .trim(),
      apellidos: lastNameInput
        .val(),
      edad: ageInput
        .val(),
      sexo: genderInput
        .val()
    });
  }

  // A function for creating an expedienrte. Calls getExpedientes upon completion
  function upsertExpediente(expedienteData) {
    $.post("/api/expedientes", expedienteData)
      .then(getExpedientes);
  }

  // Function for creating a new list row for expedientes
  function createExpedienteRow(expedienteData) {
    var newTr = $("<tr>");
    newTr.data("expediente", expedienteData);
    newTr.append("<td>" + expedienteData.nombre + "</td>");
    newTr.append("<td>" + expedienteData.apellidos + "</td>");
    if (expedienteData.Solicitudes) {
      newTr.append("<td> " + expedienteData.Solicitudes.length + "</td>");
    } else {
      newTr.append("<td>0</td>");
    }
    //This is where the id of expediente gets inserted in solicitudes
    newTr.append("<td><a href='/solicitudes?expediente_id=" + expedienteData.id + "'>Ver solicitudes</a></td>");
    newTr.append("<td><a href='/solicitudes?expediente_id=" + expedienteData.id + "'>Crear solicitud</a></td>"); 
    newTr.append("<td><a style='cursor:pointer;color:red' class='delete-author'>Eliminar expediente</a></td>");
    return newTr;
  }

  // Function for retrieving authors and getting them ready to be rendered to the page
  function getExpedientes() {
    $.get("/api/expedientes", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createExpedienteRow(data[i]));
      }
      renderExpedienteList(rowsToAdd);
      nameInput.val("");
      lastNameInput.val("");
      genderInput.val("");
      ageInput.val("");
    });
  }

  // A function for rendering the list of authors to the page
  function renderExpedienteList(rows) {
    expedienteList.children().not(":last").remove();
    authorContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      expedienteList.prepend(rows);
    }
    else {
      renderEmpty();
    }
  }

  // Function for handling what to render when there are no authors
  function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.text("You must create an Author before you can create a Post.");
    authorContainer.append(alertDiv);
  }

  // Function for handling what happens when the delete button is pressed
  function handleDeleteButtonPress() {
    var listItemData = $(this).parent("td").parent("tr").data("author");
    var id = listItemData.id;
    $.ajax({
      method: "DELETE",
      url: "/api/expedientes/" + id
    })
      .then(getAuthors);
  }
});
