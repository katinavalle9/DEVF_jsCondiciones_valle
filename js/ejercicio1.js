// // 1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.
const answer = prompt("Eres bellisimo/a?");
if (answer === "si") {
  alert("Ciertamente");
} else {
  alert("No te creo");
}

// //2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.
const getInto = parseInt(prompt("Ingrese un número"));
if (getInto % 2 === 0) {
  alert(`El número ${getInto} es un numero divisible entre 2`);
} else {
  alert(`El número ${getInto} no es un numero divisible entre 2`);
}

// //3. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.
const getInto1 = parseInt(prompt("Ingrese un número"));
if (getInto % 2 === 0) {
  alert(`Es par`);
} else {
  alert(`Es impar`);
}

// //4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.
const clientNumber = parseInt(prompt("Ingrese su número de cliente"));
if (clientNumber === 1000) {
  alert("Ganaste el premio");
} else {
  alert(
    `El número ${clientNumber} no ha sido ganador, lo sentimos, sigue participando`
  );
}

// //5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.
let enterNumber1 = parseInt(prompt("Ingrese el primer número"));
let enterNumber2 = parseInt(prompt("Ingrese el segundo número"));
if (enterNumber1 < enterNumber2) {
  alert("El primer numero que ingresaste es menor que el segundo número");
} else {
  alert("El primer numero que ingresaste es mayor que el segundo número");
}

// //6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.
let number = parseInt(prompt("Ingrese el primer número"));
let number2 = parseInt(prompt("Ingrese el segundo número"));
let number3 = parseInt(prompt("Ingrese el tercer número"));

if (number > number2 && number > number3) {
  alert(`El ${number} es mayor que los demás números`);
} else if (number2 > number && number2 > number3) {
  alert(`El ${number2} es mayor que los demás números`);
} else if (number3 > number && number3 > number2) {
  alert(`El número ${number3}es mayor que los demás numeros`);
} else {
  if (number === number2) {
    alert("El numero uno y el numero 2 son iguales");
  } else if (number === number3) {
    alert("El numero uno y el numero 3 son iguales ");
  } else if (number2 === number3) {
    alert("El numero 2 y el numero 3 son iguales");
  }
}

// //7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.
// const days = prompt("Ingrese un día de la semana").toLowerCase();

switch (days) {
  case "lunes":
    alert("Hoy se empieza con muchas ganas");
    break;
  case "martes":
    alert("Un día menos");
    break;
  case "miercoles":
    alert("El ombligo de la semana");
    break;
  case "jueves":
    alert("Ya casi acaba la semana");
    break;
  case "viernes":
    alert("Al fin viernes ✨");
    break;
  case "sabado":
    alert("Es hora de descansar");
    break;
  case "domingo":
    alert("Agradece por vivir una semana más");
    break;
  default:
    confirm("Asegurate de haber ingresado un día de la semana");
    break;
}

// //8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.
let score;
while (true) {
  score = parseInt(prompt("Ingrese una calificacion entre 1 y 10"));
  if (score >= 1 && score <= 10) {
    break;
  } else {
    alert("Número fuera del rango");
  }
}
if (score < 6) {
  alert("Reprobado");
} else if (score >= 6 && score <= 8) {
  alert("Regular");
} else if (score === 9) {
  alert("Bien");
} else if (score === 10) {
  alert("Excelente");
}

// /*9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
// El helado sin topping cuesta 50 MXN.
// El topping de oreo cuesta 10 MXN.
// El topping de KitKat cuesta 15 MXN.
// El topping de brownie cuesta 20 MXN.
// En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping. */

let iceCream;
let buy;
let price = 0;
while (true) {
  iceCream = parseInt(
    prompt(
      "Bienvenidx, ¿Quiere comprar un helado con Tooping o sin tooping?  1 Con tooping / 2 Sin tooping"
    )
  );
  if (iceCream === 1) {
    buy = parseInt(
      prompt(
        "¿Cual quisieras agregarle a tu helado? \n 1 El topping de oreo cuesta 10 MXN. \n 2 El topping de KitKat cuesta 15 MXN. \n 3 El topping de brownie cuesta 20 MXN. "
      )
    );
    if (buy === 1) {
      price += 10;
      alert(
        "Su orden está lista con el topping de oreo. Total a pagar: " +
          price +
          " MXN."
      );
    } else if (buy === 2) {
      price += 15;
      alert(
        "Su orden está lista con el topping de KitKat. Total a pagar: " +
          price +
          " MXN."
      );
    } else if (buy === 3) {
      price += 20;
      alert(
        "Su orden está lista con el topping de brownie. Total a pagar: " +
          price +
          " MXN."
      );
    } else {
      alert(
        "No tenemos ese topping. Su orden está lista sin ningún topping. Total a pagar: " +
          price +
          " MXN."
      );
    }
  } else if (iceCream === 2) {
    keepBuy = confirm(
      "El helado sin topping cuesta 50 MXN.¿Desea continuar con la compra? 1 si / 2 no"
    );
    if (keepBuy == 1) {
      alert("Muchas gracias por su compra, su pedido está listo");
    } else {
      alert("Muchas gracias por visitarnos");
    }
  }
  continue;
}

