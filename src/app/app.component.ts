import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { ClientesService } from './services/clientes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public clientes$: any = []
  title: any;
  constructor(private clientesServices: ClientesService){
    this.getClientes()
  }
  ngOnInit(): void {
    this.getClientes()
  }
  getClientes(){
    this.clientesServices.getAll().subscribe((clientes) => (this.clientes$ = clientes))
  }
  cadastrarClientes(){
    let nome = document.getElementById("nome") as HTMLInputElement;
    let cliente = {
      nome: nome.value
    }
    this.clientesServices.save(cliente).subscribe()
  }
}
