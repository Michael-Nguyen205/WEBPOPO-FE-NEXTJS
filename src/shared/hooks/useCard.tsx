import { useState, useEffect } from "react";
import { getCookie } from "@/shared/helper/cokkie/cokkieHelper"; // Thư viện để lấy cookie nếu cần

type CartItem = {
  productId: number | null; // Có thể là null nếu liên quan đến package
  packageId: number | null; // Có thể là null nếu liên quan đến product
  quantity: number;
  payment_condition_on_monthly_id?: number;
  payment_condition_on_budget_id?: number;
};

export const useCart = () => {
  const userId = getCookie("user_id"); // Lấy userId từ cookie
  const [cart, setCart] = useState<CartItem[]>([]);

  // Lấy giỏ hàng từ localStorage khi hook được sử dụng
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem(`cart_${userId}`) || "[]");
    setCart(storedCart);
  }, [userId]);

  // Thêm sản phẩm vào giỏ hàng
  const addToCart = (item: CartItem) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) =>
        cartItem.productId === item.productId &&
        cartItem.packageId === item.packageId &&
        cartItem.payment_condition_on_monthly_id ===
          item.payment_condition_on_monthly_id &&
        cartItem.payment_condition_on_budget_id ===
          item.payment_condition_on_budget_id
    );

    if (existingItemIndex !== -1) {
      // Nếu sản phẩm đã tồn tại, tăng số lượng
      const newCart = [...cart];
      newCart[existingItemIndex].quantity += item.quantity;
      setCart(newCart);
      localStorage.setItem(`cart_${userId}`, JSON.stringify(newCart));
    } else {
      // Nếu sản phẩm chưa tồn tại, thêm mới
      const newCart = [...cart, item];
      setCart(newCart);
      localStorage.setItem(`cart_${userId}`, JSON.stringify(newCart));
    }
  };

  // Xóa một mục khỏi giỏ hàng
  const removeFromCart = (productId: number | null, packageId: number | null) => {
    const newCart = cart.filter(
      (item) => item.productId !== productId || item.packageId !== packageId
    );
    setCart(newCart);
    localStorage.setItem(`cart_${userId}`, JSON.stringify(newCart));
  };

  // Xóa toàn bộ giỏ hàng
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem(`cart_${userId}`);
  };

  // Tính tổng số lượng
  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    getTotalQuantity,
  };
};
