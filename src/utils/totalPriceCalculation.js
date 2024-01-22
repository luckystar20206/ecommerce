

export const totalPriceClc = (cart) => {
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
      // quantity = quantity + product.quantity
      total = total + product.price * product.quantity;
      shipping = shipping + product.shipping;
    }
  
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + tax + shipping;

    return {total, shipping, tax, grandTotal}
}