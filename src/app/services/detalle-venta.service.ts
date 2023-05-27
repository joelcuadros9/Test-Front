import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

const baseURL = environment.API_URL + '/detalles-ventas';

@Injectable({
  providedIn: 'root'
})
export class DetalleVentaService {

  constructor(private httpClient: HttpClient) {
  }

  getAllDetallesVentas() {
    return this.httpClient.get(baseURL);
  }

  getByIdDetalleVenta(id: number) {
    const API_URL = `${baseURL}/id`;
    return this.httpClient.get(API_URL);
  }

  createDetalleVenta(data: any) {
    return this.httpClient.post(baseURL, data);
  }

  updateDetalleVenta(data: any) {
    return this.httpClient.put(baseURL, data);
  }

  deleteDetalleVenta(id: number) {
    const API_URL = `${baseURL}/id`;
    return this.httpClient.delete(API_URL);
  }

}
