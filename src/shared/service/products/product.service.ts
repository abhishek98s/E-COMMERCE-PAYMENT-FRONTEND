import { ApiService } from '@/shared/service/api.service';


export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface IProductResponse {
  success: boolean;
  data: IProduct[];
  message: string;
}

interface IProductAdd {
  name: string;
  description: string;
  price: number;
  image_url: string;
  stock_quantity: number;
}

export class ProductService {
  private readonly apiService = new ApiService();

  async getProducts(): Promise<IProductResponse> {
    const response = await this.apiService.get<IProductResponse>('/product');
    return response;
  }

  async addProduct(product: IProductAdd): Promise<IProductResponse> {
    const response = await this.apiService.post<IProductResponse>('/product', product);
    return response;
  }
  async updateProduct(product: IProduct): Promise<IProductResponse> {
    const response = await this.apiService.put<IProductResponse>(`/product/${product.id}`, product);
    return response;
  }

  async deleteProduct(id: number): Promise<IProductResponse> {
    const response = await this.apiService.delete<IProductResponse>(`/product/${id}`);
    return response;
  }
}
