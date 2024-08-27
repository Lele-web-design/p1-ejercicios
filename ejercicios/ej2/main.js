// PIDOS LOS DATOS DE LA CATEGORÍA Y SUB-CATEGORÍA POR PROMPT
const categoria = prompt(`Escoga la categoría (1, 2 o 3) teniendo en cuenta lo siguiente:\n
\t1 = u$s 1000\n
\t2 = u$s 1500\n
\t3 = u$s 2000\n
`);
const subCategoria = prompt(`Escoga la sub-categoría (A, B o C) teniendo en cuenta lo siguiente:\n
\tA = x1.5\n
\tB = x2\n
\tC = x2.5\n
`);



// DEFINO EL VALOR DEL SUELDO
let sueldoValor = 0;
switch(categoria){
    case '1':
        sueldoValor = 1000;
        break;
    case '2':
        sueldoValor = 1500;
        break;
    case '3':
        sueldoValor = 2000;
        break;
    default:
        alert("El valor ingresado para la categoría no es válido");
        break;
}
switch(subCategoria.toLowerCase()){
    case 'a':
        sueldoValor *= 1.5;
        break;
    case 'b':
        sueldoValor *= 2;
        break;
    case 'c':
        sueldoValor *= 2.5;
        break;
    default:
        alert("El valor ingresado para la sub-categoría no es válido");
        break;
}
alert(`Tu sueldo es de ${sueldoValor}`);



// INFORMAMOS EL RANGO EN EL QUE ESTÁ
if (sueldoValor >= 1500 && sueldoValor <= 3000){
    alert("Estás en el rango inicial");
}else if (sueldoValor >= 3001 && sueldoValor <= 4000){
    alert("Estás en el rango intermedio");
}else if (sueldoValor >= 4001){
    alert("Estás en el rango avanzado");
}else {
    alert("Señor... lastimamos informarles que según nuestros calculos, usted no tiene chamba")
}