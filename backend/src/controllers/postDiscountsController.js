const { Discount } = require("../db");

const postDiscountsController = async (code, description, percentage, remainingUses) => {
  let discount;

  discount = await Discount.create({
    code,
    description,
    percentage,
    remainingUses
  });
  return discount;
};

module.exports = postDiscountsController;
