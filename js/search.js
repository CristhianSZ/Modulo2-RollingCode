document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const productList = document
    .getElementById("productList")
    .getElementsByTagName("li");

  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toUpperCase();

    Array.from(productList).forEach((product) => {
      const productName = product.dataset.name.toUpperCase();

      product.style.display = productName.includes(searchTerm)
        ? "block"
        : "none";
    });
  });
});
