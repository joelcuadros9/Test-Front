import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

const baseURL = environment.API_URL + '/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpClient: HttpClient) {
  }

  getAllClientes() {
    return this.httpClient.get(baseURL);
  }

  getByIdCliente(id: number) {
    const API_URL = `${baseURL}/id`;
    return this.httpClient.get(API_URL);
  }

  createCliente(data: any) {
    return this.httpClient.post(baseURL, data);
  }

  updateCliente(data: any) {
    return this.httpClient.put(baseURL, data);
  }

  deleteCliente(id: number) {
    const API_URL = `${baseURL}/id`;
    return this.httpClient.delete(API_URL);
  }

}
