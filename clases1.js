
class Usuarios {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }
    getFullName(){
        console.log(`El nombre completo del usuario es: ${this.nombre} ${this.apellido}.`);
    };

    countMascota(){
        return this.mascotas.length
    };
    
    addBook(libro){
        this.libros.push(libro);
    };

    getBookNames(){
        console.log(this.libros);
    };
}

const usuario1 = new Usuarios("Obi-Wan", "Kenobi");
usuario1.libros = [{Libro: "Narnia", Autor: "Goku"},{Libro: "TLOR", Autor: "Vegeta"}];
usuario1.mascotas = ["Anakin", "Sith", "Duku"];

console.log(usuario1.countMascota());
usuario1.getFullName();
usuario1.getBookNames();
// ADD BOOK COMO PUDE DESARROLLARLO:
usuario1.addBook({Libro:"The Dark Knight", Autor:"Alfredo Diaz"});
usuario1.addBook({Libro:"Rocky IV", Autor:"Silvester"});
usuario1.addBook({Libro:"PRUEBA 3", Autor:"BRIAN"});
usuario1.addBook({Libro:"PRUEBA 4", Autor:"ZAPATA"});
usuario1.getBookNames();

// ADDBOOK FORMA CORRECTA MOSTRADA EN EL AFTER:

// addBook(nombre, autor){
//    let libro = {};
//    libro.nombre = nombre;
//    libro.autor = autor;
//    this.libros.push(libro);
// };

// usuario1.addBook("el señor de los anillos", "tolkien");