import { AxiosInstance, AxiosRequestConfig } from 'axios';

export default class BaseController {
    constructor(protected httpClient: AxiosInstance) {}

    protected async MakeRequest<T = any>(config: AxiosRequestConfig): Promise<T> {
        config.headers = {
            ...config.headers,
        };

        const response = await this.httpClient.request<T>(config);

        return response.data;
    }
}
