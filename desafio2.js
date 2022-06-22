const fs = require("fs");

class Contenedor {
    constructor(fileName){
        this.fileName = fileName;
    }

    async save(object){
      
        try {   
                    let lectura = await fs.promises.readFile(this.fileName, "utf-8")
                    let existents = JSON.parse(lectura)
                    let listObj = [...existents, object]
                    object.id = listObj.length + 1;
                    await fs.promises.writeFile(this.fileName, JSON.stringify(listObj))
                    return console.log(object.id);           
            }
        catch(err){
            console.log("ERROR 2 - CREACION DE FILE");
        }
    }

    async getById(id){

        try {
            let lectura = await fs.promises.readFile(this.fileName, "utf-8")
            let prods = JSON.parse(lectura)
            let prodFind = prods.find(prod => prod.id == id)
            if(prodFind){
                console.log(prodFind)
            }else{console.log(null)}
            }
        catch(err){console.log("ERROR 1 - LECTURA DE FILE");}
    };

    async getAll(){
        try {
            let lectura = await fs.promises.readFile(this.fileName, "utf-8")
            let prods = JSON.parse(lectura)
            console.log(prods)
            }
        catch(err){console.log("ERROR 1 - LECTURA DE FILE");}
    };

    async deleteById(id){
        try {
            let lectura = await fs.promises.readFile(this.fileName, "utf-8")
            let prods = JSON.parse(lectura)
            let prodFilterDeleteID = prods.filter(prod => prod.id !== id)
            console.log(prodFilterDeleteID)
            await fs.promises.writeFile(this.fileName, JSON.stringify(prodFilterDeleteID))
            console.log("Guardado ELIMINANDO ID");
            }
            
        catch(err){console.log("ERROR 1 - LECTURA DE FILE");}
    };

    async deleteAll(){
        const prodListVoid = [];
        try {
            await fs.promises.writeFile(this.fileName, JSON.stringify(prodListVoid))
            console.log("Guardado VACIO");
        }
        catch(err){
            console.log("ERROR 3 - AL VACIAR FILE");
        }
    }
};

const archivo = new Contenedor("producto.txt");

const product1 = {producto: "Raqueta Wilson", precio: 25900, imag: "https://http2.mlstatic.com/D_NQ_NP_868903-MLA31035689818_062019-O.webp"}
const product2 = {producto: "Raqueta Head", precio: 22900, imag: "https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/H/-/H-063015038_0.jpg"}
const product3 = {producto: "Raqueta Babolat",precio: 21900, imag: "https://http2.mlstatic.com/D_NQ_NP_912854-MLA42861952577_072020-O.webp"}


// setTimeout(() => {archivo.save(product1)}, 1000);
// setTimeout(() => {archivo.save(product2)}, 1100);
// setTimeout(() => {archivo.save(product3)}, 1200);

setTimeout(() => {
    archivo.getById(2);
}, 2000);

setTimeout(() => {
    archivo.getAll();
}, 1000);

// setTimeout(() => {
//     archivo.deleteById(3);
// }, 1000);

// setTimeout(() => {
//     archivo.deleteAll();
// }, 1000);


