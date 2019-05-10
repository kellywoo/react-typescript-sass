import axios, {AxiosInstance, AxiosPromise, AxiosRequestConfig} from 'axios';
import {Observable} from 'rxjs';

export class HttpClient {
  private axios: AxiosInstance;

  constructor(private options: AxiosRequestConfig = {}) {
    this.axios = axios.create(options);
  }

  request<T>(method: string, url: string, option = {}, body = {}) {
    let request: AxiosPromise<T>;
    switch (method) {
      case 'GET':
        request = this.axios.get<T>(url, option);
        break;
      case 'POST':
        request = this.axios.post<T>(url, body, option);
        break;
      case 'PUT':
        request = this.axios.put<T>(url, body, option);
        break;
      case 'PATCH':
        request = this.axios.patch<T>(url, body, option);
        break;
      case 'DELETE':
        request = this.axios.delete(url, option);
        break;
      default:
        throw new Error('Method not supported');
    }
    return new Observable<T>(observer => {
      request.then(response => {
        observer.next(response.data);
        observer.complete();
      }).catch((err: Error) => {
        observer.error(err);
        observer.complete();
      });
    });
  }

  interceptors(onSuccess:(value:AxiosRequestConfig) => AxiosRequestConfig,
               onError: (error: any) => any) {
    this.axios.interceptors.request.use(onSuccess, onError)
  }

  get<T>(url: string, option?: object) {
    return this.request<T>('GET', url, option);
  }

  post<T>(url: string, body: object, option = {}) {
    return this.request<T>('POST', url, option, body);
  }

  put<T>(url: string, body: object, option = {}) {
    return this.request<T>('PUT', url, option, body);
  }

  patch<T>(url: string, body: object, option = {}) {
    return this.request<T>('PATCH', url, option, body);
  }

  delete(url: string, option= {}) {
    return this.request('DELETE', url, option);
  }
}

export const httpClient = new HttpClient();

