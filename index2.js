import chalk from 'chalk';
import { format, isBefore } from 'date-fns';

// Obtener fecha actual
const hoy = new Date();
console.log(chalk.blue(`Fecha de hoy: ${format(hoy, 'dd/MM/yyyy')}`));

// Definir fecha de entrega (ejemplo: 7 de junio de 2025)
const fechaEntrega = new Date(2025, 5, 7); // Recordá: junio = mes 5 (los meses van de 0 a 11)
const fechaEntregaFormateada = format(fechaEntrega, 'dd/MM/yyyy');

// Mostrar según si la fecha ya pasó o no
if (isBefore(hoy, fechaEntrega)) {
  console.log(chalk.yellow(`Fecha de entrega: ${fechaEntregaFormateada} (¡todavía hay tiempo!)`));
} else {
  console.log(chalk.red(`Fecha de entrega: ${fechaEntregaFormateada} (¡ya pasó!)`));
}
