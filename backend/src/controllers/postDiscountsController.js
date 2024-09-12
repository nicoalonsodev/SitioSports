const { Discount } = require("../db");

const postDiscountsController = async (code, description, percentage) => {
  let discount;

  discount = await Discount.create({
    code,
    description,
    percentage,
  });
  return discount;
};

module.exports = postDiscountsController;
