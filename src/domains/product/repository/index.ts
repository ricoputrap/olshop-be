import supabase from "../../../clients/supabase";

class ProductRepository {
  public async getAll(): Promise<any[]> {
    try {
      const { data, error } = await supabase
        .from('PRODUCT')
        .select('*');

      if (error) throw error;
      if (data == null)
        return [];

      return data;
    }
    catch (error: any) {
      const message = (error as Error).message;
      throw message;
    }
  }
}

export default ProductRepository;