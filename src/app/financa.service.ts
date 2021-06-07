import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Financa } from './model/financa';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinancaService {

  private baseURL: string = `http://localhost:3000/financas`;

  private colecaoAtualizada = new Subject<Financa[]>();

  constructor(
    private httpClient: HttpClient
  ) { }

  // funções publicas
  public list(){
    this.httpClient.get<{financas: Financa[]}>(this.baseURL).subscribe(resultado => {
      this.colecaoAtualizada.next(resultado.financas);
    });
  }

  public add (financa: Financa){
    this.httpClient.post<{financas: Financa[]}>(this.baseURL, financa).subscribe(resultado =>{
    this.colecaoAtualizada.next(resultado.financas);
    })
  }

  public update (financa: Financa){
    this.httpClient.put<{financas: Financa[]}>(this.baseURL, financa).subscribe(resultado => {
    this.colecaoAtualizada.next(resultado.financas);
    })
  }

  // funções privadas
  getColecaoAtualizada(){
    return this.colecaoAtualizada.asObservable();
  }

}
