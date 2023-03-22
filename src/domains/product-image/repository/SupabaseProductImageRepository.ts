import ProductImageRepository from ".";
import supabase from "../../../clients/supabase";
import { ProductImage } from "../index.types";

class SupabaseProductImageRepository implements ProductImageRepository {
  public async getProductMainImages(productIDs: string[]): Promise<ProductImage[]> {
    try {
      const { data, error } = await supabase
        .from("PRODUCT_IMAGE")
        .select("*")
        .in("product_id", productIDs)
        .eq("img_order", 1);

      if (error) throw error;
      if (data == null)
        return [];

      const productImages: ProductImage[] = data.map(item => ({
        id: item.id,
        label: item.label,
        url: item.url,
        img_order: item.img_order,
        product_id: item.product_id
      }));

      return productImages;
    }
    catch (error: any) {
      const message = (error as Error).message;
      throw message;
    }
  }
}

export default SupabaseProductImageRepository;