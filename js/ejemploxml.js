// Función para cargar el archivo XML
function cargarXML(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr.responseXML);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

// Función para mostrar los usuarios en la página
function mostrarUsuarios(xml) {
  var usuarios = xml.getElementsByTagName("usuario");
  var tabla = document.createElement("table");
  tabla.innerHTML = "<tr><th>Nombre</th><th>Email</th></tr>";

  for (var i = 0; i < usuarios.length; i++) {
    var usuario = usuarios[i];
    var nombre = usuario.getElementsByTagName("nombre")[0].textContent;
    var email = usuario.getElementsByTagName("email")[0].textContent;

    var fila = document.createElement("tr");
    fila.innerHTML = "<td>" + nombre + "</td><td>" + email + "</td>";
    tabla.appendChild(fila);
  }

  var parrafo = document.getElementById("ejemxml");
  parrafo.appendChild(tabla);
}

// Llamar a la función cargarXML y mostrar los usuarios cuando el archivo XML se haya cargado
cargarXML("usuarios.xml", mostrarUsuarios);
