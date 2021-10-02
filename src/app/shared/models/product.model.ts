import {Category} from "./category.model";

export interface Product {
  skuId: number;
  name: string;
  description: string;
  url: string,
  categoryList: Category[];
}
