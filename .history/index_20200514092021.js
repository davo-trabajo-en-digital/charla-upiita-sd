const sincronizador = require("./sincronizador");
if (process.env.RUTA) {
  console.log(`process.env.RUTA: ${process.env.RUTA}`);
  sincronizador(process.env.RUTA);
} else {
  console.error("Indique una ruta");
  process.exit(1);
}
