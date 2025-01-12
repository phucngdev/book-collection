export const toSlug = (str) => {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // Xóa dấu
  str = str
    .normalize("NFD") // Chuyển chuỗi sang Unicode tổ hợp
    .replace(/[\u0300-\u036f]/g, ""); // Xóa các ký tự dấu sau khi tách tổ hợp

  // Thay ký tự đĐ
  str = str.replace(/[đĐ]/g, "d");

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, "");

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, "-");

  // Xóa ký tự - liên tiếp
  str = str.replace(/-+/g, "-");

  // Xóa phần dư - ở đầu & cuối
  str = str.replace(/^-+|-+$/g, "");

  return str;
};
