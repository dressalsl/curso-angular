import { Images } from './../models/placeholder.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
 // httpclient coloco como private
export class CrudService {
  constructor(private http: HttpClient) { }
  // tipar o metodo pro tipo de retorno
  public getFotos(): Observable<any> {
    //passo a url q vou usar no get
    return this.http.get(`https://jsonplaceholder.typicode.com/photos`);

  }
}


