import { ProductProps } from "@/utils/data/products";
import { ProductCartProps } from "../cart-store";

export function add(products: ProductCartProps[], newProcuct: ProductProps) {
    const existinProduct = products.find(({ id }) => newProcuct.id === id);

    if (existinProduct) {
        return products.map((product) => product.id === existinProduct.id ? { ...product, quantity: product.quantity + 1 }
            : product)
    }

    return [...products, { ...newProcuct, quantity: 1 }]
}

export function remove(products: ProductCartProps[], productRemovedId: string) {
    const updateProducts = products.map((product) =>
        product.id === productRemovedId ?
            {
                ...product,
                quantity: product.quantity > 1 ? product.quantity - 1 : 0
            } : product)

    return updateProducts.filter((product) => product.quantity > 0)
}