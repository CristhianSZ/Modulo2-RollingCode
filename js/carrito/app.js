const shopContent = document.getElementById("shopContent");

const verCarrito = document.getElementById("verCarrito");

const modalContainer = document.getElementById("modal-container");

const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
productos.forEach((product) => {
  let content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
  <img src="${product.img}">
  <h3>${product.nombre}</h3>
  <h4>${product.autor}</h4>
  <p class="price">${product.precio} $</p>
  `;

  shopContent.appendChild(content);

  let comprar = document.createElement("button");
  comprar.innerText = "comprar";
  comprar.className = "comprar";
  content.append(comprar);

  comprar.addEventListener("click", () => {
    const repeat = carrito.some(
      (repeatProduct) => repeatProduct.id === product.id
    );
    if (repeat) {
      carrito.map((prod) => {
        if (prod.id === product.id) {
          prod.cantidad++;
        }
      });
    } else {
      carrito.push({
        id: product.id,
        img: product.img,
        nombre: product.nombre,
        autor: product.autor,
        precio: product.precio,
        cantidad: product.cantidad,
      });
    }
    carritoCounter();
    saveLocal();
  });
});

const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};
