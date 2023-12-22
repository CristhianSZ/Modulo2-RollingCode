const validarYredirigir = () => {
  let nombre = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let contraseña = document.getElementById("password").value;
  let confirmarcontraseña = document.getElementById("confirmPassword").value;

  let regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  let mensaje = "";

  nombre.length < 5 || nombre.length > 20
    ? (document.getElementById("usernameError").innerText =
        "El nombre usuario debe tener entre 5 y 20 caracteres.")
    : (document.getElementById("usernameError").innerText = "");

  !regexEmail.test(email)
    ? (document.getElementById("emailError").innerText =
        "El email no tiene un formato válido")
    : (document.getElementById("emailError").innerText = "");

  contraseña.length < 8
    ? (document.getElementById("passwordError").innerText =
        "La contraseña es muy corta debe ser mayor a 8 caracteres.")
    : (document.getElementById("passwordError").innerText = "");

  contraseña != confirmarcontraseña
    ? (document.getElementById("confirmPasswordError").innerText =
        "Las contraseñas no coinciden.")
    : (document.getElementById("confirmPasswordError").innerText = "");

  mensaje =
    nombre == ""
      ? "Todos los campos son obligatorios."
      : !regexEmail.test(email)
      ? "El email no tiene un formato válido."
      : contraseña.length < 8
      ? "La contraseña es muy corta debe ser mayor a 8 caracteres."
      : contraseña != confirmarcontraseña
      ? "Las contraseñas no coinciden."
      : "";

  if (mensaje != "") {
    alert(mensaje);
    return false;
  } else {
    alert("Registro exitoso.");
    window.location.href = "../Paginas/login.html";
    return true;
  }
};