/* 10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: Course: $4999 MXN
Carrera $3999 MXN
Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
Beca Facebook: 20% de descuento.
Beca Google: 15% de descuento.
Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
Course: 2 meses
Carrera 6 meses
Master: 12 meses*/
let costProgram;
let beca;
programa = null;
tieneBeca = null;
let cost;
let discount = 0;
let costmonth = 0;
let month = 0;
let discountCost = 0;
let totalCost = 0;
do {
  costProgram = parseInt(
    prompt(
      "El programa educativo contempla 3 diferentes niveles con diferentes costos mensuales: \n1 Course: $4999 MXN \n2 Carrera: $3999 MXN \n3 Master: $2999 MXN \n¿En cuál estás interesadx?"
    )
  );
  if (costProgram === 1 || costProgram === 2 || costProgram === 3) {
    if (costProgram === 1) {
      costmonth = 4999;
      programa = "Course y su precio es de $4999 por mes";
      month = 2;
    } else if (costProgram === 2) {
      costmonth = 3999;
      programa = "Carrera y su precio es de $3999 por mes";
      month = 6;
    } else {
      costmonth = 2999;
      programa = "Master y su precio es de $2999 por mes";
      month = 12;
    }

    alert(`Tu programa fué ${programa}`);
    do {
      beca = parseInt(prompt("¿Cuentas con alguna beca? 1 SI / 2 NO"));
      if (beca === 1) {
        tieneBeca = parseInt(
          prompt(
            "¿Cual es la beca que tienes? \n1 Beca Facebook: 20% de descuento. \n2 Beca Google: 15% de descuento.\n3 Beca Jesua: 50% de descuento."
          )
        );
      } else if (beca === 2) {
        adquirirBeca = prompt(
          "Deseas adquirir una beca? SI / NO "
        ).toLowerCase();
        if (adquirirBeca === "si") {
          tieneBeca = parseInt(
            prompt(
              "¿Cual beca quisieras adquirir? \n1 Beca Facebook: 20% de descuento. \n2 Beca Google: 15% de descuento.\n3 Beca Jesua: 50% de descuento. "
            )
          );
          alert("Beca adquirida");
        }
      }
    } while (beca !== 1 && beca !== 2);
    if(tieneBeca !==1 && tieneBeca !==2 && tieneBeca !==3){
      alert("Opción de beca no válida, continuaremos el proceso sin el descuento de una beca");
    }
    if (tieneBeca === 1) {
      alert("Tienes un descuento del 20%");
      discount = 0.2;
    } else if (tieneBeca === 2) {
      alert("Tienes un descuento del 15%");
      discount = 0.15;
    } else if (tieneBeca === 3) {
      alert("Tienes un descuento del 50%");
      discount = 0.5;
    }
    discountCost = costmonth - costmonth * discount;
    totalCost = discountCost * month;

    confirm(`Precio mensual sería de: $ ${discountCost.toFixed(2)}MXN`);
    alert(`Costo total por ${month} meses:$ ${totalCost.toFixed(2)}MXN`);
  } else {
    alert("Opción inválida");
  }
} while (costProgram !== 1 && costProgram !== 2 && costProgram !== 3);

/*11. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué:
total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.*/

let kilometro;
let precioKilometro = 0;
let litrosconsumidos = 0;
let extraPorLitro = 0;
totalAPagar = 0;
do {
  let queVehiculoTienes = parseInt(
    prompt("¿Qué tipo de vehículo tienes? \n 1 Coche \n 2 Moto \n 3 Autobús")
  );
  kilometro = parseInt(prompt("¿Cuántos kilometros recorriste?"));
  litrosconsumidos = parseInt(prompt("¿Cuantos litros consumiste?"));
  if (
    queVehiculoTienes === 1 ||
    queVehiculoTienes === 2 ||
    queVehiculoTienes === 3
  ) {
    if (queVehiculoTienes === 1) {
      precioKilometro = 0.2;
    } else if (queVehiculoTienes === 2) {
      precioKilometro = 0.1;
    } else {
      precioKilometro = 0.5;
    }
  }

  if (litrosconsumidos > 0 && litrosconsumidos <= 100) {
    extraPorLitro = extraPorLitro + 5;
  } else if (litrosconsumidos > 100) {
    extraPorLitro = extraPorLitro + 10;
  }

  totalAPagar = precioKilometro * kilometro + extraPorLitro;

  confirm(`El total a pagar es: ${totalAPagar.toFixed(2)}`);
} while (
  queVehiculoTienes !== 1 &&
  queVehiculoTienes !== 2 &&
  queVehiculoTienes !== 3
);
