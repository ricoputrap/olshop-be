import ProductRepository from ".";
import supabase from "../../../clients/supabase";
import { ProductItem } from "../index.types";

class SupabaseProductRepository implements ProductRepository {
  public async getAll(): Promise<ProductItem[]> {
    try {
      const { data, error } = await supabase
        .from("PRODUCT")
        .select("*");

      if (error) throw error;
      if (data == null)
        return [];

      const products: ProductItem[] = data.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        stock: item.stock,
        category_id: item.category_id,
        shop_id: item.shop_id
      }));

      return products;
    }
    catch (error: any) {
      const message = (error as Error).message;
      throw message;
    }
  }
}

export default SupabaseProductRepository;