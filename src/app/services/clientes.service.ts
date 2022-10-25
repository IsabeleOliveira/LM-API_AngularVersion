import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private apiUrl = "http://localhost:8080/clientes"
  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get<any>(this.apiUrl)
  }

  save(cliente: object){
    console.log(cliente)
    return this.http.post<Object>(this.apiUrl, cliente);
  }
}
