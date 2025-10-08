import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom, lastValueFrom, Observable } from 'rxjs';
import { Iserie } from '../interfaces/iserie';


@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  httpClient = inject(HttpClient);
  private baseUrl : string = 'https://peticiones.online/api/series';

  constructor() { }

  getAllWithObservables(): Observable<Iserie[]> {
    return this.httpClient.get<Iserie[]>(this.baseUrl);
  }

  getAllWithPromises(): Promise<Iserie[]> {
    return lastValueFrom(this.httpClient.get<Iserie[]>(this.baseUrl));
  }
   //con promesas
  getById(_id: string): Promise<Iserie> {
    return lastValueFrom(this.httpClient.get<Iserie>(`${this.baseUrl}/${_id}`))
  }


  //con observables
  getByIdWithObservable(_id: string): Observable<Iserie> {
    return this.httpClient.get<Iserie>(`${this.baseUrl}/${_id}`);
  }


  insert(serie: Iserie): Promise<Iserie>{
    return lastValueFrom(this.httpClient.post<Iserie>(this.baseUrl, serie));
  }

  update(serie: Iserie): Promise<Iserie> {
    return lastValueFrom(this.httpClient.put<Iserie>(this.baseUrl + "/" +serie._id, serie));
  }

  delete(_id: string): Promise<Iserie> {
    return lastValueFrom(this.httpClient.delete<Iserie>(`${this.baseUrl}/${_id}`));
  }


  





}