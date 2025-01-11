export const formatPrice = (price) => {
  price = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
  return price;
};

export const formatDate = () => {
  const today = new Date();
  const options = { day: "numeric", month: "short", year: "numeric" };
  return today.toLocaleDateString("en-US", options);
};
