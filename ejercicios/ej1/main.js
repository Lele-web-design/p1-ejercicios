// PIDO LOS EXTREMOS PARA COMPARAR
const rangoMin = parseInt(prompt("Ingrese el número mínimo del rango"));
const rangoMax = parseInt(prompt("Ingrese el número máximo del rango"));

// PIDO EL NÚMERO PARA COMPARAR
const rangoNum = parseInt(prompt("Ingrese el número para comparar"));

// PREGUNTO SI EL NÚMERO ESTÁ EN RANGO (Y LO INFORMO)
if (rangoNum > rangoMin && rangoNum < rangoMax){
    alert(`El número está en rango (${rangoMin} - ${rangoMax})`);
} else{
    alert(`El número no está en rango (${rangoMin} - ${rangoMax})`);
}

// PREGUNTO SI EL NÚMERO ES PAR O IMPAR (Y LO INFORMO)
if(rangoNum % 2 == 0) {
    alert(`El número ${rangoNum} es par`);
} else{
    alert(`El número ${rangoNum} es impar`);
}