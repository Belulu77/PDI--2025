// Importar librerías
import chalk from 'chalk';
import { format, isBefore } from 'date-fns';

// Integrantes del grupo
const integrantes = ["Belén", "Integrante2", "Integrante3"]; // Cambiar los nombres

// Mostrar saludo en verde
integrantes.forEach(nombre => {
  console.log(chalk.green(`Hola, soy ${nombre}`));
});

// Mostrar fecha de hoy en azul
const hoy = new Date();
console.log(chalk.blue(`Fecha de hoy: ${format(hoy, 'dd/MM/yyyy')}`));

// Fecha de entrega (ejemplo: 7 de junio de 2025)
const fechaEntrega = new Date(2025, 5, 7); // Recordá: junio es el mes 5 (los meses van de 0 a 11)
const fechaEntregaFormateada = format(fechaEntrega, 'dd/MM/yyyy');

// Mostrar fecha de entrega con color según si pasó o no
if (isBefore(hoy, fechaEntrega)) {
  console.log(chalk.yellow(`Fecha de entrega: ${fechaEntregaFormateada} (¡todavía hay tiempo!)`));
} else {
  console.log(chalk.red(`Fecha de entrega: ${fechaEntregaFormateada} (¡ya pasó!)`));
}
