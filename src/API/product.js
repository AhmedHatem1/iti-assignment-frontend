import { axiosBase } from "./index";

export function getProducts() {
  return axiosBase.get(`/products`).then(res => res.data);
}

export function EditProduct(productUpdated, productId) {
  axiosBase.patch(`/products/${productId}`, productUpdated);
}
