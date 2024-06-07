const formatPrice = (price) => {
    return parseFloat(price).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

module.exports = formatPrice;