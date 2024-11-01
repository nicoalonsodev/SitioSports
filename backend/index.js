//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const server = require("./src/app.js");
const { conn, Product  } = require("./src/db.js");
const { PORT } = process.env;
const { Op } = require("sequelize"); // Importa Op de sequelize

// Syncing all the models at once.
conn.sync({ alter: true }).then(async () => {
  try {
    // Encuentra y actualiza todos los productos con categoría "Botines" o "Zapatillas"
    await Product.update(
      {
        dimensions: {
          weight: 500,
          height: 10,
          width: 10,
          length: 15,
        },
      },
      {
        where: {
          cat: {
            [Op.or]: ["Botines", "Zapatillas"], // Usar Op.or para especificar múltiples condiciones
          },
        },
      }
    );

    console.log("Dimensions updated for products in categories 'Botines' and 'Zapatillas'");

    // Iniciar el servidor
    server.listen(PORT, () => {
      console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
    });
  } catch (error) {
    console.error("Error updating dimensions:", error);
  }
});

