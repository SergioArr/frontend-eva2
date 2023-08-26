$(document).ready(function() {
    $('#miFormulario').submit(function(event) {
      event.preventDefault(); // evita que el formulario se envíe automáticamente  
      ValidarNombre();
      ValidarEdad();
      ValidarClavos();
      ValidarPernos();
      ValidarTuercas();
      
    });
  });

  $(document).ready(function() {
    let edad = $('#edad');
    let nombre = $('#nombre');  
    let cantidadClavos = $('#cantidadClavos');   
    let precioClavos = parseInt($('#precioClavos').text().replace('$', ''));   
    let cantidadPernos = $('#cantidadPernos');   
    let precioPernos = parseInt($('#precioPernos').text().replace('$', ''));  
    let cantidadTuercas = $('#cantidadTuercas');   
    let precioTuercas = parseInt($('#precioTuercas').text().replace('$', ''));  
    // Selecciona el input de nombre por su atributo name
    $("input[name='nombre']").on("blur", function() {
      ValidarNombre();
    });
    $("input[name='edad']").on("blur", function() {
        ValidarEdad();
      });
      $("input[name='cantidadClavos']").on("blur", function() {
        ValidarClavos();
      });
      $("input[name='cantidadPernos']").on("blur", function() {
        ValidarPernos();
      });
      $("input[name='cantidadTuercas']").on("blur", function() {
        ValidarTuercas();
      });
      $("#Pagar").click(function() {
        $("#nombreDet").text(nombre.val());
        $("#edadDet").text(edad.val());
        $("#clavosCantidad").text(cantidadClavos.val());
        $("#clavosTotal").text(parseInt(cantidadClavos.val()) * precioClavos);
        $("#pernosCantidad").text(cantidadPernos.val());
        $("#pernosTotal").text(parseInt(cantidadPernos.val()) * precioPernos);
        $("#tuercasCantidad").text(cantidadTuercas.val());
        $("#tuercasTotal").text(parseInt(cantidadTuercas.val()) * precioTuercas);
        $("#totalCantidad").text(parseInt($('#clavosCantidad').text()) + parseInt($('#pernosCantidad').text()) + parseInt($('#tuercasCantidad').text()));
        $("#totalTotal").text(parseInt($('#clavosTotal').text()) + parseInt($('#tuercasTotal').text()) + parseInt($('#pernosTotal').text()));

      });

  });

//   $(document).ready(function() {
//     // Selecciona el input de nombre por su atributo name
//     $("input[name='nombre']").on("blur", function() {
//       ValidarNombre();
//     });
//   });

  function ValidarPernos() {
    const cantidadPernos = $('#cantidadPernos');
    const cantidadPernosError = $('#cantidadPernosError');
    const stock = parseInt($('#stockPernos').text());

     // Validación de la cantidad de pernos
     if (cantidadPernos.val() < 0) {
        cantidadPernosError.text('La cantidad de pernos debe ser mayor o igual a cero');
        cantidadPernosError.addClass('error');
        cantidadPernos.addClass('error');
      } 
      else if (cantidadPernos.val() > stock){
        cantidadPernosError.text('La cantidad de pernos debe ser menor al stock ');
        cantidadPernosError.addClass('error');
        cantidadPernos.addClass('error');
      }
      else {
        cantidadPernosError.text('');
        cantidadPernosError.removeClass('error');
        cantidadPernos.removeClass('error');
      }
  };

  function ValidarTuercas() {
    const cantidadTuercas = $('#cantidadTuercas');
    const cantidadTuercasError = $('#cantidadTuercasError');
    const stockTuercas = parseInt($('#stockTuercas').text());
    // Validación de la cantidad de tuercas
    if (cantidadTuercas.val() < 0) {
        cantidadTuercasError.text('La cantidad de tuercas debe ser mayor o igual a cero');
        cantidadTuercasError.addClass('error');
        cantidadTuercas.addClass('error');
      } 
      else if (cantidadTuercas.val() > stockTuercas){
        console.log(cantidadTuercas);
        cantidadTuercasError.text('La cantidad de tuercas debe ser menor al stock');
        cantidadTuercasError.addClass('error');
        cantidadTuercas.addClass('error');
      }
      else {
        cantidadTuercasError.text('');
        cantidadTuercasError.removeClass('error');
        cantidadTuercas.removeClass('error');
      }
  };

  function ValidarClavos() {
    const cantidadClavos = $('#cantidadClavos');      
    const cantidadClavosError = $('#cantidadClavosError');
    const stockClavos = parseInt($('#stockClavos').text());
    // Validación de la cantidad de clavos
    if (cantidadClavos.val() < 0) {
        cantidadClavosError.text('La cantidad de clavos debe ser mayor o igual cero');
        cantidadClavosError.addClass('error');
        cantidadClavos.addClass('error');
      } 
      else if (cantidadClavos.val() > stockClavos){
        console.log(stockClavos);
        cantidadClavosError.text('La cantidad de clavos debe ser menor al stock');
        cantidadClavosError.addClass('error');
        cantidadClavos.addClass('error');
      }
      else {
        cantidadClavosError.text('');
        cantidadClavosError.removeClass('error');
        cantidadClavos.removeClass('error');
      }
  };

  function ValidarEdad() {
    const edad = $('#edad');      
    const edadError = $('#edadError');
    // Validación de la edad
    if (edad.val() < 18) {
        edadError.text('Debes ser mayor de edad para enviar el formulario');
        edadError.addClass('error');
        edad.addClass('error');
    } else {
        edadError.text('');
        edadError.removeClass('error');
        edad.removeClass('error');
    }
  };

  function ValidarNombre() {
    const nombre = $('#nombre');
    const nombreError = $('#nombreError');
  
    // Validación del nombre
    if (nombre.val().length < 3) {
        nombreError.text('El nombre debe tener al menos 3 caracteres');
        nombreError.addClass('error');
        nombre.addClass('error');
    } else {
        nombreError.text('');
        nombreError.removeClass('error');
        nombre.removeClass('error');
    }
  };
