import { Product } from '../../../../core/model';

interface CartProductModel {
  count: number;
}

export type CartProduct = CartProductModel & Product;
