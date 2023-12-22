let libros=[
    {
        codigo:"30",
        nombre:"Amantes de buenos aires",
        autor:"Santos, Alberto",
        categoria:"Novela",
        descripcion:"Generaciones de mujeres decididas a no vivir cien años en soledad. Raquel está a punto de casarse en Buenos Aires cuando recibe la inesperada visita de un abogado portugués; que cambiará su vida por completo. Juntos reconstruirán la historia de los orígenes de ella marcada por un amor (...)",
        precio:"$3000",
        publicado:"",
        borrar:"trash.svg",
        editar:"edit.svg",
        destacar:"star.svg"
    },
    {
        codigo:"301",
        nombre:"El vuelo de la libélula",
        autor:"Elixart, Gabriela",
        categoria:"Novela",
        descripcion:"Un secreto familiar llevará a Clara al fin del mundo; donde cree que se halla el principio de su historia(...)",
        precio:"$3500",
        publicado:"",
        borrar:"trash.svg",
        editar:"edit.svg",
        destacar:"star.svg"
    },
    {
        codigo:"408",
        nombre:"Amantes de buenos aires",
        autor:"Santos, Alberto",
        categoria:"Novela",
        descripcion:"Generaciones de mujeres decididas a no vivir cien años en soledad. Raquel está a punto de casarse en Buenos Aires cuando recibe la inesperada visita de un abogado portugués; que cambiará su vida por completo. Juntos reconstruirán la historia de los orígenes de ella marcada por un amor (...)",
        precio:"$3250",
        publicado:"",
        borrar:"trash.svg",
        editar:"edit.svg",
        destacar:"star.svg"
    }
    ];
    console.log(libros.length);
    let crearTabla= function(lista){
        let tablaLibros="<tr><th>COD</th><th>NOMBRE</th><th>AUTOR</th><th>CATEGORIA</th><th>DESCRIPCION</th><th>PRECIO</th><th>PUBLICADO</th><th>BORRAR</th><th>EDITAR</th><th>DESTACAR</th></tr>";
        for(let libros of lista){
            let fila="<tr> <td>";
            fila+= libros.codigo;
            fila+="</td>"
    
            fila+="<td>"
            fila+= libros.nombre;
            fila+="</td>"
    
            fila+="<td>"
            fila+= libros.autor;
            fila+="</td>"
    
            fila+="<td>"
            fila+= libros.categoria;
            fila+="</td>"
    
            fila+="<td>"
            fila+= libros.descripcion;
            fila+="</td>"
    
            fila+="<td>"
            fila+= libros.precio;
            fila+="</td>"

            fila+=`<td> <div class="form-row align-items-center"><input class="form-check-input btn-primary" type="checkbox" id="check-publicado"></div>`;
            fila+="</td>"
    
            fila+=`<td> <a type="button" onclick="borrarLibro('${libros.codigo}')" class="btn  justify-content-center align-items-center shadow p-3 mb-5 bg-danger rounded"><img class="img-fluid" src="./img/${libros.borrar}" /></a>`;
            fila+="</td>"
   
            fila+=`<td> <a type="button" onclick="editarLibro('${libros.codigo}')" class="btn justify-content-center align-items-center shadow p-3 mb-5 bg-success rounded"><img class="img-fluid" src="./img/${libros.editar}" /></a>`;
            fila+="</td>"
   
            fila+=`<td> <a type="button" onclick="destacarLibro('${libros.codigo}')" class="btn justify-content-center align-items-center shadow p-3 mb-5 bg-warning rounded"><img class="img-fluid" src="./img/${libros.destacar}" /></a>`;
            fila+="</td>"
    
            fila+="</tr>"
            tablaLibros+=fila;
        }   
        return tablaLibros;
    };
    document.getElementById("tabla-libros").innerHTML= crearTabla(libros);

    function borrarLibro(codigo){
        alert(`Borrando libro con código ${codigo}`);
    }
    
    
    function editarLibro(codigo){
        alert(`Editar libro con código ${codigo}`);
    }
    
    
    function destacarLibro(codigo){
        alert(`Destacar el libro con código ${codigo}`);
    }
   