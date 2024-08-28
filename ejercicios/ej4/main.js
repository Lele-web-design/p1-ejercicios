// datos que ingresa el usuario
let ciudad, genero, edad;
let datoValido = false; // doy por hecho que el dato que ingresa el usuario está mal

// variables de los promedios
let mujeresCantidad = 0;
let hombresCantidad = 0;
let noBinarioCantidad = 0;

let mujeresEdadSuma = 0;
let hombresEdadSuma = 0;
let noBinarioEdadSuma = 0;

let promedioEdadGeneral = 0;
let promedioEdadMujeres = 0;
let promedioEdadHombre = 0;
let promedioEdadNoBinario = 0;

// variables para los porcentajes
let mujeresMenoresDe21 = 0;
let hombresMayoresDe21 = 0;

let porcentajeMujeresMenores = 0;
let porcentajeHombresMayores = 0;

// variables para la menor y la mayor edad cargada
let mujerMasVieja = -1;
let hombreMasJoven = 111;

do {
    // DO WHILE PARA PERDIR LA CIUDAD
    do {
        ciudad = prompt("Ingrese la ciudad");

        // Valido el dato ingresado
        datoValido = false;
        if (ciudad === null || ciudad.trim() == ""){
            alert("Por favor, complete el campo");
        }else if (!isNaN(ciudad)){
            alert("Por favor ingrese texto, no número");
        }else {
            datoValido = true;
        }

    }while(!datoValido);

    // DO WHILE PARA PEDIR EL GÉNERO
    do {
        genero = prompt("Ingrese el género (H, M, X)");

        // Valido el dato ingresado
        datoValido = false;
        if (genero === null || genero.trim() == ""){
            alert("Por favor, complete el campo");
        }else {
            genero = genero.toLowerCase().trim(); //Le quito los espacios y lo pongo en minúscula para validarlo
            if (!isNaN(genero)){
                alert("Por favor ingrese texto, no número");
            }else if (genero != "h" && genero != "m" && genero != "x"){
                alert("El valor ingresado no es válido")
            }else {
                datoValido = true;
            }
        }

    }while(!datoValido);

    // DO WHILE PARA PEDIR LA EDAD
    do {
        edad = parseInt(prompt("Ingrese la edad (0 - 110)"));

        // Valido el dato ingresado
        datoValido = false;
        if (isNaN(edad)) {
            alert("Ingrese un valor numérico");
        }else if (edad < 0) {
            alert("El valor mínimo admitido es de 0");
        }else if (edad > 110) {
            alert("El valor máximo admitido es de 110");
        }else {
            datoValido = true;
        }

    }while(!datoValido);

    // UNA VEZ LOS DATOS ESTÁN VALIDADOS, HAGO TODAS LAS CONSULTAS NECESARIAS
    if(genero == "h") {
        // Es hombre
        hombresCantidad++;
        hombresEdadSuma += edad;

        if (edad > 21) {
            // Tiene más de 21 años
            hombresMayoresDe21++;
        }

        if (edad < hombreMasJoven) {
            // Si la edad ingresada es menor a la del más joven, la sustituye
            hombreMasJoven = edad;
        }
    }else if (genero == "m") {
        // Es mujer
        mujeresCantidad++;
        mujeresEdadSuma += edad;

        if (edad < 21) {
            // Tiene menos de 21 años
            mujeresMenoresDe21++;
        }

        if (edad > mujerMasVieja) {
            // Si la edad ingresada es mayor a la de la más vieja, la sustituye
            mujerMasVieja = edad;
        }
    }else {
        // Es no-binario
        noBinarioCantidad++;
        noBinarioEdadSuma += edad;
    }

}while(confirm("¿Desea cargar los datos de otra persona?"));

// Calculamos los promedios
promedioEdadGeneral = (hombresEdadSuma + mujeresEdadSuma + noBinarioEdadSuma) / (hombresCantidad + mujeresCantidad + noBinarioCantidad);
promedioEdadMujeres = mujeresEdadSuma / mujeresCantidad;
promedioEdadHombres = hombresEdadSuma / hombresCantidad;
promedioEdadNoBinario = noBinarioEdadSuma / noBinarioCantidad;

// Calculamos los porcentajes
porcentajeMujeresMenores = (mujeresMenoresDe21 / mujeresCantidad) * 100;
porcentajeHombresMayores = (hombresMayoresDe21 / hombresCantidad) * 100;



// INFORMAMOS TODOS LOS DATOS
// console.log(`Promedio de edad general: ${promedioEdadGeneral}`);
// console.log(`Promedio de edad de las mujeres: ${promedioEdadMujeres}`);
// console.log(`Promedio de edad de los hombres: ${promedioEdadHombres}`);
// console.log(`Promedio de edad de los no-binarios: ${promedioEdadNoBinario}`);
// console.log(`Porcentaje de mujeres menores de 21: ${porcentajeMujeresMenores}%`);
// console.log(`Porcentaje de hombres mayores de 21: ${porcentajeHombresMayores}%`);
// console.log(`La mujer mas VIEJA tiene: ${mujerMasVieja} años`);
// console.log(`El hombre más joven tiene: ${hombreMasJoven} años`);

// OTRA FORMA DE INFORMAR LOS DATOS
console.log(`Promedio de edad general: ${promedioEdadGeneral}`);

if (mujeresCantidad > 0) {
    // Si cargó al menos a 1 mujer
    console.log(`Promedio de edad de las mujeres: ${promedioEdadMujeres}`);
    console.log(`La mujer mas VIEJA tiene: ${mujerMasVieja} años`);
    if (mujeresMenoresDe21 > 0) {
        // Si hay al menos 1 mujer menor de 21, muestra el porcentaje
        console.log(`Porcentaje de mujeres menores de 21: ${porcentajeMujeresMenores}%`);
    }else {
        console.log("No hay mujeres menores de 21");
    }
}else {
    console.log("No se han cargado datos de mujeres");
}

if (hombresCantidad > 0) {
    // Si cargó al menos a 1 hombre
    console.log(`Promedio de edad de los hombres: ${promedioEdadHombres}`);
    console.log(`El hombre mas joven tiene: ${hombreMasJoven} años`);
    if (hombresMayoresDe21 > 0) {
        // Si hay al menos 1 hombre mayor de 21, muestra el porcentaje
        console.log(`Porcentaje de hombres mayores de 21: ${porcentajeHombresMayores}%`);
    }else {
        console.log("No hay hombres mayores de 21");
    }
}else {
    console.log("No se han cargado datos de hombres");
}

if (noBinarioCantidad > 0) {
    // Si se cargó al menos a 1 no-binario
    console.log(`Promedio de edad de los no-binarios: ${promedioEdadNoBinario}`);
}else{
    console.log("No se han cargado datos de no-binarios");
}