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
    // Encuentra y actualiza todos los productos con categoría "Accesorios", "Camisetas" o "Indumentaria"
    await Product.update(
      {
        dimensions: {
          weight: 200,
          height: 2,
          width: 10,
          length: 5,
        },
      },
      {
        where: {
          cat: {
            [Op.or]: ["Accesorios", "Camisetas", "Indumentaria"], // Condición para Accesorios, Camisetas e Indumentaria
          },
        },
      }
    );

    console.log("Dimensions updated for products in categories 'Accesorios', 'Camisetas', and 'Indumentaria'");


    // Iniciar el servidor
    server.listen(PORT, () => {
      console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
    });
  } catch (error) {
    console.error("Error updating dimensions:", error);
  }
});

