import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

const baseURL = environment.API_URL + '/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private httpClient: HttpClient) {
  }

  getAllProductos() {
    return this.httpClient.get(baseURL);
  }

  getByIdProducto(id: number) {
    const API_URL = `${baseURL}/id`;
    return this.httpClient.get(API_URL);
  }

  createProducto(data: any) {
    return this.httpClient.post(baseURL, data);
  }

  updateProducto(data: any) {
    return this.httpClient.put(baseURL, data);
  }

  deleteProducto(id: number) {
    const API_URL = `${baseURL}/id`;
    return this.httpClient.delete(API_URL);
  }
}
