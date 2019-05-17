import { axiosBase } from "./index";

export function getProducts() {
  return axiosBase.get(`/products`).then(res => res.data);
}

export function editProduct(id, product) {
  return axiosBase.put(`/Products/${id}`, product).then(res => res.data);
}
