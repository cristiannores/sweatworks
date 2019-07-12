import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PublicationsService {

  private service: string = environment.baseUrl + environment.publicationService;
  constructor(
    private http: HttpClient
  ) { }

  public create(data: any): Observable<any> {
    return this.http.post(this.service, data);
  }

  public delete(id: string): Observable<any> {
    return this.http.delete(this.service + '/' + id);
  }

  public update(id: string, data: any): Observable<any> {
    return this.http.put(this.service + '/' + id, data);
  }

  public findAll(): Observable<any> {
    return this.http.get(this.service);
  }

  public findOne(id: string): Observable<any> {
    return this.http.get(this.service + '/' + id);
  }

  public findBy(  params: any) {
    return this.http.post(this.service, params);
  }
  public findByAuthor(  userId: string,  title : string  = '', order : string = '' , pagination : any) {
    return this.http.post(this.service + '/find-by-author', {userId: userId, title : title , order: order , pagination});
  }


}
