import { ApiService } from '@/shared/service/api.service';


export interface ILoginCredentials {
  email: string;
  password: string;
}

export interface IRegisterCredentials extends ILoginCredentials {
  email: string;
}

interface IAuthResponse {
  success: boolean;
  data: string;
  message: string;
}

export class AuthService {
  private readonly apiService = new ApiService();
  
  async login(credentials: ILoginCredentials): Promise<IAuthResponse> {
    const response = await this.apiService.post<IAuthResponse>('/auth/login', credentials);
    return response;
  }

  async register(credentials: IRegisterCredentials): Promise<Partial<IAuthResponse>> {
    const response = await this.apiService.post<Partial<IAuthResponse>>('/auth/register', credentials);
    return response;
  }
}
