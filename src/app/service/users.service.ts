import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(environment.url + '/users')

  }

  findById(id:number):Observable<any>{
    return this.http.get(environment.url + '/users/' + id );
  }


  // updateUser(user:User):Observable<any>{

  //   return this.http.put(environment.url + '/users/' + user );
  // }


  delete(id:number):Observable<any>{
    return this.http.delete(environment.url + '/users/' + id );

  }




}
