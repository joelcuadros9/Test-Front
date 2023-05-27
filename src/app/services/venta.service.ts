import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

const baseURL = environment.API_URL + '/ventas';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(private httpClient: HttpClient) {
  }

  getAllVentas() {
    return this.httpClient.get(baseURL);
  }

  getByIdVenta(id: number) {
    const API_URL = `${baseURL}/id`;
    return this.httpClient.get(API_URL);
  }

  createVenta(data: any) {
    return this.httpClient.post(baseURL, data);
  }

  updateVenta(data: any) {
    return this.httpClient.put(baseURL, data);
  }

  deleteVenta(id: number) {
    const API_URL = `${baseURL}/id`;
    return this.httpClient.delete(API_URL);
  }

}
