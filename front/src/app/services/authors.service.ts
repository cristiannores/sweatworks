import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  private service : string = environment.baseUrl + environment.authorService;
  constructor(
    private http: HttpClient
  ) { }

  public create(data: any) : Observable<any>{
    return this.http.post(this.service,data);
  }

  public delete(id : string) : Observable<any>{
    return this.http.delete(this.service + '/'  + id);
  }

  public update (id : string, data: any) : Observable<any>{
    return this.http.put(this.service + '/' + id , data);
  }

  public findAll() : Observable<any>{
    return this.http.get(this.service);
  }

  public findOne(id : string) : Observable<any>{
    return this.http.get(this.service + '/' + id);
  }

  public findBy(id: string, params: any){
    return this.http.post(this.service, params);
  }
}
