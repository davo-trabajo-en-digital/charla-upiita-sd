const sincronizador = require("./sincronizador");
/*import parser from "argv-parser";
var data = parser.parse(process.argv, {
  rules: {
    ruta: {
      type: Array
    }
  }
});
*/
/*
let rutas = ["competencias", "profesionistas", "vacantes"];

for (let i in rutas) {
  sincronizador(rutas[i]);
}
*/
/*
if (data.parsed.ruta) {
  for (let i in data.parsed.ruta) {
    sincronizador(data.parsed.ruta[i]);
  }
} else {
  console.error("Indique una ruta");
  process.exit(1);
}
*/

if (process.env.RUTA) {
  console.log(`process.env.RUTA: ${process.env.RUTA}`);
  sincronizador(process.env.RUTA);
} else {
  console.error("Indique una ruta");
  process.exit(1);
}
