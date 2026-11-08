/**
 * Reto 1 - Noche de karaoke
 * Christian Lafayette Martínez Pérez
 * 00000010383
 * Aplicaciones Web
 * 
 */

// Primero crearé la función con la que realizaré los requerimientos.  Con una
// función bastará?  Tal vez sea para retornar algo según el requisito.
function prepareSongs(songs) {

    // Aquí desarrollaré la lógica del ejercicio, a ver que sale.

    /** 
     * Por lo que se nos indica, no debemos modificar el arreglo original, en este caso songs1.
     * Entonces vamos a crear un nuevo arreglo donde guardaremos los resultados solicitados
     * 
    */

    const arregloCancionesNuevo = [];

    /** 
     * Ahora vamos a crear un ciclo for para recorrer el arreglo songs
     * y comparar sus elementos con el arreglo nuevo, esto para ver si ya existe
     * una canción en él.
     * 
    */

    for(let i = 0; i < songs.length; i++){

        // Aquí primero imprimo el indice actual del arreglo songs
        console.log("Índice actual:", i);

        // Ahora imprimo la canción actual ubicada en la posición i del arreglo songs
        console.log("Canción actual:", songs[i]);

        // Aquí empieza la magia.  Si el arreglo nuevo NO incluye la canción del arreglo songs
        if(!arregloCancionesNuevo.includes(songs[i])){

            // Imprimimos como va quedando el nuevo arreglo
            console.log("Arreglo nuevo:", arregloCancionesNuevo);

            // Y le agregamos la canción al nuevo arreglo, si es que el if se cumplió.
            arregloCancionesNuevo.push(songs[i]);
        }
    }

    // Veamos como quedó el arreglo nuevo, ¿habrá jalado?
    console.log("Veamos como quedó el arreglo nuevo, ¿habrá jalado?", arregloCancionesNuevo);

    // Una vez creado el nuevo arreglo, vamos a ordenarlo de manera ascendente.  para esto creo
    // que puedo usar sort(), creo...
    arregloCancionesNuevo.sort((a, b) => a - b);

    /* Si funcionó, pero al arreglar el cuarto arreglo, noté que me acomodó el 1 y luego el 10,
     imagino porque ambos empiezan con 1 (obviamente).  Al parecer los consideró valores
     de texto.  Corregí agregando la función flecha para indicar a JS que los trate como
     valores numéricos mediante la resta de dos de los valores dentro del nuevo arreglo.
     */

    console.log("¿Se ordenó el arreglo de manera ascendente?", arregloCancionesNuevo)

    // Si se creó el nuevo arreglo con valores sin repetir y ordenado de manera ascendente, lo
    // retornamos.
    return arregloCancionesNuevo;
}

// Creamos el primer arreglo del Reto.
const songs1 = [3, 1, 2, 3, 4, 2, 5];
const songs2 = [6, 5, 5, 5, 5];
const songs3 = [];
// Agregaré un cuarto arreglo, de manera personal, para practicar
const songs4 = [10, 2, 30, 1, 10, 5, -3];

/*
Aquí llamaremos a la función solicitada en el ejercicio para que haga
del arreglo de las canciones
*/
const playlist1 = prepareSongs(songs1);
const playlist2 = prepareSongs(songs2);
const playlist3 = prepareSongs(songs3);
// Agrego la constante para mi cuarto arreglo
const playlist4 = prepareSongs(songs4);

// Ahora imprimimos el resultado obtenido por nuestra función
console.log("Imprimimos el resultado final de nuestros tres ejercicios")
console.log(playlist1);
console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::")
console.log(playlist2);
console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::")
console.log(playlist3);
console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::")
console.log(playlist4);
console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::")