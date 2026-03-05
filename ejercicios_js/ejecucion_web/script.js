function introduceNumeros() {

let datos = [];

while (true) {
  let num = Number(prompt("Introduce número"));
  if (num == 0){
        console.log(datos); // resultado final 
        break;
    }
  for (let i = 0; i < datos.length; i++) {
    if (datos[i] > num) {
      part1 = datos.slice(0, i);
      part2 = datos.slice(i);
      part1.push(num);
      datos = part1.concat(part2); // crea un nuevo array con el num
      break;
    } else if(i === datos.length-1) {
      datos.push(num);
      break;
    }
  }

  if (datos.length == 0) 
    datos.push(num); // sólo para la primera vez

}
}

introduceNumeros();





