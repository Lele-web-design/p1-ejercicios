// DECLARO LAS VARIABLES
acumuladorDesaprobados = 0;
acumuladorAprobados = 0;
acumuladorPromocionados = 0;

contadorDesaprobados = 0;
contadorAprobados = 0;
contadorPromocionados = 0;

promedioDesaprobados = 0;
promedioAprobados = 0;
promedioPromocionados = 0;

notaMasBaja = 10;
notaMasAlta = 1;

do{
    let notaValidacion = false; // Doy por hecho que el valor que usuario va a ingresar no es válido
    let nota = 0;
    do{
        nota = parseInt(prompt("Ingrese la nota (1 - 10)"));

        // VALIDACIÓN -- POSIBLES DATOS
        // NaN
        // Número menor a 1
        // Número mayor a
        if (isNaN(nota)) {
            alert("Por favor, ingrese un valor numérico");
        }else if (nota < 1) {
            alert("El valor mínimo admitido es de 1");
        }else if (nota > 10) {
            alert("El valor máximo admitido es de 10");
        }else {
            // Si el valor es válido, paso notaValidación a true para que salga del do-while
            notaValidacion = true;
        }
    }while(notaValidacion == false)

    // IF PARA LOS APROBADOS, DESAPROBADOS, Y PROMOCIONADOS
    if (nota < 4) {
        // desaprobados
        acumuladorDesaprobados += nota;
        contadorDesaprobados++;
    } else {
        // aprobados
        acumuladorAprobados += nota;
        contadorAprobados++;

        if(nota >= 7) {
            // promocionados
            acumuladorPromocionados += nota;
            contadorPromocionados++;
        }
    }

    // CONDICIONALES PARA LA MÁXIMA Y LA MÍNIMA NOTA CARGADA
    if (nota > notaMasAlta) {
        notaMasAlta = nota;
    }
    if (nota < notaMasBaja) {
        notaMasBaja = nota;
    }
}while(confirm("¿Desea cargar otra nota?"));

// CALCULAMOS LOS PROMEDIOS
promedioDesaprobados = (acumuladorDesaprobados / contadorDesaprobados).toFixed(1); // .toFixed me permite mostrar sólamente un dígito luego de la coma
promedioAprobados = (acumuladorAprobados / contadorAprobados).toFixed(1);
promedioPromocionados = (acumuladorPromocionados / contadorPromocionados).toFixed(1);

// INFORMAMOS LOS PROMEDIOS
alert(`Hubo ${contadorDesaprobados} alumnos desaprobados y su promedio fue de ${promedioDesaprobados}`);
alert(`Hubo ${contadorAprobados} alumnos aprobados y su promedio fue de ${promedioAprobados}`);
alert(`Hubo ${contadorPromocionados} alumnos promocionados y su promedio fue de ${promedioPromocionados}`);

// INFORMAMOS LA NOTA MÁXIMA Y MÍNIMA
alert(`La nota máxima ingresada fue de ${notaMasAlta}`);
alert(`La nota mínima ingresada fue de ${notaMasBaja}`);